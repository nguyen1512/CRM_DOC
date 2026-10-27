# TPGV

Giám sát toàn bộ PPGV và CM trong phạm vi quản lý — 1 cấp trên PPGV. Việc chính: phân công CM cho từng
PPGV, xem báo cáo tổng hợp theo từng PPGV, xem dashboard toàn hệ thống.

::: info Tóm tắt nhanh
TPGV không trực tiếp quản lý CM — TPGV quản lý **PPGV**, và PPGV mới là người trực tiếp quản lý CM.
:::

## Tổng quan {#tpgv-1}

### Màn hình chính khi đăng nhập

**Vai trò:** TPGV

**Menu: Tổng quan**

Dùng chung màn hình với PPGV/HOC, nhưng phạm vi là **toàn hệ thống**, không giới hạn theo đội — tổng
hợp tỷ lệ xếp lớp, tình trạng lớp học, công suất phòng, tỷ lệ Pass Final, cam kết trên toàn bộ các cơ
sở.

## Phân công PPGV {#tpgv-2}

### Gán CM cho từng PPGV phụ trách

**Vai trò:** TPGV

**Menu: Phân công PPGV**

<details><summary>Các bước thao tác</summary>

1. Xem danh sách PPGV, mỗi PPGV kèm số liệu KPI tóm tắt (số CM đang quản lý, tỷ lệ Pass/cam kết của
   đội).
2. Chọn 1 PPGV → xem danh sách CM/CM Lead khả dụng để gán thêm.
3. Gán từng CM (đơn) hoặc chọn nhiều CM gán 1 lần (hàng loạt).
4. Gỡ 1 CM khỏi PPGV đang quản lý nếu cần đổi người phụ trách.

</details>

::: tip Điều gì sẽ xảy ra
Gán xong, CM đó xuất hiện ngay trong trang "Quản lý CM" của đúng PPGV được gán — PPGV đó thấy được số
liệu/cảnh báo lịch của CM này ngay từ lượt xem tiếp theo. 1 CM chỉ thuộc đúng 1 PPGV tại 1 thời điểm —
gán cho PPGV mới sẽ tự thay thế PPGV cũ, không giữ song song.
:::

::: warning Lưu ý
Có 2 API xuất báo cáo dạng CSV theo PPGV tồn tại ở backend nhưng **chưa có nút nào trên giao diện gọi
tới** — hiện không xuất được CSV từ màn hình này.
:::

## HV chờ mở lớp {#tpgv-3}

### Dashboard nhu cầu gom lớp toàn hệ thống — chỉ xem

**Vai trò:** TPGV

**Menu: HV chờ mở lớp**

Dùng chung đúng 1 trang với PPGV/HOC, nhưng không giới hạn theo đội — xem nhu cầu, công suất phòng,
cảnh báo, dự báo của **toàn bộ** các cơ sở.

::: tip Điều gì sẽ xảy ra
Đây là dashboard — không có nút "Tạo lớp"/"Tạo nhóm" nào ở đây.
:::
