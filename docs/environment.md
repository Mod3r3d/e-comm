# Môi trường & Hướng dẫn Vận hành (Environment Guide) — WOODLUXE

Tài liệu này hướng dẫn khởi chạy, kiểm tra và khôi phục môi trường chạy website.

---

## 1. Thông số Kỹ thuật Môi trường

- **Hệ điều hành:** Windows 11 64-bit
- **Máy chủ Web cục bộ hỗ trợ:**
  - Lựa chọn A (PHP): `PHP 8.0.30 (cli)` có sẵn tại `C:\xampp\php\php.exe`
  - Lựa chọn B (Python): `Python 3.12.0`
- **Frontend Engine:** HTML5 Semantic + Vanilla CSS3 (Custom Design System Tokens) + ES6+ Modular Javascript.
- **Dữ liệu & Bộ nhớ:** Dữ liệu chuẩn tại `docs/dataset/*.csv` kết hợp LocalStorage đồng bộ tự động.
- **Trình duyệt khuyến nghị:** Chrome, Edge, Brave, Firefox, Safari (Hỗ trợ tốt nhất tại các breakpoint 1440px, 768px, 390px).

### 1.1 Môi trường WordPress + WooCommerce Live trên XAMPP
Hệ thống WordPress + WooCommerce thực tế đã được cấu hình và vận hành trực tiếp trên máy chủ cục bộ:
- **Đường dẫn web:** `C:\xampp\htdocs\kiotviet-web`
- **Địa chỉ truy cập frontend:** 👉 [**`http://localhost/kiotviet-web/`**](http://localhost/kiotviet-web/)
- **Cửa hàng (Shop Catalog):** 👉 [**`http://localhost/kiotviet-web/shop/`**](http://localhost/kiotviet-web/shop/)
- **Giỏ hàng (Cart):** 👉 [**`http://localhost/kiotviet-web/cart/`**](http://localhost/kiotviet-web/cart/)
- **Thanh toán (Checkout):** 👉 [**`http://localhost/kiotviet-web/checkout/`**](http://localhost/kiotviet-web/checkout/)
- **Tài khoản (My Account):** 👉 [**`http://localhost/kiotviet-web/my-account/`**](http://localhost/kiotviet-web/my-account/)
- **Trang quản trị (WP Admin):** 👉 [**`http://localhost/kiotviet-web/wp-admin/`**](http://localhost/kiotviet-web/wp-admin/)
- **Cơ sở dữ liệu:** MariaDB / MySQL port 3306, Database: `kiotviet_db` (Prefix: `wp_`).
- **Máy chủ Web:** Apache 2.4 port 80.
- **Theme đang kích hoạt:** Twenty Twenty-Five Child — WOODLUXE (`twentytwentyfive-child`).
- **Plugin đang kích hoạt:** WooCommerce 11.2.1 (HPOS-ready).
- **Dữ liệu sản phẩm:** 20 sản phẩm, 48 biến thể, tiền tệ Việt Nam Đồng (VND, `₫`), phương thức COD & Chuyển khoản ngân hàng.
- **Dữ liệu bài viết:** 6 bài viết tạp chí nội thất trong 3 chuyên mục.
- **Công cụ quản trị CLI:** WP-CLI 2.12.0 tại `C:\xampp\php\wp.bat`.



---

## 2. Hướng dẫn Khởi chạy Máy chủ Web (Local Server)

### Cách 1: Khởi chạy qua XAMPP (Phương án Chuẩn)
Toàn bộ dự án đã được tích hợp trực tiếp vào XAMPP Apache qua Junction link `C:\xampp\htdocs\e-comm`:

1. **Khởi chạy nhanh 1-Click:**
   Nhấp đúp vào tệp [`start_xampp.bat`](file:///c:/Users/ad/Documents/Workspace/e-comm/start_xampp.bat) tại thư mục gốc dự án. Tệp sẽ tự động kích hoạt Apache, MySQL và mở trình duyệt.
2. **Hoặc bật thủ công qua XAMPP Control Panel:**
   - Mở `C:\xampp\xampp-control.exe`
   - Nhấn **Start** tại 2 dịch vụ **Apache** và **MySQL**.
3. **Mở trình duyệt và truy cập:**
   - 👉 **Storefront Trực tiếp:** [**`http://localhost/e-comm/`**](http://localhost/e-comm/) (hoặc [**`http://localhost/`**](http://localhost/))
   - 👉 **Hệ thống WooCommerce:** [**`http://localhost/kiotviet-web/`**](http://localhost/kiotviet-web/)
   - 👉 **Trang quản trị WP-Admin:** [**`http://localhost/kiotviet-web/wp-admin/`**](http://localhost/kiotviet-web/wp-admin/)
   - 👉 **Quản trị Cơ sở dữ liệu phpMyAdmin:** [**`http://localhost/phpmyadmin/`**](http://localhost/phpmyadmin/)

### Cách 2: Khởi chạy độc lập bằng PHP CLI
```powershell
php -S localhost:8080
```

### Cách 3: Khởi chạy bằng Python Server
```powershell
python -m http.server 8080
```


---

## 3. Quy trình Đặt lại Dữ liệu (Reset & Clean State)

Nếu cần đưa website về trạng thái sạch ban đầu (xóa giỏ hàng, xóa lịch sử đơn hàng thử nghiệm):
1. Trên trình duyệt, nhấn `F12` mở DevTools -> Chọn tab **Application** -> **Local Storage** -> Xóa các key bắt đầu bằng `woodluxe_`.
2. Hoặc mở website, trong chân trang (Footer) hoặc thanh kiểm thử, nhấn nút **"Khôi phục trạng thái ban đầu"**.
