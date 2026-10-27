#!/usr/bin/env node
/**
 * Soạn nháp changelog từ diff code thật (không phải chỉ tiêu đề commit) + đối chiếu với nội dung docs
 * hiện có, để tránh đúng 2 lỗi đã gặp khi làm tay: nói "chưa có"/"cần xoá" sai vì chưa đọc lại docs
 * thật trước khi kết luận. Chạy từ GitHub Actions ở ANU_API hoặc FRONTEND_ANU_F, output ghi vào
 * CRM_DOC/pending-review/.
 *
 * Input qua env:
 *   REPO_NAME        - "ANU_API" hoặc "FRONTEND_ANU_F"
 *   DIFF_FILE         - path tới file chứa git diff (before..after của lần push này)
 *   COMMIT_LOG_FILE   - path tới file chứa git log (before..after)
 *   DOCS_DIR          - path tới checkout của CRM_DOC (để đọc toàn bộ *.md hiện có làm ngữ cảnh)
 *   ANTHROPIC_API_KEY - secret
 *   OUTPUT_FILE       - path để ghi kết quả (markdown)
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

function readAllMarkdown(dir, base = dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".vitepress" || name === ".git") continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) readAllMarkdown(full, base, acc);
    else if (name.endsWith(".md") && name !== "DEPLOY.md") {
      acc.push({ path: relative(base, full), content: readFileSync(full, "utf8") });
    }
  }
  return acc;
}

const repoName = process.env.REPO_NAME;
const diff = readFileSync(process.env.DIFF_FILE, "utf8").slice(0, 120_000); // chặn diff khổng lồ
const commitLog = readFileSync(process.env.COMMIT_LOG_FILE, "utf8");
const docs = readAllMarkdown(process.env.DOCS_DIR);

const docsContext = docs
  .map((d) => `### Nội dung hiện tại của \`${d.path}\`\n\n${d.content}`)
  .join("\n\n---\n\n");

const SYSTEM_PROMPT = `Bạn soạn nháp changelog cho người dùng CRM (CM, Admin, Teacher, PPGV, TPGV, HOC,
Accountant, BO, Sales, Manager, Student Support), dựa trên diff code thật. Đây chỉ là NHÁP — người
thật (DX/L&D) sẽ đọc lại và sửa trước khi đăng, nhưng bạn vẫn phải cố gắng chính xác nhất có thể.

QUY TẮC BẮT BUỘC (đã rút ra từ lỗi thật đã xảy ra khi làm tay — chỉ đọc tiêu đề commit mà không đối
chiếu docs hiện có đã khiến kết luận sai 2 lần):

1. Chỉ dựa vào diff thật và nội dung docs hiện có được cung cấp — KHÔNG đoán thêm từ tên biến/tên file
   nếu không đủ rõ ràng.
2. Trước khi nói "tính năng X chưa có trong docs" hoặc "cần xoá mô tả Y" — PHẢI tìm trong nội dung docs
   hiện có (đã đưa đầy đủ bên dưới) để xác nhận, không suy đoán từ commit message.
3. Nếu không chắc 1 thay đổi có ảnh hưởng tới người dùng cuối hay không (có thể chỉ là refactor nội
   bộ, migration, test) — bỏ qua, không đưa vào nháp. Chỉ đưa vào những gì CHẮC CHẮN người dùng sẽ
   thấy khác.
4. Mọi nhận định phải trích dẫn được file/dòng cụ thể trong diff làm căn cứ.
5. Nếu 1 thay đổi quan trọng nhưng không rõ ý định nghiệp vụ (vd điều kiện áp dụng, ai được làm) — ghi
   rõ "CẦN DX XÁC NHẬN: ..." thay vì đoán liều.
6. Viết bằng tiếng Việt, ngôn ngữ thường, không thuật ngữ kỹ thuật, theo đúng văn phong các file
   changelog.md/CHANGELOG.md đã có (xem ví dụ trong ngữ cảnh).
7. Nếu diff không có gì ảnh hưởng người dùng (chỉ refactor/test/migration/docs nội bộ) — trả về đúng
   1 dòng: "Không có thay đổi ảnh hưởng người dùng trong lượt này." Đừng cố viết ra thứ gì đó.

Output: markdown, mỗi mục bắt đầu bằng \`- [Khu vực người dùng]\`, ví dụ \`- [Admin] ...\`. Cuối file,
nếu có mục cần xác nhận, thêm 1 khối riêng bắt đầu bằng "## Cần DX xác nhận".`;

const userMessage = `Repo: ${repoName}

## Commit log của lượt push này

${commitLog}

## Diff code đầy đủ

\`\`\`diff
${diff}
\`\`\`

## Nội dung docs hiện có (để đối chiếu trước khi kết luận mới/thiếu/cần xoá)

${docsContext}`;

const res = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "x-api-key": process.env.ANTHROPIC_API_KEY,
    "anthropic-version": "2023-06-01",
  },
  body: JSON.stringify({
    model: "claude-sonnet-5-5",
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userMessage }],
  }),
});

if (!res.ok) {
  const text = await res.text();
  console.error(`Anthropic API lỗi ${res.status}: ${text}`);
  process.exit(1);
}

const data = await res.json();
const draft = data.content?.[0]?.text ?? "(không có nội dung trả về)";

const now = new Date().toISOString().slice(0, 10);
const header = `# Nháp changelog — ${repoName} — ${now}

> Tự soạn bởi script \`draft-changelog.mjs\`, dựa trên diff thật + đối chiếu docs hiện có — **vẫn cần
> DX/L&D đọc lại trước khi đưa vào \`changelog.md\` chính thức**. Không tự publish.

`;

writeFileSync(process.env.OUTPUT_FILE, header + draft);
console.log(`Đã ghi nháp vào ${process.env.OUTPUT_FILE}`);
