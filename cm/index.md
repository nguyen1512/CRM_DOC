# CM & CM Lead

Vận hành lớp học: xếp lớp, điểm danh, điểm số, phòng học, lịch dạy, chuyển cơ sở học viên.

::: info Tóm tắt nhanh — CM và CM Lead khác nhau chỗ nào
**CM và CM Lead được làm gần như giống hệt nhau.** Mọi màn hình (lớp học, học viên, phòng học, điểm, điểm danh, khóa học, giáo viên, lịch nghỉ) đều dùng chung, không ai bị giới hạn hơn ai. Chỉ có **2 chỗ khác nhau thật sự** trong toàn bộ phần mềm:

-   Ở trang [Yêu cầu chuyển cơ sở](#cm-10), mục "Đã gửi đi": CM chỉ thấy yêu cầu do chính mình gửi; CM Lead thấy được yêu cầu của cả cơ sở, do bất kỳ ai gửi.
-   Trang [Lịch test từ Sales](#cm-3b) (hiện không có trên menu): CM chỉ xem được cơ sở của mình; CM Lead xem được của bất kỳ cơ sở nào.

Vai trò **HOC** (Trưởng cơ sở) hiện dùng chung toàn bộ màn hình và quyền của CM.
:::

## Ma trận quyền

| Việc cần làm | CM | CM Lead |
| --- | --- | --- |
| Tổng quan / Tổng quan cá nhân | ✓ | ✓ giống nhau |
| Test đầu vào | ✓ | ✓ giống nhau |
| HV chờ xếp lớp — mọi cách xếp | ✓ | ✓ giống nhau |
| HV chờ mở lớp, HV đã xếp lớp, Lớp học, Phòng học, Lịch nghỉ, Khóa học, Giáo viên, Lịch làm việc | ✓ | ✓ giống nhau |
| Yêu cầu chuyển cơ sở — mục "Nhận vào" | ✓ | ✓ giống nhau |
| Yêu cầu chuyển cơ sở — mục "Đã gửi đi" | Chỉ thấy yêu cầu của mình | Thấy của cả cơ sở |
| Lịch test từ Sales (không có trên menu) | Chỉ cơ sở của mình | Xem được mọi cơ sở |
| Báo cáo tổng hợp cho cấp quản lý cao hơn (HV chờ mở lớp) | ✗ | ✗ — cũng không thấy |

## Tổng quan {#cm-1}

### Màn hình tổng quan

**Vai trò:** CM · CM Lead

**Menu: Tổng quan**

::: tip Điều gì sẽ xảy ra
Tạo lớp xong, hệ thống tự xếp lịch học theo các ngày em chọn, và nếu đã chọn sẵn học viên thì học viên đó được thêm luôn vào lớp. Thêm học viên test xong, hệ thống tự tính điểm và gợi ý trình độ phù hợp, rồi đưa học viên vào danh sách chờ xếp lớp.
:::

::: info Lưu ý
Nút "Xuất Excel"/"Xuất PDF" ở trang này hiện **chưa hoạt động thật** — bấm vào sẽ không tải được file.
:::


## Tổng quan cá nhân {#cm-2}

### Xem số liệu làm việc theo ngày

**Vai trò:** CM · CM Lead

**Menu: Tổng quan cá nhân**

Trang chỉ để xem, không có gì để bấm lưu. Chọn ngày để xem số liệu hôm nay, lớp theo tình trạng, học viên theo trình độ, top 5 lớp xếp nhiều nhất hôm nay, kết quả test nhập hôm nay, lịch làm việc, tổng kết tháng, học viên mới theo tuần.


## Test đầu vào {#cm-3}

### Quản lý bài test xếp trình độ

**Vai trò:** CM · CM Lead

**Menu: Test đầu vào**

<details><summary>Các bước thao tác</summary>

1.  Lọc theo cơ sở/tình trạng/tình trạng gửi email/từ khóa.
2.  Bấm "Thêm" → nhập tên, số điện thoại, email, nguồn học viên, loại bài test (Cơ bản/IELTS đầy đủ/IELTS rút gọn/TOEIC đầy đủ/TOEIC rút gọn) → nhập điểm từng kỹ năng + nhận xét → xem trước trình độ hệ thống gợi ý.
3.  Bấm "..." ở mỗi dòng để: Gửi email · Xuất file PDF · Sửa lại thông tin · Chuyển chờ xếp lớp (chỉ bấm được khi bài test đó đã bị hủy trước đó).
4.  Có thể gửi email hàng loạt hoặc xuất Excel theo bộ lọc đang chọn.

</details>

::: tip Điều gì sẽ xảy ra
Lưu bài test xong, hệ thống tự tính điểm và gợi ý trình độ cho học viên. Xuất Excel/PDF ở trang này là file thật, tải về dùng được ngay. Gửi email kết quả test cho học viên cũng là thao tác thật.
:::


## Lịch test từ Sales — *Không có trên menu* {#cm-3b}

### Lịch hẹn bên Sales đặt hộ học viên đến test

**Vai trò:** CM — chỉ cơ sở mình · CM Lead — mọi cơ sở

Trang này đã được gỡ khỏi menu bên trái, nhưng vẫn dùng được nếu đã có sẵn đường dẫn. Đây là khác biệt thật thứ 2 giữa CM và CM Lead.

::: tip Điều gì sẽ xảy ra
Với lịch "Đã hẹn", bấm "Không đến" sẽ đánh dấu học viên đó không tới buổi test. Khi CM nhập kết quả test đúng số điện thoại ở trang Test đầu vào, lịch hẹn tương ứng tự chuyển sang "Đã có kết quả".
:::


## HV chờ xếp lớp {#cm-4}

Trang quan trọng nhất của CM — nơi đưa học viên từ danh sách chờ vào đúng lớp học. Có các mục theo tình trạng (Học viên mới, Chờ lớp cuối khóa, Bảo lưu, Nghỉ giữa chừng, Chuyển cơ sở, Đã từ chối, Đã thanh lý), và 3 cách xếp lớp.

### 4a · Xếp theo từng học viên

**Vai trò:** CM · CM Lead

Mỗi thẻ học viên có nút "Gán lớp" mở ra danh sách lớp phù hợp trình độ. Có ô sửa nhanh trình độ nếu bị ghi sai, và ô tick "Học viên đã đồng ý trước đó" để bỏ qua bước gửi email xin xác nhận.

::: tip Điều gì sẽ xảy ra
"Đề xuất & gửi email": hệ thống gửi email cho học viên để họ tự xác nhận có đồng ý vào lớp không — **học viên chưa được xếp vào lớp ngay**. Sau khi học viên đồng ý, em bấm xác nhận lần cuối thì học viên mới thật sự được ghi danh. "Xếp lớp" (không qua bước gửi email): học viên được ghi danh vào lớp ngay lập tức — hệ thống chỉ từ chối nếu trình độ không khớp, lớp đã hết ghế, hoặc đây đúng là lớp cũ học viên vừa rời đi (không cho quay lại lớp cũ theo cách này).
:::


### 4b · Xếp theo lớp

**Vai trò:** CM · CM Lead

Chọn 1 lớp trước → hệ thống liệt kê học viên đang chờ phù hợp đúng trình độ cho lớp đó → tick chọn nhiều học viên (không quá số ghế còn trống) → chọn 1 trong 4 việc: gửi email đề xuất, gửi Zalo, gửi điểm test, hoặc xếp lớp ngay.

::: tip Điều gì sẽ xảy ra
Trước khi lưu thật, hệ thống luôn cho xem trước xem có học viên nào bị lỗi không (trình độ không khớp, lớp hết ghế, hoặc là lớp cũ của chính học viên đó) để em sửa trước khi xác nhận. Khi xếp lớp thật, nếu 1 học viên bị lỗi thì chỉ riêng học viên đó không được xếp — các học viên khác trong cùng lượt vẫn được xếp bình thường.
:::


### 4c · Xếp theo lớp cũ

**Vai trò:** CM · CM Lead

Dùng khi 1 lớp đã học xong — tìm học viên đang chờ gắn với lớp đó, chọn lớp mới (trình độ kế tiếp, còn ghế), tick tối đa 100 học viên/lần, gửi Zalo xác nhận hàng loạt.


### 4d · Yêu cầu chuyển cơ sở (từ trang này)

**Vai trò:** CM · CM Lead

Mở cửa sổ "Yêu cầu chuyển cơ sở", chọn cơ sở muốn chuyển đến + nhập lý do.

::: tip Điều gì sẽ xảy ra
Chỉ tạo ra 1 yêu cầu chờ duyệt — **học viên chưa đổi cơ sở ngay**. Xem mục [10 — Yêu cầu chuyển cơ sở](#cm-10) để duyệt yêu cầu này.
:::


### 4e · Thêm học viên chờ trực tiếp

**Vai trò:** CM · CM Lead

Dùng khi học viên vào thẳng danh sách chờ, không cần làm bài test. Bắt buộc tick xác nhận "học viên đồng ý xếp lớp theo trình độ đã cam kết".

::: tip Điều gì sẽ xảy ra
Học viên được thêm vào danh sách chờ đúng theo trình độ em đã chọn, không cần làm bài test.
:::


### 4f · Nhập danh sách từ Excel

**Vai trò:** CM · CM Lead

Hệ thống cho xem trước, phân loại từng dòng (Thêm mới/Dùng lại/Bỏ qua/Lỗi) trước khi lưu thật. File tối đa 5MB.

::: tip Điều gì sẽ xảy ra
Học viên đang học ở lớp khác sẽ bị chặn không nhập được; học viên đã học xong thì được thêm vào + cập nhật trình độ mới; học viên đã có 1 yêu cầu chờ khác đang mở thì dòng đó bị bỏ qua. Trình độ ghi trong file Excel sẽ luôn ghi đè trình độ hiện tại của học viên.
:::


### 4g · Mục "Đã thanh lý"

**Vai trò:** CM · CM Lead

Xem lại lịch sử gửi đề xuất/bị từ chối của những học viên đã thanh lý hợp đồng.

::: tip Điều gì sẽ xảy ra
Bấm "Xếp lại lớp" sẽ khôi phục hợp đồng của học viên về trạng thái chờ xếp lớp — học viên quay lại danh sách chờ bình thường.
:::


::: warning Lưu ý quan trọng — hệ thống không tự kiểm tra lệch cơ sở
Khi gán học viên vào lớp (cả 3 cách ở trên), hệ thống **chỉ kiểm tra đúng trình độ và còn ghế trống** — **không tự chặn** nếu học viên và lớp thuộc 2 cơ sở khác nhau. Luôn tự kiểm tra lại đúng cơ sở trước khi xác nhận xếp lớp, đừng chỉ dựa vào việc hệ thống không báo lỗi.
:::

::: info Chưa hoạt động
Mục "Lịch sử liên lạc" và nút "Hủy hợp đồng" kiểu cũ trên thẻ học viên hiện **không bấm được từ màn hình** — nếu từng nghe nhắc tới 2 mục này, chúng chưa hoạt động, đừng cố tìm.
:::

## HV chờ mở lớp {#cm-5}

### Gom học viên lẻ thành lớp mới

**Vai trò:** CM · CM Lead

**Menu: HV chờ mở lớp**

<details><summary>Các bước thao tác</summary>

1.  Chọn cơ sở + trình độ muốn gom lớp.
2.  "Thêm học viên chờ mở lớp": chọn học viên đang chờ, khóa học, ngày sẵn sàng học, tick các ca rảnh (ngày + giờ).
3.  "Tạo đề xuất" — hệ thống tự gom các học viên cùng trình độ/ca rảnh thành 1 nhóm.
4.  Mở 1 nhóm → chọn khóa học (nếu chưa có) → "Kiểm tra phòng (8 tuần tới)" → thêm/bớt học viên trong nhóm → "Tạo lớp".
5.  "Quét cảnh báo" để tìm lớp đang thiếu sĩ số.

</details>

::: tip Điều gì sẽ xảy ra
"Tạo lớp" từ 1 nhóm sẽ tạo ra lớp học mới y như tạo lớp bình thường, đồng thời tự đánh dấu các học viên trong nhóm là "đã đồng ý" (coi như đã xác nhận qua email). Nếu có lỗi xảy ra ngay sau khi lớp đã tạo xong, lớp vẫn được giữ lại — báo phòng kỹ thuật kiểm tra lại nếu thấy dữ liệu không khớp.
:::

::: tip Lưu ý
Các bảng "Dự báo nhu cầu/Công suất phòng/Cảnh báo thiếu sĩ số" ở cuối trang chỉ hiện số liệu phạm vi của em — bản báo cáo tổng hợp toàn đội chỉ dành cho cấp quản lý cao hơn, CM và CM Lead đều không thấy được bản đó.
:::


## HV đã xếp lớp {#cm-6}

### Xem/sửa học viên đang học, không phân biệt lớp nào

**Vai trò:** CM · CM Lead

**Menu: HV đã xếp lớp**

<details><summary>Các việc có thể làm với từng học viên</summary>

1.  Xem chi tiết — hồ sơ, hợp đồng, điểm, lịch sử, cam kết.
2.  Sửa thông tin cơ bản.
3.  Chuyển cơ sở — **khác với** "Yêu cầu chuyển cơ sở": chuyển ngay, không cần cơ sở kia đồng ý.
4.  Gửi email cam kết cho 1 học viên.
5.  Đổi tình trạng: Kết thúc sớm / Bảo lưu / Chờ lớp mới.

</details>

::: tip Điều gì sẽ xảy ra
Khi chọn "Kết thúc sớm", hệ thống tự kiểm tra điểm thi cuối khóa (Final) của học viên. Nếu **chưa có điểm** HOẶC đã có điểm nhưng **chưa xác định được Đạt hay không đạt** — cả 2 trường hợp đều **bị chặn giống nhau**, không cho kết thúc, cần nhập/kiểm tra lại điểm Final trước. Nếu có điểm và **không đạt**, hệ thống sẽ hiện ra lựa chọn xử lý **phù hợp đúng với tình huống** của học viên đó (tùy học viên còn giữ cam kết với trung tâm hay không, và hợp đồng còn khóa tiếp theo hay không) — ví dụ: học lại miễn phí, học lại có đóng thêm tiền, hoặc lên trình độ mới không cần học lại. **Không phải lúc nào cũng hiện đủ các lựa chọn** — hệ thống chỉ hiện đúng 1-2 lựa chọn phù hợp với ca đó, không phải lúc nào CM cũng được tự chọn thoải mái cả 4 cách. Với Bảo lưu/Chờ lớp mới/Kết thúc chưa học hết khóa, hệ thống **tự thêm học viên vào danh sách chờ xếp lớp lại** — em không cần tự thêm.
:::

::: danger Khác với "Yêu cầu chuyển cơ sở"
Nút "Chuyển cơ sở" ở đây đổi cơ sở học viên ngay lập tức, không cần cơ sở kia đồng ý trước — dùng đúng lúc cần, tránh chuyển nhầm thay vì gửi yêu cầu ở mục 10.
:::


## Lớp học {#cm-7}

Danh sách lớp + trang chi tiết có 5 phần: Thông tin lớp · Học viên · Điểm danh · Điểm & đánh giá · Chi tiết lịch.

### 7.1 · Thông tin lớp

**Vai trò:** CM · CM Lead

- **Sửa lớp**: tên/khóa học/trình độ/sĩ số/link Zalo/lịch học — chỉ sửa được trước khi lớp đã có buổi học diễn ra.
- **Gán/đổi giáo viên**: hệ thống báo trước nếu lịch giáo viên mới bị trùng; nếu trùng, phải gán giáo viên dạy thay cho đúng buổi bị trùng.
- **Đổi trạng thái lớp**: Chưa học/Đang học/Đã kết thúc...
- **Xóa lớp**: chỉ xóa được khi lớp **chưa có học viên và chưa học buổi nào**.


### 7.2 · Học viên

**Vai trò:** CM · CM Lead

Chia theo tình trạng: Đang học/Đang chờ/Bảo lưu/Đã rời/Đã hoàn thành. Có thể gán thêm học viên (xem cảnh báo lỗi ở mục 4), chuyển học viên sang lớp khác, xem tổng kết, sửa hồ sơ, đổi tình trạng, gửi email cam kết/Zalo hàng loạt.

::: tip Điều gì sẽ xảy ra
"Thanh lý" 1 học viên: hệ thống kiểm tra xem học viên đã đóng đủ **100% tất cả các hợp đồng đang hoạt động** của mình chưa (không chỉ riêng hợp đồng của lớp này) — nếu đủ thì thanh lý ngay; nếu còn thiếu ở bất kỳ hợp đồng nào thì chỉ tạo yêu cầu gửi lên cho Admin duyệt, chưa thanh lý ngay lúc đó.
:::


### 7.3 · Điểm danh

**Vai trò:** CM · CM Lead

Chọn buổi học, điểm danh từng học viên, tick có làm bài tập/có chuẩn bị bài, ghi chú kèm ảnh nếu cần. Có thể đăng ký học bù cho học viên vắng — hệ thống tìm buổi học cùng trình độ ở lớp khác còn chỗ trống. Có thể nhập điểm danh từ file Excel.


### 7.4 · Điểm & đánh giá

**Vai trò:** CM · CM Lead

Nhập/sửa/xóa điểm test, gửi email điểm (tối đa 50 lượt/lần), nhập điểm từ file mẫu theo trình độ của lớp.

::: tip Lưu ý cách đọc
Cột "Đạt/Không đạt" để trống nghĩa là **chưa xác định được**, khác với "Không đạt" thật — đừng nhầm 2 trường hợp này với nhau.
:::


### 7.5 · Chi tiết lịch

**Vai trò:** CM · CM Lead

Gán/đổi phòng học cố định, đổi khung giờ học cố định, xem lại lịch sử từng buổi, "Lùi lịch" (dời buổi này và mọi buổi sau theo đúng lịch cố định), gán/hủy giáo viên dạy thay cho 1 buổi cụ thể.


## Phòng học {#cm-8}

### Xem lịch dùng phòng & xếp lớp vào phòng

**Vai trò:** CM · CM Lead

**Menu: Phòng học**

Xem bảng công suất phòng theo từng thứ trong tuần, 2 cách xem (Lịch cố định / Theo ngày). Bấm vào ô trống để xếp 1 buổi học vào phòng; bấm ô đã có lớp để đổi hoặc hủy phòng. "Pipeline" mỗi phòng cho xếp hàng các lớp đang chờ có lịch cố định.

::: info Lưu ý
Nút Xuất Excel/PDF ở trang này cũng chưa hoạt động thật.
:::


## Lịch nghỉ {#cm-9}

### Quản lý ngày nghỉ lễ/trường & dời lịch học

**Vai trò:** CM · CM Lead

**Menu: Lịch nghỉ**

<details><summary>Các bước thao tác</summary>

1.  Tạo lịch nghỉ (chưa áp dụng ngay).
2.  "Xem trước" ảnh hưởng — xem các buổi học chưa diễn ra nằm trong khoảng nghỉ đó.
3.  "Áp dụng" cho 1 hoặc nhiều lịch nghỉ đã chọn.
4.  Có thể "Hoàn tác" 1 lịch nghỉ đã áp dụng nếu cần.

</details>

::: tip Điều gì sẽ xảy ra
Hệ thống tự dời các buổi học bị ảnh hưởng sang đúng ngày học cố định tiếp theo của từng lớp. Mỗi lịch nghỉ đều lưu lại lịch sử để tra lại sau này.
:::


## Yêu cầu chuyển cơ sở — *Khác biệt CM Lead rõ nhất* {#cm-10}

### Duyệt học viên chuyển đến / theo dõi yêu cầu đã gửi

**Vai trò:** CM · CM Lead

**Menu: Yêu cầu chuyển cơ sở**

- **Mục "Nhận vào"**: Giống nhau CM/CM Lead — luôn thấy mọi yêu cầu mà cơ sở **của mình** là nơi nhận, bất kể ai gửi.
- **Mục "Đã gửi đi"**: **CM**: chỉ thấy yêu cầu do chính mình gửi. **CM Lead**: thấy toàn bộ yêu cầu gửi đi của cả cơ sở.

::: tip Điều gì sẽ xảy ra khi bấm "Nhận"
Học viên sẽ được ghi nhận thuộc cơ sở mới ngay: mọi yêu cầu xếp lớp còn mở ở cơ sở cũ bị hủy và có 1 yêu cầu xếp lớp mới được tạo ở cơ sở mới; hợp đồng (nếu có) cũng chuyển sang cơ sở mới; nếu học viên đang học ở 1 lớp thuộc cơ sở cũ, lớp đó sẽ được đóng lại (vẫn giữ nguyên lịch sử học, không mất dữ liệu). Hệ thống tự thông báo cho Admin và Kế toán ở cơ sở mới, cho Admin và Kế toán ở cơ sở cũ (nếu khác cơ sở), và cho đúng người đã gửi yêu cầu chuyển ban đầu.
:::

::: tip Điều gì sẽ xảy ra khi "Từ chối"
Không đổi gì cả — cơ sở, hợp đồng, danh sách chờ vẫn giữ nguyên, chỉ ghi nhận đã từ chối và báo lại cho người gửi yêu cầu.
:::

::: tip Hệ thống sẽ từ chối "Nhận" khi nào
Nếu học viên đang có 1 lớp đang học (khác lớp ở cơ sở cũ/mới) chưa được xử lý, hệ thống sẽ báo lỗi và không cho duyệt — cần xử lý lớp đó trước rồi mới duyệt lại.
:::


## Khóa học {#cm-11}

### Thiết lập khóa học, lịch học, cách lên trình độ

**Vai trò:** CM · CM Lead

**Menu: Khóa học**

Tạo/sửa/xóa khóa học (tên, trình độ, số buổi, học phí, combo, thời lượng, ngày khai giảng, lịch các buổi test), và thiết lập cách lên trình độ cho khóa. Chỉ xóa được khi khóa **chưa có lớp/chưa có lịch sử học**.

::: tip Phân biệt với "Quản lý dịch vụ" bên Admin
Đây là nơi thiết lập **lịch học & các buổi test** của khóa học (CM dùng). Bảng giá khóa học để tạo hợp đồng do Admin Lead/Admin Master quản lý ở 1 trang khác — xem Tab Admin, mục Quản lý dịch vụ.
:::


## Lịch làm việc {#cm-12}

### Lịch cá nhân & lịch lớp (chỉ xem)

**Vai trò:** CM · CM Lead

**Menu: Lịch làm việc**

Trang chỉ để xem — lọc theo cơ sở/ngày/từ khóa/loại lịch, xem theo kiểu danh sách ngày hoặc lưới cả tháng. Bấm vào 1 lịch để xem chi tiết (chỉ xem, không sửa được ở đây).

::: info Lưu ý
Xuất Excel/PDF ở trang này cũng chưa hoạt động thật.
:::


## Giáo viên {#cm-13}

### Quản lý tài khoản giáo viên (toàn hệ thống)

**Vai trò:** CM · CM Lead

**Menu: Giáo viên**

CM và CM Lead có thể tạo, sửa, khóa/mở khóa, xóa tài khoản giáo viên **của mọi cơ sở** — không bị giới hạn như trang riêng của Teacher Lead (trang đó chỉ quản được giáo viên cùng cơ sở mình).


## Chat & Checkin — *Chưa hoạt động* {#cm-14}

::: info Chỉ là hình minh họa
**Chat nội bộ**, **Chat với học viên** và **Checkin/Checkout** hiện **chưa gửi/nhận được tin nhắn thật, chưa chấm công thật**. Đừng dùng các trang này để trao đổi công việc hay chấm công — hãy dùng kênh liên lạc thông thường của trung tâm.
:::

## Thông báo {#cm-15}

### Trung tâm thông báo

**Vai trò:** CM · CM Lead

Mở bằng cách bấm vào biểu tượng chuông ở góc trên (không có mục riêng trên menu bên trái). Bấm vào 1 thông báo sẽ đưa thẳng tới đúng màn hình liên quan.


