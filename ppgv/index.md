# PPGV

Giám sát đội CM/CM Lead được phân công: quản lý tài khoản, theo dõi hiệu suất, xử lý cảnh báo lịch,
xem dashboard nhu cầu mở lớp — toàn bộ phạm vi chỉ gồm những CM/CM Lead đang được giao cho mình.

::: info Tóm tắt nhanh
PPGV không tự đứng lớp, không tự xếp học viên — vai trò này để **quản lý con người và theo dõi số
liệu** của đội CM mình phụ trách.
:::

## Tổng quan {#ppgv-1}

### Màn hình chính khi đăng nhập

**Vai trò:** PPGV

**Menu: Tổng quan**

Dùng chung màn hình với TPGV/HOC (`ManagementOverview`), hiển thị số liệu tổng hợp đúng phạm vi đội CM
được giao: tỷ lệ xếp lớp, tình trạng lớp học, công suất phòng, tỷ lệ Pass Final, tình trạng cam kết.

::: tip Điều gì sẽ xảy ra
Nếu mở trang này từ 1 link thông báo có kèm mã CM cụ thể, hệ thống tự chuyển thẳng sang trang [Quản lý
CM](#ppgv-2) và mở đúng CM đó — không ở lại trang tổng quan.
:::

## Quản lý CM {#ppgv-2}

### Tài khoản CM được phân công

**Vai trò:** PPGV

**Menu: Quản lý CM**

Tạo/sửa/khóa/mở khóa tài khoản CM, CM Lead thuộc đội mình. Có 4 tab con khi xem chi tiết 1 CM: **Đang
chờ** (học viên CM đó đang xử lý), **Lớp học** (lớp CM đó quản lý), **Phòng học**, **Đầu ra & cam kết**
(tỷ lệ Pass/cam kết của các lớp CM đó phụ trách).

::: tip Điều gì sẽ xảy ra
Khóa tài khoản CM không xóa dữ liệu lớp/học viên CM đó đã xử lý — chỉ chặn đăng nhập. Mở khóa lại là
dùng được ngay, không mất lịch sử.
:::

## Phân công Teacher Lead ↔ cơ sở {#ppgv-3}

### Cấp thêm cơ sở phụ cho Teacher Lead quản lý

**Vai trò:** PPGV

**Menu: Teacher Lead đa cơ sở**

Gán/gỡ 1 Teacher Lead vào quản lý thêm 1 cơ sở ngoài cơ sở gốc của họ (ví dụ Teacher Lead ở Hoàng Ngân
được cấp thêm quyền quản lý giáo viên/lớp ở Phùng Khoang).

::: tip Điều gì sẽ xảy ra
Gán xong, Teacher Lead đó thấy thêm đúng cơ sở mới trong các trang quản lý giáo viên/lịch lớp cơ sở của
họ (xem Tab Teacher, mục Quản lý giáo viên) — không ảnh hưởng cơ sở gốc.
:::

## Báo cáo hiệu suất CM {#ppgv-4}

### Xem số liệu từng CM trong đội

**Vai trò:** PPGV

**Menu: (trong trang Quản lý CM, xem chi tiết 1 CM)**

Số lớp CM đó phụ trách, tỷ lệ Pass Final, tỷ lệ cam kết, kèm số cảnh báo lịch (xem mục dưới) đang mở
cho CM đó.

::: warning Lưu ý
Có 2 API xuất báo cáo dạng CSV tồn tại ở backend nhưng **chưa có nút nào trên giao diện gọi tới** —
hiện không có cách xuất CSV báo cáo hiệu suất CM từ màn hình.
:::

## Cảnh báo lịch {#ppgv-5}

### Xử lý cảnh báo khi CM đổi lịch học

**Vai trò:** PPGV

**Menu: (hiện trong trang Quản lý CM)**

Hệ thống tự ghi cảnh báo (mức INFO/WARNING/CRITICAL) khi CM đổi lịch muộn, thiếu lý do, trùng ngày lễ,
ảnh hưởng buổi test, hoặc đổi nhiều buổi liên tiếp. PPGV xem và đánh dấu đã xử lý (resolve) hoặc mở lại
(reopen) từng cảnh báo.

::: tip Điều gì sẽ xảy ra
Cảnh báo **không chặn** CM thao tác — CM vẫn đổi lịch được bình thường dù có cảnh báo. Đây chỉ là công
cụ để PPGV biết và theo dõi, không phải hàng rào kỹ thuật.
:::

## HV chờ mở lớp {#ppgv-6}

### Dashboard nhu cầu gom lớp — chỉ xem

**Vai trò:** PPGV

**Menu: HV chờ mở lớp**

Dùng chung đúng 1 trang với TPGV/HOC — xem nhu cầu theo trình độ/khóa học, công suất phòng, cảnh báo
lớp thiếu sĩ số, dự báo nhu cầu theo tháng, trong phạm vi các cơ sở có CM thuộc đội mình.

::: tip Điều gì sẽ xảy ra
Đây là dashboard — không có nút "Tạo lớp"/"Tạo nhóm" nào ở đây. Muốn gom lớp thật, CM phải làm ở trang
riêng của CM.
:::
