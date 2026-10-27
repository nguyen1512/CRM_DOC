# Manager

::: warning Dùng chung giao diện Admin, nhưng quyền thật hẹp hơn nhiều
Khi đăng nhập, Manager thấy **đúng y giao diện/menu của Admin** (cùng sidebar, cùng các trang) — nhưng
hệ thống chỉ thật sự cho Manager làm 3 việc:

1. **Lịch làm việc** — tạo/xem/sửa/xóa lịch cá nhân của chính mình (giống mọi vai trò khác dùng chung
   module lịch).
2. **Quản lý tài khoản giáo viên** — tạo/sửa/khóa/mở khóa/xem danh sách giáo viên, y hệt quyền Admin.
3. **Đồng bộ Google Sheet** — chỉ xem (tổng quan, lịch sử, dữ liệu, bất thường), **không sửa/áp dụng**
   được gì.

Mọi mục khác nhìn thấy trong menu Admin (hợp đồng, doanh thu & công nợ, đối soát kế toán, chi nhánh...)
**sẽ báo lỗi không có quyền** nếu Manager bấm vào — đây không phải lỗi hệ thống, là đúng thiết kế hiện
tại (giao diện chưa tách riêng theo vai trò này).
:::

Nếu công việc thực tế của bạn cần nhiều hơn 3 việc trên, báo phòng kỹ thuật (DX) — vai trò Manager hiện
tại có khoảng cách lớn giữa "nhìn thấy trên menu" và "làm được thật".
