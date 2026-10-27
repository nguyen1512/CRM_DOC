# Nháp changelog — chưa duyệt

Các file `.md` khác trong folder này được **tự động tạo** bởi GitHub Action (`draft-changelog.mjs`)
mỗi khi có người push lên `main` của `ANU_API` hoặc `FRONTEND_ANU_F`. Mỗi file tới qua 1 Pull Request
riêng — **không tự merge PR này**.

Quy trình review:
1. Đọc PR, đối chiếu phần "Cần DX xác nhận" (nếu có) với người đã code thay đổi đó.
2. Nếu đúng và ảnh hưởng người dùng thật: copy đoạn liên quan vào `changelog.md` (viết lại gọn hơn nếu
   cần), và sửa trang role tương ứng (`cm/index.md`, `admin/index.md`...) nếu nội dung đã lệch.
3. Nếu sai hoặc không ảnh hưởng người dùng: đóng PR, không cần giải thích gì thêm.
4. Sau khi xử lý xong, xoá file nháp đó (không cần giữ lại — lịch sử đã có trong PR đã đóng/merge).
