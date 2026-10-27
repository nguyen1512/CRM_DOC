# Admin / Admin Lead / Admin Master

Hợp đồng, thanh toán, duyệt yêu cầu sửa tiền, chuyển nhượng/thanh lý, kế toán, đồng bộ Google Sheet,
gộp chi nhánh, quản lý dịch vụ.

::: info Tóm tắt nhanh — Admin / Admin Lead / Admin Master
Đây là nhóm có sự khác nhau nhiều nhất giữa các vai trò — không phải lúc nào "Lead/Master" cũng chỉ là "cấp cao hơn", mà khác nhau theo _từng việc cụ thể_:

-   **Admin**: tạo hợp đồng, sửa thông tin cơ bản, gửi yêu cầu sửa tiền bạc, quản lý giáo viên, gửi yêu cầu thanh lý (chỉ cơ sở mình) — **nhưng không được duyệt gì cả**, không ghi nhận được khoản thanh toán, không đổi được tình trạng hợp đồng, không vào được trang Quản lý dịch vụ/Doanh thu-Công nợ/Liên kết kế toán.
-   **Admin Lead**: thêm quyền **duyệt** (duyệt yêu cầu sửa tiền bước 1, hoàn tất chuyển nhượng/thanh lý nội bộ, ghi nhận thanh toán) nhưng **chỉ trong đúng cơ sở của mình**.
-   **Admin Master**: duyệt được cả 2 bước, xem/thao tác **toàn bộ hệ thống, không giới hạn cơ sở nào**, và là người duy nhất (cùng 1-2 vai trò khác) được Gộp chi nhánh.
:::

## Ma trận quyền

| Việc cần làm | Admin | Admin Lead | Admin Master |
| --- | --- | --- | --- |
| Tạo hợp đồng / sửa thông tin cơ bản / gửi yêu cầu sửa tiền / xóa hợp đồng | ✓ | ✓ | ✓ |
| Duyệt yêu cầu sửa tiền | ✗ | ✓ bước 1 | ✓ cả 2 bước |
| Đổi tình trạng hợp đồng | ✗ | ✓ | ✓ |
| Ghi nhận khoản thanh toán mới | ✗ | ✓ | ✓ |
| Rà soát hàng loạt hợp đồng để đưa vào danh sách chờ xếp lớp | ✗ | ✓ | ✓ |
| Chuyển nhượng / Thanh lý — việc thường ngày / xác nhận quyền lợi | ✓ (xác nhận quyền lợi chỉ Admin) | ✓ trừ xác nhận quyền lợi | ✓ |
| Chuyển nhượng / Thanh lý — duyệt gia hạn / hoàn tất | ✗ | ✓ | ✓ |
| Yêu cầu thanh lý (tạo/duyệt/từ chối) | ✓ chỉ cơ sở mình | ✓ chỉ cơ sở mình | ✓ toàn hệ thống |
| Doanh thu & Công nợ | Không có trên menu | ✓ cơ sở mình | ✓ toàn hệ thống |
| Liên kết kế toán (sửa sai lệch) | Không có trên menu | ✓ | ✓ |
| Đồng bộ Google Sheet — xem / chạy đồng bộ | ✓ | ✓ | ✓ |
| Thêm khoản thanh toán từ dòng trong Sheet | ✗ | ✓ | ✓ |
| Gộp chi nhánh | ✗ | ✗ | ✓ |
| Quản lý dịch vụ (Combo/Khóa học/Sách/Khuyến mãi) | ✗ không vào được | ✓ | ✓ |
| Quản lý giáo viên / Kho sách / Lịch làm việc / Tổng quan | ✓ | ✓ | ✓ |

## Tổng quan Admin {#ad-1}

### Màn hình tổng hợp

**Vai trò:** Admin · Admin Lead · Admin Master

**Menu: Tổng quan Admin**

Số liệu, cảnh báo, báo cáo theo cơ sở/ngày/tình trạng hợp đồng — giống nhau cho cả 3 vai trò, khác biệt nằm ở các trang con bên dưới.


## Tổng quan cá nhân {#ad-2}

### Số liệu cá nhân của người đăng nhập

**Vai trò:** Admin · Admin Lead · Admin Master

**Menu: Tổng quan cá nhân**

Doanh thu, công nợ, KPI của chính mình — giống nhau cả 3 vai trò, chỉ xem không sửa.


## Hợp đồng học viên {#ad-3}

Việc quan trọng nhất của Admin — nhiều bước khác nhau, dễ nhầm nhất trong cả hệ thống nên đọc kỹ phần này.

### 3.1 · Tạo hợp đồng mới

**Vai trò:** Admin · Admin Lead · Admin Master

**Menu: Hợp đồng học viên → Tạo hợp đồng**

<details><summary>Các bước thao tác</summary>

1.  Chọn học viên mới hoặc học viên có sẵn.
2.  Chọn khóa học/combo.
3.  Nhập tiền bạc: tổng tiền, giảm giá, phí tài liệu...
4.  Nhập khoản đóng tiền đầu tiên.
5.  (Nếu cần) gắn với 1 dòng trong Google Sheet.

</details>

::: tip Điều gì sẽ xảy ra
Hệ thống tạo hồ sơ học viên (nếu là người mới) cùng hợp đồng và khoản thanh toán đầu tiên. Nếu lỡ bấm lưu 2 lần, hệ thống sẽ không tạo trùng hợp đồng.
:::


### 3.2 · Sửa thông tin cơ bản — không cần ai duyệt

**Vai trò:** Admin · Admin Lead · Admin Master

Sửa được ngay: thông tin học viên (tên/SĐT/email/CCCD/địa chỉ), khóa học/combo đã đăng ký (không đổi giá), mã nguồn/mã sale, ngày ký hợp đồng.

::: tip Điều gì sẽ xảy ra
Lưu lại ngay lập tức, không cần ai duyệt. Không đụng tới bất kỳ khoản tiền nào.
:::

::: tip Lưu ý
Mục sửa "Tiền hoàn" trông giống sửa trực tiếp nhưng thực ra sẽ **tạo 1 yêu cầu gửi lên chờ duyệt**, tiền chưa được hoàn ngay lúc bấm lưu.
:::


### 3.3 · Sửa thông tin tiền bạc — cần duyệt 2 bước

**Vai trò:** Admin — chỉ gửi · Admin Lead — duyệt · Admin Master — duyệt cả 2 bước

Áp dụng khi sửa: tổng tiền, giảm giá, phí tài liệu, tiền hoàn, voucher, khuyến mãi, loại đăng ký, danh sách khóa học/combo, hoặc bất kỳ khoản thanh toán nào.

<details><summary>Các bước thao tác</summary>

1.  Admin gửi yêu cầu sửa — hệ thống tự so sánh với thông tin cũ.
2.  **Nếu không có gì thuộc nhóm tiền bạc/đăng ký/thanh toán thực sự đổi**: hệ thống tự lưu luôn, không cần ai duyệt dù vẫn gửi theo đúng cách này.
3.  **Nếu có thay đổi thuộc nhóm trên**: tạo ra 1 yêu cầu ở trạng thái "Chờ duyệt".
4.  **Duyệt bước 1** (Admin Lead hoặc Admin Master) → chuyển sang "Đã duyệt bước 1". Admin Lead chỉ duyệt được hợp đồng đúng cơ sở mình.
5.  **Duyệt bước 2** (Admin Lead hoặc Admin Master) → chính thức áp dụng: với hầu hết thay đổi, hệ thống sẽ **tạo ra một hợp đồng mới** mang thông tin đã duyệt (không sửa đè lên hợp đồng cũ) — **riêng yêu cầu sửa "Tiền hoàn"** thì sửa thẳng vào đúng hợp đồng đó, không tạo hợp đồng mới.

</details>

::: tip Điều gì sẽ xảy ra khi xem danh sách chờ duyệt
**Admin Master** thấy cả yêu cầu "Chờ duyệt" lẫn "Đã duyệt bước 1" (cả 2 bước); **Admin Lead** chỉ thấy "Chờ duyệt" (bước 1); **Admin** không xem được danh sách này, nhưng vẫn **xem được** màn so sánh trước/sau của 1 yêu cầu cụ thể.
:::

::: danger Dễ nhầm
Gửi yêu cầu sửa không có nghĩa là lúc nào cũng cần ai đó duyệt — nếu không có tiền nào thay đổi, hệ thống tự báo "Cập nhật thành công" ngay, đừng tưởng bị lỗi khi không thấy yêu cầu xuất hiện ở danh sách chờ duyệt.
:::


### 3.4 · Hợp đồng chờ duyệt

**Vai trò:** Admin Lead · Admin Master · Admin không có trên menu

**Menu: Hợp đồng chờ duyệt**

Đây chính là nơi làm việc của mục 3.3 ở trên. Ô lọc "Bước duyệt" (1/2) chỉ hiện với Admin Master vì chỉ vai trò này thấy được đủ cả 2 bước.


### 3.5 · Học viên chờ hợp đồng

**Vai trò:** Admin · Admin Lead · Admin Master

**Menu: Học viên chờ hợp đồng**

Gồm học viên CM gửi lên (từ bài test đầu vào, nhập Excel, hoặc bên Sales) và học viên hoàn toàn chưa có yêu cầu nào. Bấm "Tạo hợp đồng" sẽ chuyển sang bước 3.1.

::: tip Lưu ý
Trang này **không tự giới hạn theo cơ sở của người đang xem** — nếu không tự chọn bộ lọc cơ sở, cả 3 vai trò đều thấy danh sách của toàn hệ thống (khác với lúc _thật sự tạo/sửa_ hợp đồng, nơi Admin/Admin Lead luôn chỉ làm được đúng cơ sở mình).
:::


### 3.6 · Đổi tình trạng hợp đồng / chuyển cơ sở hợp đồng

**Vai trò:** Admin Lead · Admin Master

Admin thường **không làm được việc này**. Đổi sang "Chuyển cơ sở" cần chọn cơ sở đích, hệ thống tự xử lý luôn yêu cầu chuyển cơ sở liên quan nếu có.


### 3.7 · Ghi nhận thanh toán

**Vai trò:** Admin Lead · Admin Master

Admin thường **không ghi nhận thanh toán được**. Mỗi khoản thanh toán mới sẽ làm hệ thống tự kiểm tra lại xem hợp đồng đã đủ điều kiện xếp lớp chưa (xem mục 3.9).


### 3.8 · Xóa hợp đồng

**Vai trò:** Admin · Admin Lead · Admin Master

Có bước xem trước những gì sẽ bị ảnh hưởng. Xóa xong vẫn giữ lại để tra cứu khi cần, các khoản thanh toán/liên kết liên quan cũng được xử lý theo.


### 3.9 · Ngưỡng "đủ điều kiện xếp lớp"

**Vai trò:** Quy định quan trọng nhất về hợp đồng

Hợp đồng tự chuyển từ "Chờ xử lý" sang "Chờ xếp lớp" (và học viên tự được thêm vào danh sách chờ cho CM xếp lớp) khi **đồng thời** đạt cả 2 điều kiện:

::: tip Điều gì sẽ xảy ra
Hệ thống có cơ chế tự kiểm tra định kỳ (khoảng 20 phút/lần) để tự sửa những hợp đồng bị kẹt sai tình trạng dù đã đủ điều kiện, cộng thêm 1 nút để Admin Lead/Admin Master chủ động chạy lại việc này ngay khi cần.
:::

::: tip Trường hợp đặc biệt
Hợp đồng được chuyển nhượng miễn phí từ 1 hợp đồng khác (xem mục [Chuyển nhượng](#ad-4)) được miễn 2 điều kiện đóng tiền ở trên — nhưng vẫn phải có khóa học đầu tiên hợp lệ nằm trong phần đã được chuyển nhượng, không phải miễn hoàn toàn mọi điều kiện.
:::

::: danger Cần lưu ý
Việc tự kiểm tra định kỳ cần có ít nhất 1 tài khoản Admin Lead hoặc Admin Master đang hoạt động (chưa bị khóa) — nếu không còn ai, việc tự kiểm tra này sẽ không chạy. Cơ chế này cũng cần được cấu hình đúng mới thật sự tự ghi dữ liệu — nếu thấy hợp đồng đủ điều kiện mà mãi không tự chuyển, dùng ngay nút chạy lại thủ công hoặc báo kỹ thuật kiểm tra cấu hình.
:::


## Chuyển nhượng / Thanh lý {#ad-4}

### Chuyển nhượng quyền học & thanh lý có văn bản

**Vai trò:** Admin · Admin Lead · Admin Master

**Menu: Chuyển nhượng**

- **Tạo / làm các việc thường ngày**: Admin và Admin Lead làm được như nhau (xác nhận công nợ, gửi thông báo, xin gia hạn...).
- **Xác nhận quyền lợi**: **Chỉ Admin** (không phải Admin Lead) — bước xác nhận lại công nợ/quyền lợi mới nhất trước khi xử lý.
- **Duyệt gia hạn / hoàn tất**: **Chỉ Admin Lead/Admin Master** (không phải Admin).

Phần có phân quyền phức tạp nhất — chia theo **từng bước của việc**, không phải theo trang:

<details><summary>Các bước khi thanh lý có văn bản (nhiều bước)</summary>

1.  Chờ xử lý → Xác nhận công nợ còn lại.
2.  Đã gửi thông báo công nợ (kèm văn bản).
3.  (Nếu có) Xin gia hạn → Duyệt gia hạn (Admin Lead/Admin Master).
4.  Admin xác nhận quyền lợi lần cuối (chỉ Admin, giống bước ở luồng chuyển nhượng).
5.  Sẵn sàng (hết hạn đóng tiền/gia hạn + đã có văn bản thanh lý) — bước này vẫn là việc thường, Admin/Admin Lead làm được như nhau.
6.  Hoàn tất (chỉ Admin Lead/Admin Master duyệt) — hợp đồng chuyển thành Đã thanh lý; nếu học viên còn khóa học dở dang/bảo lưu nằm trong phạm vi được giữ lại quyền lợi, hệ thống tự tạo thêm 1 hợp đồng 0 đồng riêng để giữ quyền lợi đó cho học viên, không bị mất.

</details>


## Liên kết kế toán {#ad-5}

### Sửa hợp đồng bị Kế toán ghi chú sai lệch

**Vai trò:** Admin Lead · Admin Master · Admin không có trên menu

**Menu: Liên kết kế toán**

Danh sách hợp đồng/khoản thanh toán mà bên **Kế toán** đã kiểm tra và ghi chú là có sai lệch. Bấm "Sửa" sẽ mở đúng quy trình gửi yêu cầu sửa tiền ở mục 3.3.


## Doanh thu & Công nợ {#ad-6}

### Báo cáo công nợ hợp đồng

**Vai trò:** Admin Lead · Admin Master · Admin không có trên menu

**Menu: Doanh thu & Công nợ**

Xem số liệu + danh sách hợp đồng theo tình trạng công nợ (Tất cả/Chưa đóng/Đóng 1 phần/Đã đóng đủ/Quá hạn).

::: tip Phạm vi xem được khác nhau theo từng vai trò
-   **Admin Master**: toàn bộ hệ thống, mọi cơ sở.
-   **Admin Lead**: toàn bộ hợp đồng của cơ sở mình quản lý.
-   **Admin** (nếu vẫn vào được bằng cách khác dù không có trên menu): **chỉ hợp đồng do chính mình tạo/phụ trách**, không phải cả cơ sở.
:::


## Đồng bộ Google Sheet {#ad-7}

### Đồng bộ hợp đồng từ Google Sheet, xử lý dữ liệu bất thường

**Vai trò:** Admin · Admin Lead · Admin Master

**Menu: Đồng bộ Google Sheet**

<details><summary>Các trang con</summary>

1.  **Tổng quan / Lịch sử các lần chạy** — xem tiến trình đồng bộ, tình trạng chung.
2.  **Bất thường** — danh sách dữ liệu lệch nhau, lọc theo mức độ/tình trạng/loại; đổi tình trạng xử lý hoặc gửi yêu cầu sửa (xem mục 3.3) ngay từ 1 dòng bất thường.
3.  **Cấu hình quy tắc** — bật/tắt cách xử lý tự động hay cần duyệt cho từng loại sai lệch.
4.  **Dữ liệu Sheet** — bảng chi tiết từng dòng, so khớp/ghi đè ô, xem khác biệt, tạo hợp đồng thẳng từ 1 dòng trong Sheet.

</details>

::: tip Điều gì sẽ xảy ra
Áp dụng khớp 1 dòng có thể tạo thẳng hợp đồng mới, hoặc tạo 1 yêu cầu sửa (có bước duyệt riêng, chỉ duyệt tiếp được khi đã qua bước 1). Khi chạy "áp dụng thật" (không phải xem thử): nếu người chạy không phải Admin Master, toàn bộ các dòng trong lần chạy đó phải cùng cơ sở với người chạy, nếu không sẽ bị từ chối.
:::

::: tip Cả 3 vai trò ngang nhau khi xem và khi chạy đồng bộ
Chỉ riêng việc "Thêm khoản thanh toán từ dòng Sheet" dành cho Admin Lead/Admin Master (vì đây là ghi nhận thanh toán, xem mục 3.7).
:::


## Yêu cầu thanh lý {#ad-8}

### Thanh lý hợp đồng do quá hạn đóng tiền

**Vai trò:** Admin · Admin Lead · Admin Master

**Menu: Yêu cầu thanh lý**

Đây là 1 trong số ít trang mà Admin thường làm được đầy đủ (tạo/duyệt/từ chối) — chỉ khác nhau ở **phạm vi cơ sở**: Admin Master toàn hệ thống; Admin và Admin Lead chỉ cơ sở mình.

<details><summary>Các bước thao tác</summary>

1.  Xem danh sách hợp đồng **đủ điều kiện** tạo yêu cầu (sắp tới hạn đóng tiền trong 5 ngày hoặc đã quá hạn, chưa có yêu cầu nào đang chờ).
2.  Tạo yêu cầu (1 hợp đồng hoặc nhiều hợp đồng cùng lúc).
3.  Duyệt → thanh lý thật.
4.  Từ chối → chỉ hủy yêu cầu, không đụng tới hợp đồng.

</details>


## Gộp chi nhánh {#ad-9}

### Gộp toàn bộ dữ liệu 2 cơ sở làm 1

**Vai trò:** Chỉ Admin Master

**Menu: Gộp chi nhánh (chỉ hiện với Admin Master)**

**Admin và Admin Lead hoàn toàn không làm được việc này** — kể cả thử vào bằng cách khác cũng bị từ chối.

<details><summary>Các bước thao tác</summary>

1.  Xem trước những gì sẽ bị ảnh hưởng (nhân sự, hợp đồng, lớp, kho sách...).
2.  Thực hiện gộp — toàn bộ dữ liệu của cơ sở nguồn được chuyển sang cơ sở đích, cơ sở nguồn được đánh dấu "Đã gộp".
3.  Có thể "Hoàn tác" nếu cần.
4.  Xem lại lịch sử các lần đã gộp.

</details>

::: danger Việc rủi ro cao nhất trong cả hệ thống
Di chuyển toàn bộ dữ liệu hoạt động của 1 cơ sở — chỉ làm khi đã chắc chắn, luôn xem kỹ phần "xem trước" trước khi gộp thật.
:::


## Kho sách {#ad-10}

### Xem tồn kho giáo trình theo cơ sở

**Vai trò:** Admin · Admin Lead · Admin Master

**Menu: Kho sách**

Chỉ để xem — không tạo/sửa/xóa sách được ở trang này (việc đó nằm ở mục [Quản lý dịch vụ](#ad-13)).


## Lịch làm việc {#ad-11}

### Lịch nhân sự toàn hệ thống

**Vai trò:** Admin · Admin Lead · Admin Master

**Menu: Lịch làm việc**

Xem và sửa lịch nhân sự đầy đủ — cả 3 vai trò làm được như nhau.


## Giáo viên {#ad-12}

### Quản lý tài khoản giáo viên (toàn hệ thống)

**Vai trò:** Admin · Admin Lead · Admin Master

**Menu: Giáo viên**

Tạo/sửa/khóa-mở khóa/xóa tài khoản giáo viên — cả 3 vai trò làm được như nhau, không giới hạn theo cơ sở như trang riêng của Teacher Lead.


## Quản lý dịch vụ {#ad-13}

### Combo · Bảng giá khóa học · Sách · Khuyến mãi

**Vai trò:** Admin Lead · Admin Master · Admin không vào được

**Menu: Quản lý dịch vụ**

- **Combo**: tên combo + danh sách khóa học trong combo.
- **Khóa học**: tên, học phí, trình độ, số buổi, thời lượng — đây là **bảng giá dùng khi tạo hợp đồng** (mục 3.1).
- **Sách**: tên sách, giá, gắn với khóa học nào.
- **Khuyến mãi**: tên, mức giảm giá, thời gian áp dụng.

**Admin thường không vào được trang này** — nếu cố vào sẽ bị chuyển hướng ra ngoài. Có 4 mục:


## Chưa có / dễ nhầm phạm vi {#ad-14}

::: info Ghi nhận để không hướng dẫn sai
-   **Checkin** — có tên trên menu cũ nhưng trang còn trống, chưa làm, và đã bị ẩn khỏi menu hiện tại.
-   **Duyệt kết quả Test đầu vào** — không có trang riêng bên Admin; việc tạo/gửi/duyệt bài test đầu vào thuộc về CM (xem Tab CM, mục Test đầu vào). Admin chỉ chạm vào việc này gián tiếp qua "Học viên chờ hợp đồng" (mục 3.5) hoặc khi làm Chuyển nhượng (mục 4).
-   **Báo cáo** — hiện không có trang "Báo cáo" riêng bên Admin.
:::

