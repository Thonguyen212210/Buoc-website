# Dự án Bước — Ý tưởng & Kế hoạch Website Gây quỹ

*Tài liệu concept đi kèm bản demo website (thư mục `website/`). Cập nhật: 19/06/2026.*

---

## 1. Tóm tắt dự án

**Bước** là một dự án xã hội hoạt động dưới dạng **trại hè kỹ năng**, mang các hoạt động ngoại khoá và kỹ năng sống đến học sinh **13–18 tuổi** ở vùng **Tây Nguyên** — nơi còn ít cơ hội tiếp cận các chương trình này.

Hành trình gồm **2 giai đoạn**: (1) đào tạo nền tảng — tư duy phản biện, phương pháp học tập, ứng dụng AI; (2) trại hè **4 ngày 3 đêm** để học và thực hành cùng nhau.

Mục tiêu gây quỹ: **5.000.000đ**, dùng cho chi phí hoạt động/dụng cụ và bữa ăn của trại sinh, trao tới các em qua **gói học bổng 50–100%**.

**Tên & thông điệp:** "Bước" gợi hình ảnh từng bước trưởng thành. Tagline đề xuất: ***"Mỗi bước, một tương lai"***. Lời kêu gọi xuyên suốt: *"Góp một bước, đổi một mùa hè."*

---

## 2. Mục tiêu của website

Website đóng ba vai trò: **kể chuyện** để tạo đồng cảm, **tạo niềm tin** qua sự minh bạch, và **chuyển đổi** người xem thành nhà hảo tâm. Thành công đo bằng số lượt quyên góp, giá trị trung bình mỗi lượt, và % tiến độ cán mốc 5.000.000đ.

Đối tượng người dùng chính: nhà hảo tâm cá nhân (sinh viên, người đi làm trẻ), phụ huynh/giáo viên, và nhà tài trợ/đối tác tiềm năng.

---

## 3. Kiến trúc thông tin (đã dựng — nhiều trang)

| Trang | Tệp | Vai trò |
|---|---|---|
| **Trang chủ** | `index.html` | Gây ấn tượng, tóm tắt vấn đề – giải pháp – tiến độ – kêu gọi. |
| **Câu chuyện** | `cau-chuyen.html` | Vì sao dự án ra đời, đối tượng hưởng lợi, chi tiết 2 giai đoạn. |
| **Quyên góp** | `quyen-gop.html` | Mức ủng hộ, máy tính tác động, học bổng, minh bạch ngân sách, thanh toán, FAQ. |
| **Cập nhật** | `cap-nhat.html` | Tin tức, lộ trình, báo cáo minh bạch quỹ. |

Thanh điều hướng và chân trang dùng chung trên cả 4 trang; nút **"Ủng hộ ngay"** luôn hiện diện.

---

## 4. Nội dung & thông điệp từng trang

**Trang chủ** — Hero với minh hoạ bình minh Tây Nguyên + con đường "từng bước" đi lên (ẩn dụ thương hiệu). Tiếp theo: khối *Vấn đề* (3 rào cản: thiếu ngoại khoá, khoảng cách kỹ năng, chi phí), khối *2 giai đoạn*, *thanh tiến độ quỹ* (đếm số động), *tác động theo mức tiền*, *3 bước ủng hộ*, *lời chứng thực*, và *CTA*.

**Câu chuyện** — Mạch tự sự: khởi nguồn → đối tượng hưởng lợi (3 nhóm) → timeline chi tiết 2 giai đoạn → kết quả mong đợi (tự tin, tư duy, kết nối, công cụ).

**Quyên góp** — Trục chuyển đổi chính: 4 mức ủng hộ (50k/150k/500k/1tr) + ô nhập tuỳ tâm có **máy tính tác động** thời gian thực; giải thích **học bổng 50/75/100%**; **biểu đồ phân bổ ngân sách** 5tr; hướng dẫn thanh toán (VietQR, chuyển khoản, ví điện tử); FAQ.

**Cập nhật** — Tin mới (card có ngày), lộ trình theo tháng (6→9/2026), và **báo cáo minh bạch** (đã gây quỹ vs kế hoạch chi).

---

## 5. Chiến lược gọi vốn (đã tích hợp vào trang)

Chiến lược dựa trên các đòn bẩy tâm lý thiện nguyện:

- **Quy đổi tác động cụ thể** — biến tiền thành hình ảnh dễ hình dung (50.000đ = một bữa ăn ấm; 1.000.000đ = trọn một suất trại). Máy tính tác động cập nhật ngay khi người dùng nhập số tiền.
- **Bằng chứng xã hội & tiến độ** — thanh tiến độ 65%, "86 nhà hảo tâm", mốc "12 suất học bổng" tạo cảm giác phong trào và động lực hoàn tất mục tiêu.
- **Tính cấp thiết** — đếm ngược "còn 18 ngày".
- **Minh bạch tạo niềm tin** — phân bổ ngân sách công khai + cam kết sao kê, đặc biệt quan trọng với nhà hảo tâm Việt Nam.
- **Bậc thang đóng góp** — gợi ý nhiều mức, làm nổi bật mức 150.000đ ("được chọn nhiều") để neo giá trị.
- **Hậu đóng góp** — trang Cập nhật giữ chân nhà hảo tâm và mở đường cho các mùa gây quỹ sau.

*(Các con số tiến độ, số nhà hảo tâm, thông tin thanh toán hiện là dữ liệu minh hoạ — cần thay bằng số thật khi chạy.)*

---

## 6. Hệ thống thiết kế (hoà quyện cả 3 phong cách)

Palette và mood bám sát **bộ nhận diện chính thức của Bước**: tím hoàng gia + vàng nắng, nền lavender–peach mơ màng, không khí ấm áp & truyền cảm hứng (gợi trăng lưỡi liềm, bầu trời sao trong logo). Vẫn giữ bố cục sạch, hiện đại, nhiều khoảng trắng để tạo niềm tin.

- **Màu sắc:** tím hoàng gia (`#7B2FB0`, đậm `#561E86`) là màu chủ đạo cho nút hành động & điểm nhấn; vàng nắng (`#F4B740`) làm accent/thanh tiến độ (tím→vàng); nền kem ấm (`#FBF5EE`) và lavender nhạt (`#F3E9FB`); chữ tím mực (`#2C1A40`). → đúng tinh thần thương hiệu, vừa mơ màng vừa đáng tin.
- **Bố cục:** nhiều khoảng trắng, thẻ bo tròn, đổ bóng mềm tông tím, lưới gọn → hiện đại, tối giản.
- **Typography:** *Be Vietnam Pro* — font tối ưu dấu tiếng Việt, tiêu đề đậm (800), thân bài dễ đọc.
- **Hình ảnh:** minh hoạ SVG tự vẽ theo mood thương hiệu — bầu trời đêm tím chuyển sắc, trăng lưỡi liềm vàng, sao và con đường dấu chân đi lên (gắn với slogan “Hành trình vạn dặm bắt đầu từ một bước chân”); icon đồng bộ, nhẹ, không phụ thuộc ảnh ngoài.
- **Slogan chính thức:** *“Hành trình vạn dặm bắt đầu từ một bước chân.”* xuất hiện ở hero và chân trang.
- **Responsive:** menu thu gọn (hamburger) trên điện thoại; lưới tự xếp lại — phần lớn nhà hảo tâm xem trên di động.

---

## 7. Tính năng đã có trong bản demo

Menu di động; thanh tiến độ chạy mượt khi tải trang; số tiền đã gây quỹ đếm tăng dần; **máy tính tác động** quy đổi số tiền thành bữa ăn/bộ dụng cụ/suất trại; nút chọn mức tự điền vào ô nhập; FAQ đóng/mở; mã VietQR minh hoạ.

---

## 8. Triển khai thực tế — bước tiếp theo

Phần giao diện là HTML/CSS/JS tĩnh. Ngoài ra dự án **đã có thêm máy chủ Node.js (`server/`) tích hợp SePay**: người ủng hộ quét VietQR để chuyển khoản, SePay bắn webhook về máy chủ, máy chủ ghi nhận vào SQLite và **công khai tổng số tiền + danh sách nhà hảo tâm (đã che tên) theo thời gian thực**. Tiến độ trên Trang chủ/Cập nhật và mã QR trên trang Quyên góp đều tự cập nhật từ API; nếu mở file tĩnh không qua máy chủ thì hiển thị số liệu mẫu. Chi tiết cài đặt, cấu hình webhook và triển khai VPS: xem **`HUONG-DAN-SEPAY.md`**.

Để đưa vào vận hành thật, cần: (1) thay nội dung minh hoạ bằng số liệu, ảnh thật; (2) điền thông tin tài khoản ngân hàng thật + khóa webhook vào `server/.env` và tạo webhook trên my.sepay.vn; (3) deploy máy chủ lên VPS có tên miền + HTTPS (đã có hướng dẫn); (4) thêm theo dõi lượt truy cập (ví dụ Google Analytics) nếu cần; (5) chuẩn bị bộ ảnh/video thật của các em và hoạt động để tăng sức thuyết phục.

Gợi ý mở rộng về sau: trang "Tình nguyện viên", thư viện ảnh mỗi mùa trại, và bản tiếng Anh cho nhà tài trợ quốc tế.
