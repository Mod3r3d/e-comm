# HƯỚNG DẪN TRIỂN KHAI WEBSITE WOODLUXE LÊN INFINITYFREE

Tài liệu này hướng dẫn chi tiết từng bước để đưa website thương mại điện tử **WOODLUXE** lên dịch vụ hosting miễn phí **[InfinityFree](https://www.infinityfree.com/)**.

---

## 1. Các tài nguyên đã được chuẩn bị sẵn
Dự án đã được dọn dẹp sạch sẽ và đóng gói sẵn gói triển khai tối ưu:
- **File nén triển khai:** `woodluxe-infinityfree-deploy.zip` (Dung lượng siêu nhẹ ~3.55 MB, chứa đầy đủ mã nguồn, ảnh, CSS, JS, Database và `.htaccess`).
- **File cấu hình máy chủ:** `.htaccess` (Tự động bật nén GZIP, Browser Caching, UTF-8 và bảo mật chặn truy cập file nhạy cảm).
- **Cơ sở dữ liệu:** `database/woodluxe_db.sql` (Đã được điều chỉnh để tương thích 100% với phpMyAdmin trên shared hosting).
- **File kết nối CSDL:** `database/db_connect.php` (Đã tích hợp sẵn chế độ nhận diện hosting).

---

## 2. Hướng dẫn 4 bước triển khai lên InfinityFree

### BƯỚC 1: Đăng ký & Tạo tài khoản Hosting trên InfinityFree
1. Truy cập [https://www.infinityfree.com/](https://www.infinityfree.com/) và bấm **Register** (hoặc **Sign In** nếu đã có tài khoản).
2. Sau khi vào Dashboard, bấm nút **Create Account**.
3. Chọn một tên miền miễn phí (Subdomain), ví dụ:
   - Tên miền: `woodluxe` (hoặc tên bạn thích).
   - Đuôi mở rộng: `.epizy.com` hoặc `.rf.gd`.
   - Bấm **Check Availability** để kiểm tra tính khả dụng.
4. Đặt mật khẩu tài khoản hosting và bấm **Create Account**.
5. Nhấn **Finish**. Hệ thống sẽ cấp cho bạn một tài khoản vPanel (ví dụ: `if0_38xxxxxx`).

---

### BƯỚC 2: Upload mã nguồn lên thư mục `htdocs`
Có 2 cách upload rất nhanh:

#### Cách A: Dùng File Manager trực tuyến (Khuyên dùng - Nhanh nhất)
1. Trong trang quản lý tài khoản InfinityFree, bấm vào **File Manager** (hoặc mở [https://filemanager.ai/](https://filemanager.ai/)).
2. Nhấp đúp mở thư mục **`htdocs`**.
3. **Xóa** các file mặc định có sẵn bên trong `htdocs` (như file `default.html` hoặc `index2.html`).
4. Bấm vào nút **Upload** (biểu tượng mũi tên đi lên) ở thanh công cụ phía dưới -> Chọn **Upload Zip**.
5. Chọn file `woodluxe-infinityfree-deploy.zip` trong máy tính của bạn và chọn **Upload and Unzip**. Hệ thống sẽ tự động giải nén toàn bộ mã nguồn vào thẳng thư mục `htdocs`.

#### Cách B: Dùng phần mềm FTP (FileZilla)
1. Lấy thông tin **FTP Details** trong Dashboard InfinityFree:
   - **FTP Hostname:** `ftpupload.net`
   - **FTP Username:** (dạng `if0_xxxxxxx`)
   - **FTP Password:** Mật khẩu tài khoản hosting của bạn
   - **Port:** `21`
2. Kết nối bằng FileZilla, vào thư mục `/htdocs/`.
3. Giải nén file `woodluxe-infinityfree-deploy.zip` trên máy tính rồi kéo toàn bộ các file và thư mục bên trong thả vào `/htdocs/`.

---

### BƯỚC 3: Tạo và Import Cơ sở dữ liệu MySQL (Tùy chọn)
1. Trong Dashboard InfinityFree, bấm **Control Panel** (vPanel).
2. Tìm và chọn mục **MySQL Databases**:
   - Ở phần **Create New Database**, nhập tên: `woodluxe_db`
   - Bấm **Create Database**. Hệ thống sẽ tạo CSDL có dạng `if0_xxxxxxx_woodluxe_db`.
3. Quay lại và bấm nút **phpMyAdmin** bên cạnh database vừa tạo.
4. Trong phpMyAdmin:
   - Chọn database `if0_xxxxxxx_woodluxe_db` ở cột bên trái.
   - Nhấn tab **Import** (Nhập) trên thanh menu.
   - Nhấn **Choose File** -> Chọn file `database/woodluxe_db.sql`.
   - Kéo xuống dưới cùng và bấm **Import** (Thực hiện).
   - Hệ thống sẽ tạo toàn bộ 14 bảng và nạp 20 sản phẩm nội thất cao cấp.
5. *(Nếu dùng backend PHP)*: Mở file `database/db_connect.php` trên File Manager, cập nhật:
   - `$db_host`: Xem mục MySQL Host trong vPanel (ví dụ `sqlXXX.infinityfree.com`).
   - `$db_name`: `if0_xxxxxxx_woodluxe_db`
   - `$db_user`: `if0_xxxxxxx`
   - `$db_pass`: Mật khẩu vPanel của bạn.

---

### BƯỚC 4: Kiểm tra và Truy cập Website
1. Mở trình duyệt và truy cập vào tên miền của bạn (ví dụ: `http://woodluxe.epizy.com/`).
2. Kiểm tra:
   - Trang chủ nạp mượt mà, đầy đủ Hero Slider, Danh mục, Ưu đãi trong ngày và Bộ sưu tập nổi bật.
   - Các tính năng: Tìm kiếm, Bộ lọc phân loại, Giỏ hàng, Yêu thích, Đặt hàng, Theo dõi đơn hàng và Đổi voucher tích lũy điểm thưởng.

Chúc mừng bạn đã triển khai thành công website WOODLUXE lên Internet!

