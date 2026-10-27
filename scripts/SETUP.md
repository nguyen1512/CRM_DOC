# Thiết lập tự động soạn nháp changelog

Việc này cần bạn tự làm 4 bước (tôi không có quyền tạo API key hoặc sửa Secrets của repo người khác).
Mỗi bước có link trực tiếp.

## 1. Tạo Anthropic API key

Vào https://console.anthropic.com/settings/keys → "Create Key" → copy giá trị (chỉ hiện 1 lần).

Lưu ý: việc này tốn phí theo lượt gọi (mỗi lần có người push lên `main` của `ANU_API` hoặc
`FRONTEND_ANU_F` sẽ gọi 1 lần). Chi phí mỗi lần rất nhỏ (vài nghìn tới vài chục nghìn token/lượt), nhưng
cộng dồn theo số lần push của cả nhóm — nếu muốn, có thể đặt giới hạn chi tiêu (spend limit) ngay tại
trang Anthropic Console, mục Billing.

## 2. Tạo GitHub Personal Access Token (PAT) cho phép ghi vào repo `CRM_DOC`

Vào https://github.com/settings/personal-access-tokens/new (fine-grained token):
- **Repository access**: chọn "Only select repositories" → chọn đúng `CRM_DOC`.
- **Permissions**: `Contents` = Read and write, `Pull requests` = Read and write.
- Tạo xong, copy token (chỉ hiện 1 lần).

## 3. Thêm 2 secret này vào CẢ 2 repo `ANU_API` và `FRONTEND_ANU_F`

Với mỗi repo: vào Settings → Secrets and variables → Actions → "New repository secret":
- `ANTHROPIC_API_KEY` = giá trị ở bước 1
- `DOCS_REPO_PAT` = giá trị ở bước 2

(Phải thêm ở **cả 2 repo** vì mỗi repo chạy workflow độc lập.)

## 4. Copy file workflow vào 2 repo

File mẫu: `anu-crm-docs/scripts/github-workflow-template.yml`.

```bash
# Ở ANU_API
mkdir -p .github/workflows
cp ../anu-crm-docs/scripts/github-workflow-template.yml .github/workflows/docs-changelog-draft.yml
# File này đã sẵn REPO_NAME: ANU_API — không cần sửa gì
git add .github/workflows/docs-changelog-draft.yml
git commit -m "ci(docs): auto-draft changelog on push to main"
git push

# Ở FRONTEND_ANU_F
mkdir -p .github/workflows
cp ../anu-crm-docs/scripts/github-workflow-template.yml .github/workflows/docs-changelog-draft.yml
# Sửa dòng "REPO_NAME: ANU_API" thành "REPO_NAME: FRONTEND_ANU_F" trong file vừa copy
git add .github/workflows/docs-changelog-draft.yml
git commit -m "ci(docs): auto-draft changelog on push to main"
git push
```

## Xong — kiểm tra lại

Push 1 commit bất kỳ lên `main` của 1 trong 2 repo (hoặc đợi lần push tiếp theo của team) → vào tab
"Actions" của repo đó xem job "Draft changelog from this push" chạy → vào repo `CRM_DOC`, tab "Pull
requests" sẽ thấy 1 PR mới chứa bản nháp.

Nếu job lỗi, mở log trong tab Actions, copy nguyên văn lỗi gửi lại cho tôi.
