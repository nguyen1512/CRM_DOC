# HOC (Trưởng cơ sở)

Dashboard tổng quan quản lý cơ sở — **chỉ xem, không có nút thao tác nào**. Không còn dùng chung quyền
với CM như trước đây.

::: info Tóm tắt nhanh
HOC chỉ thấy đúng 1 cơ sở của chính mình, không chọn/xem được cơ sở khác. Toàn bộ 3 trang đều là dashboard
đọc dữ liệu — không có nút tạo/sửa/xóa nào ở bất kỳ đâu trong vai trò này.
:::

## Tổng quan cơ sở {#hoc-1}

### Màn hình chính khi đăng nhập

**Vai trò:** HOC

**Menu: Tổng quan cơ sở**

Các ô số liệu: số CM/CM Lead, lớp đang vận hành, học viên đang học, học viên chờ xếp lớp. Các khối chi
tiết: tỷ lệ xếp lớp (đã xếp/đã giải phóng), tỷ lệ lớp đúng/chậm khai giảng và đủ/thiếu sĩ số, tỷ lệ lấp
đầy phòng, tỷ lệ Pass bài thi cuối khóa (Final), tình trạng học viên (bảo lưu/thanh lý/hoàn thành toàn
bộ combo), tỷ lệ còn/mất cam kết.

Ngay dưới cùng trang là khối **"Buổi chưa điểm danh (quá 24h)"** — liệt kê các buổi học của cơ sở đã
quá 24 giờ kể từ giờ bắt đầu mà chưa ai điểm danh, trong 30 ngày gần nhất. Khối này **dùng chung đúng 1
nguồn dữ liệu với Teacher Lead** — HOC và Teacher Lead luôn thấy cùng 1 danh sách buổi báo đỏ cho cơ sở
đó (Teacher Lead chỉ xem theo tuần, HOC xem cả 30 ngày).

::: tip Điều gì sẽ xảy ra
Toàn bộ số liệu trên trang này tính theo đúng công thức đã dùng cho PPGV/TPGV (không phải công thức
riêng) — chỉ khác ở phạm vi: HOC luôn cố định đúng 1 cơ sở theo hồ sơ nhân sự của chính mình.
:::

## Hiệu suất giáo viên {#hoc-2}

### Bảng hiệu suất từng giáo viên trong cơ sở

**Vai trò:** HOC

**Menu: Hiệu suất giáo viên**

Mỗi dòng là 1 giáo viên của cơ sở, gồm: số lớp đã dạy, tỷ lệ Pass bài thi cuối khóa (gộp tất cả lớp đã
dạy), tỷ lệ học viên còn cam kết, tỷ lệ hoàn thành bài tập về nhà, tỷ lệ hoàn thành chuẩn bị bài, và cột
"Đánh giá học viên".

::: warning Cột "Đánh giá học viên" luôn hiện "Chưa có dữ liệu"
Hệ thống hiện **chưa có kênh nào** để học viên tự đánh giá giáo viên (không có cổng đăng nhập cho học
viên) — cột này để trống có chủ đích, không phải lỗi hiển thị. Khi nào trung tâm chốt được học viên sẽ
đánh giá qua đâu (ví dụ Zalo, khảo sát riêng...), tính năng này mới có số liệu thật.
:::

## HV chờ mở lớp {#hoc-3}

### Nhu cầu gom lớp, công suất phòng, cảnh báo và dự báo — chỉ xem

**Vai trò:** HOC

**Menu: HV chờ mở lớp**

Dùng chung đúng 1 trang với PPGV/TPGV, chỉ khác là HOC không có bộ chọn cơ sở (luôn cố định cơ sở của
mình). Gồm: tổng nhu cầu theo trình độ/khóa học/ca học, các nhóm gần đủ sĩ số sẵn sàng mở lớp, công
suất phòng theo tuần (và 1 số % công suất phòng tuần hiện tại để xem nhanh), cảnh báo lớp thiếu sĩ số
hoặc nhóm chưa có phòng phù hợp, dự báo nhu cầu theo tháng tới.

::: tip Điều gì sẽ xảy ra
Đây là dashboard — không có nút "Tạo lớp" hay "Tạo nhóm" nào ở đây. Muốn thật sự gom lớp, CM phải làm ở
trang [HV chờ mở lớp](/cm/#cm-5) bên CM.
:::
