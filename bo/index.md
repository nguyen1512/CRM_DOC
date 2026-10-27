# BO (Back Office)

Vai trò nhỏ, đúng 1 khu vực chức năng: quản lý danh sách cơ sở và gộp chi nhánh. Đăng nhập xong sẽ tự
chuyển thẳng vào trang này, không có trang tổng quan riêng.

::: info Tóm tắt nhanh
BO không đụng tới học viên, hợp đồng, lớp học — chỉ quản lý **cơ sở** (branch) như 1 thực thể hành
chính: tạo mới, sửa thông tin, gộp 2 cơ sở thành 1.
:::

## Quản lý cơ sở {#bo-1}

### Danh sách, tạo mới, sửa thông tin cơ sở

**Vai trò:** BO

**Menu: Quản lý cơ sở** (tự động mở khi đăng nhập)

- **Tạo mới**: nhập tên cơ sở, địa chỉ, trạng thái (Active/Inactive).
- **Sửa**: đổi tên, địa chỉ, trạng thái.
- **Xóa**: xóa mềm (không mất dữ liệu lịch sử của cơ sở đó).

## Gộp chi nhánh {#bo-2}

### Gộp dữ liệu 2 cơ sở thành 1

**Vai trò:** BO

**Menu: Quản lý cơ sở → Gộp chi nhánh**

<details><summary>Các bước thao tác</summary>

1. Chọn cơ sở nguồn (sẽ bị gộp vào) và cơ sở đích (sẽ giữ lại).
2. Bấm "Xem trước" — hệ thống hiện rõ những gì sẽ bị ảnh hưởng (số học viên, lớp, hợp đồng... sẽ
   chuyển sang cơ sở đích).
3. Xác nhận gộp.
4. Nếu gộp nhầm, có thể "Hoàn tác" ngay sau đó.
5. Xem "Lịch sử gộp" để tra lại các lần đã gộp trước.

</details>

::: danger Việc này ảnh hưởng dữ liệu diện rộng
Gộp chi nhánh đổi `branchId` của toàn bộ học viên, lớp, hợp đồng, nhân sự thuộc cơ sở nguồn sang cơ sở
đích — **luôn bấm "Xem trước" và đọc kỹ trước khi xác nhận**, dù có nút "Hoàn tác" để sửa lại nếu lỡ
gộp nhầm.
:::

::: tip Điều gì sẽ xảy ra
Sau khi gộp, cơ sở nguồn vẫn tồn tại trong hệ thống (không bị xóa) nhưng không còn dữ liệu hoạt động —
mọi báo cáo/dashboard của các vai trò khác (PPGV, TPGV, HOC, Admin...) sẽ tự hiển thị theo cơ sở đích
kể từ lúc đó.
:::
