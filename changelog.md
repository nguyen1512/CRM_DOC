# Changelog (dành cho người dùng)

> Viết lại từ `ANU_API/CHANGELOG.md` + `FRONTEND_ANU_F/CHANGELOG.md` (nhật ký kỹ thuật của DX) bằng
> ngôn ngữ thường, chỉ giữ phần ảnh hưởng tới cách người dùng thao tác. Quy ước đầy đủ:
> `plans/dx-lnd-changelog-docs-sync.md` trong repo `~/ANU/CRM`.
>
> **Cập nhật lần cuối: 2026-10-27**

## 2026-10-27 — Chuyển tài liệu sang domain thật

- Toàn bộ tài liệu hướng dẫn chuyển từ artifact Claude sang trang này (`anucrm.vn/docs`) — dễ tìm, có
  search, không phụ thuộc link ngoài.
- Thêm đầy đủ mục [HOC](/hoc/) (xem bên dưới) — role HOC đã đổi hẳn từ dùng chung quyền CM sang
  dashboard chỉ xem.
- Thêm khung sẵn cho 5 vai trò chưa có nội dung đầy đủ: [PPGV](/ppgv/), [TPGV](/tpgv/),
  [Kế toán](/accounting/), [BO](/bo/), [Sales](/sales/) — nội dung chi tiết sẽ bổ sung dần.
- Thêm 2 trang cảnh báo: [Manager](/manager/), [Student Support](/student-support/) — nêu rõ khoảng
  cách giữa quyền hiển thị trên menu và quyền thật.

## 2026-10 — Admin / Kế toán

- Giao diện mới để nhập và theo dõi hợp đồng lấy từ Google Sheet (xem [mục 7, Tab
  Admin](/admin/#ad-7)).
- Trang theo dõi hợp đồng cho kế toán được nâng cấp giao diện.
- Thêm nút xác nhận khi chuyển cơ sở cho hợp đồng, trạng thái "đang chờ chuyển cơ sở" hiện rõ bằng màu
  đỏ.
- Hệ thống xử lý tốt hơn trường hợp hợp đồng bị nhập trùng (từ Sheet).
- Thêm được phiếu thu bổ sung ngoài phiếu thu chính; sửa vài lỗi liên quan khuyến mãi (CTKM).
- Có thể xem hợp đồng nào tới từ Google Sheet, hợp đồng nào nhập tay (nhãn "Từ Google Sheet" + bộ lọc
  theo nguồn).

## 2026-10 — HOC

- Role HOC đổi hẳn: từ dùng chung quyền với CM sang dashboard chỉ xem (tổng quan cơ sở, hiệu suất giáo
  viên, HV chờ mở lớp, cảnh báo buổi chưa điểm danh). Xem [mục HOC](/hoc/) đầy đủ.

## 2026-10 — Học viên (qua lớp/điểm danh)

- Sửa 1 lỗi hiển thị sai trình độ (level) của học viên ở vài nơi — không đổi cách CM/Teacher thao tác,
  chỉ là hiển thị đúng lại.
