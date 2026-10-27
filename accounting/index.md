# Kế toán (Accountant)

Đối soát thanh toán, theo dõi dòng tiền, công nợ theo hợp đồng, theo dõi (không duyệt) yêu cầu chuyển
cơ sở, xử lý hoàn phí. Có 1 vài trang riêng **không trùng với Admin** — không phải chỉ là "Admin nhìn
thu hẹp lại".

::: info Tóm tắt nhanh
Accountant có quyền thao tác thật ở đúng khu vực đối soát/hoàn phí của mình, nhưng **không duyệt được**
yêu cầu sửa hợp đồng hay yêu cầu chuyển cơ sở — những việc đó vẫn cần Admin Lead/Admin Master.
:::

## Tổng quan {#acc-1}

### Số liệu dòng tiền

**Vai trò:** Accountant

**Menu: Tổng quan**

Các ô số liệu + biểu đồ dòng tiền theo thời gian. Trang này **riêng cho Accountant** — Admin không có
đúng trang này, Admin xem số liệu kế toán ở 1 trang khác (xem [mục Doanh thu & Công nợ](/admin/#ad-6)).

## Đối soát thanh toán {#acc-2}

### Khớp từng khoản thanh toán với ngân hàng thật

**Vai trò:** Accountant

**Menu: Đối soát thanh toán**

<details><summary>Các bước thao tác</summary>

1. Xem danh sách khoản thanh toán cần đối soát.
2. Đổi ngân hàng ghi nhận nếu CM/Admin ghi sai lúc tạo phiếu thu.
3. Thêm ghi chú kế toán cho từng khoản.
4. Bấm "Duyệt" khi đã khớp đúng với sao kê ngân hàng thật.
5. Có thể đối soát trực tiếp theo hợp đồng (không cần qua từng khoản thanh toán riêng).
6. Xuất Excel danh sách đã lọc.

</details>

::: tip Điều gì sẽ xảy ra
"Duyệt" ở đây là xác nhận đối soát kế toán — **không phải** bước duyệt yêu cầu sửa hợp đồng (xem Tab
Admin, mục 3.3) — 2 việc hoàn toàn khác nhau dù đều gọi là "duyệt".
:::

## Theo dõi học phí & công nợ {#acc-3}

### Theo dõi học phí đã dùng / còn nợ theo từng hợp đồng

**Vai trò:** Accountant (xem chung với Admin/Admin Lead/Admin Master)

**Menu: Theo dõi công nợ hợp đồng**

Số liệu tổng hợp + lọc theo khóa học, xem chi tiết từng hợp đồng: đã đóng bao nhiêu, đã dùng hết bao
nhiêu buổi/học phí, còn nợ bao nhiêu.

## Theo dõi chuyển cơ sở {#acc-4}

### Xem yêu cầu chuyển cơ sở — chỉ xem, không duyệt

**Vai trò:** Accountant (xem chung với Admin/Admin Lead/Admin Master)

**Menu: Yêu cầu chuyển cơ sở**

Xem danh sách yêu cầu chuyển cơ sở của học viên (CM tạo, CM đích duyệt — xem [mục Yêu cầu chuyển cơ sở
bên CM](/cm/#cm-10)). Accountant
có thể **từ chối** 1 yêu cầu sửa hợp đồng liên quan, và xem số lượng yêu cầu đang chờ.

::: warning Không duyệt được yêu cầu chuyển cơ sở
Chỉ CM/CM Lead ở cơ sở đích duyệt được yêu cầu chuyển cơ sở (xem [mục 10 bên CM](/cm/#cm-10)) — trang này của
Accountant **chỉ để theo dõi**, không có nút "Duyệt chuyển cơ sở" nào.
:::

## Hoàn phí {#acc-5}

### Danh sách hoàn phí & đối chiếu dữ liệu cũ

**Vai trò:** Accountant (tab "Đối chiếu dữ liệu cũ" dùng chung với Admin Master)

**Menu: Hoàn phí**

Xem danh sách các khoản hoàn phí, liên kết tới hợp đồng gốc.

::: danger Không dùng "Nhập Excel" ở mục Hoàn phí
Trang con "Nhập Excel hoàn phí" vẫn còn hiện trên menu nhưng **đã ngừng hoạt động thật** (hệ thống từ
chối yêu cầu nếu bấm) — nguồn hoàn phí giờ đọc từ Google Sheet, không qua nhập Excel tay nữa. Nếu cần
hoàn phí, báo Admin/phòng kỹ thuật, đừng dùng trang này.
:::

## Xem đồng bộ Google Sheet (chỉ xem) {#acc-6}

### Theo dõi tiến trình đồng bộ hợp đồng từ Sheet

**Vai trò:** Accountant (cùng mức quyền với Manager)

**Menu: Đồng bộ Google Sheet** (nằm trong khu vực Admin trên menu)

Xem được tổng quan, lịch sử, dữ liệu Sheet, danh sách bất thường — giống Admin, nhưng **không sửa/áp
dụng** được gì ở đây (không có nút "Áp dụng", "Tạo hợp đồng từ dòng Sheet", "Sửa quy tắc").
