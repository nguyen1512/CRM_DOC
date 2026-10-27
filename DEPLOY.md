# Deploy trang docs lên `anucrm.vn/docs`

Trang này build ra file HTML/CSS/JS tĩnh thuần — không cần PM2, không cần Docker, chỉ cần nginx serve
thẳng thư mục build. Chạy các bước dưới đây **trên máy local** rồi đẩy lên VPS, hoặc build thẳng trên
VPS nếu đã có Node ở đó.

## 1. Build

```bash
cd anu-crm-docs
npm install
npm run docs:build
# Output nằm ở: .vitepress/dist/
```

## 2. Đẩy lên VPS

Chọn 1 trong 2 cách:

**Cách A — rsync từ máy local (nhanh, không cần cài Node trên VPS):**

```bash
rsync -avz --delete .vitepress/dist/ user@your-vps:/var/www/anu-crm-docs/
```

**Cách B — clone + build thẳng trên VPS (đang dùng, repo: `github.com/nguyen1512/CRM_DOC`):**

```bash
# Trên VPS
git clone git@github.com:nguyen1512/CRM_DOC.git ~/projects/CRM_DOC
cd ~/projects/CRM_DOC
npm install
npm run docs:build
mkdir -p /var/www/anu-crm-docs
cp -r .vitepress/dist/* /var/www/anu-crm-docs/
```

> Nếu VPS chưa clone được qua SSH (repo riêng tư, VPS chưa có deploy key) — dùng HTTPS +
> [Personal Access Token](https://github.com/settings/tokens) thay cho `git@github.com:...`:
> `git clone https://<token>@github.com/nguyen1512/CRM_DOC.git ~/projects/CRM_DOC`

**Cập nhật nội dung sau này (Cách B):**

```bash
cd ~/projects/CRM_DOC
git pull
npm run docs:build
cp -r .vitepress/dist/* /var/www/anu-crm-docs/
```

## 3. Thêm location block nginx

Mở file cấu hình nginx đang phục vụ `anucrm.vn` (thường ở `/etc/nginx/sites-enabled/` hoặc
`/etc/nginx/conf.d/` — tìm bằng `nginx -T | grep -A5 "server_name anucrm.vn"` nếu không rõ file nào).
Thêm **location block này vào TRƯỚC** location/proxy_pass hiện có cho `/` (thứ tự quan trọng — nginx
khớp theo độ ưu tiên, nhưng để chắc chắn `/docs` được xử lý trước khi rơi vào proxy chung):

```nginx
server {
    listen 443 ssl;
    server_name anucrm.vn;

    # ... các dòng ssl_certificate hiện có, giữ nguyên ...

    location /docs/ {
        alias /var/www/anu-crm-docs/;
        try_files $uri $uri/ $uri.html =404;
        index index.html;
    }

    # location / { ... proxy_pass tới PM2 anu-frontend cổng 3001 (giữ nguyên, không đổi) ... }
}
```

Lưu ý `alias` (không phải `root`) — vì path `/docs/` không khớp 1:1 với thư mục `anu-crm-docs` (tên
thư mục chứa code), mà khớp thẳng với `/var/www/anu-crm-docs/` (thư mục chứa file build).

## 4. Kiểm tra cấu hình + reload

```bash
sudo nginx -t          # báo "syntax is ok" + "test is successful" mới reload
sudo systemctl reload nginx
```

## 5. Kiểm tra lại

Mở `https://anucrm.vn/docs/` từ máy thật (không chỉ từ VPS) — phải thấy trang chủ docs, sidebar đủ 11
nhóm, search hoạt động, các link không bị 404.

## Cập nhật nội dung sau này

Mỗi lần sửa nội dung `.md`, lặp lại bước 1-2 (build + đẩy lại `dist/`) — **không cần sửa lại nginx**,
chỉ cần làm lại khi đổi path `/docs/` sang path/domain khác.
