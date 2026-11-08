# Hồ sơ Phát hành & Hướng dẫn Triển khai (Deployment Phase D) — WOODLUXE

> **Căn cứ kế hoạch:** [`plan.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/plan.md) — Section 3.1 & Deployment Phase D  
> **Người thực hiện:** Technical Lead & Release Packager  
> **Trạng thái:** HOÀN TẤT & ĐÃ TRIỂN KHAI STAGING

---

## 1. Thông số Gói Phát hành (Release Artifact Manifest)

- **Tên tệp đóng gói:** [`twentytwentyfive-child.zip`](file:///c:/Users/ad/Documents/Workspace/e-comm/twentytwentyfive-child.zip)
- **Thư mục gốc trong archive:** `twentytwentyfive-child/`
- **Mã băm SHA-256:**
  ```text
  BB9C1219BFE30FCC1C1DABD372B11B23DC1DB3B9A836DF9D7AE3927603FFD7B6
  ```
- **Phiên bản:** `1.0.0`
- **Yêu cầu môi trường:** WordPress 6.7+, PHP 7.4+ (đã xác thực trên PHP 8.0.30 CLI), Parent Theme: `twentytwentyfive`.
- **Danh mục tệp thành phần:**
  ```text
  twentytwentyfive-child/
  ├── style.css                      # Header theme chuẩn, khai báo Template: twentytwentyfive
  ├── theme.json                     # FSE Design tokens (Navy, Amber, Plus Jakarta Sans, layout)
  ├── functions.php                  # Enqueue styles, Google Fonts, FontAwesome 6, Hugeicons, HPOS
  ├── parts/
  │   ├── header.html                # Block pattern Header (Logo, Nav, Mini Cart)
  │   └── footer.html                # Block pattern Footer (4 cột thông tin & bản quyền)
  ├── templates/
  │   ├── front-page.html            # FSE Front Page template (Hero sofa, Top products)
  │   ├── archive-product.html       # FSE Shop catalog template & sidebar filters
  │   └── single-product.html        # FSE Single product PDP template
  └── assets/
      ├── style.css                  # CSS tùy biến nâng cao
      └── images/                    # 6 ảnh studio đại diện cho 6 danh mục
  ```
- **Cam kết đóng gói sạch:** Không chứa thư mục `.git/`, `scratch/`, file sao lưu, CSV thử nghiệm hoặc thông tin cấu hình nhạy cảm.

---

## 2. Hướng dẫn Triển khai (Deployment Instructions)

### Cách 1: Cài đặt tự động qua WordPress Admin (Khuyến nghị)
1. Đăng nhập trang quản trị WordPress (`/wp-admin`).
2. Điều hướng tới menu: **Giao diện (Appearance)** → **Giao diện (Themes)** → Nhấn nút **Thêm mới (Add New Theme)**.
3. Nhấn **Tải giao diện lên (Upload Theme)** → Chọn tệp [`twentytwentyfive-child.zip`](file:///c:/Users/ad/Documents/Workspace/e-comm/twentytwentyfive-child.zip).
4. Nhấn **Cài đặt ngay (Install Now)** → Sau khi cài đặt hoàn tất, nhấn **Kích hoạt (Activate)**.

### Cách 2: Triển khai trực tiếp vào Staging XAMPP (Đã thực hiện)
Thư mục theme đã được sao chép sẵn sàng vào đúng vị trí của môi trường XAMPP:
👉 **`C:\xampp\htdocs\kiotviet-web\wp-content\themes\twentytwentyfive-child`**

---

## 3. Danh mục Kiểm tra Nhanh sau Triển khai (Smoke Check Checklist)

| Tiêu chí kiểm tra | Phương pháp xác minh | Kết quả |
|---|---|:---:|
| **Cú pháp PHP** | Chạy `C:\xampp\php\php.exe -l functions.php` | ✅ PASS (No syntax errors) |
| **Cấu trúc JSON** | Kiểm tra cú pháp `theme.json` theo schema WP 6.7+ | ✅ PASS (Valid JSON Schema) |
| **Parent Theme** | Xác nhận thư mục `twentytwentyfive` tồn tại song song | ✅ PASS (Twenty Twenty-Five v1.5 sẵn có) |
| **Tài nguyên Media** | 6 ảnh studio trong `assets/images/` hiển thị đầy đủ | ✅ PASS (Tất cả ảnh nội bộ có sẵn) |
| **Phản hồi HTTP (Static)** | Các trang HTML độc lập trên cổng 8085 phản hồi HTTP 200 | ✅ PASS (200 OK trên mọi trang) |
| **WooCommerce Core** | Cài đặt & kích hoạt WooCommerce 11.2.1 qua WP-CLI | ✅ PASS (WooCommerce active, HPOS ready) |
| **Child Theme Live** | Kích hoạt `twentytwentyfive-child` trên runtime WP | ✅ PASS (Active theme in DB) |
| **Cấu hình Tiền tệ** | VND, định dạng `18.500.000 ₫`, cổng COD & Chuyển khoản | ✅ PASS (Option VND & payment enabled) |
| **Nhập 20 Sản phẩm** | 20 sản phẩm, 48 biến thể, đính kèm ảnh và kho hàng | ✅ PASS (Total 20 products, 48 variations) |
| **Nhập 6 Bài viết Blog** | 6 bài viết nội thất phân chia 3 chuyên mục | ✅ PASS (Total 6 posts with thumbnails) |
| **WooCommerce Shop Live** | `http://localhost/kiotviet-web/shop/` | ✅ PASS (HTTP 200, 20 sản phẩm hiển thị) |
| **WooCommerce Cart Live** | `http://localhost/kiotviet-web/cart/` | ✅ PASS (HTTP 200) |
| **WooCommerce Checkout** | `http://localhost/kiotviet-web/checkout/` | ✅ PASS (HTTP 200) |
| **WooCommerce My Account** | `http://localhost/kiotviet-web/my-account/` | ✅ PASS (HTTP 200) |


---

## 4. Quy trình Khôi phục An toàn (Rollback Runbook)

Nếu xảy ra sự cố không mong muốn hoặc cần quay về trạng thái trước đó:
1. **Khôi phục Theme:** Trong WP Admin, kích hoạt lại theme gốc `twentytwentyfive` hoặc xóa thư mục `wp-content/themes/twentytwentyfive-child`.
2. **Khôi phục Dữ liệu:** Nếu cần dọn dẹp các đơn hàng thử nghiệm, xóa LocalStorage trình duyệt hoặc chạy quy trình reset theo Mục 3 của [`docs/environment.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/environment.md).
3. **Bảo toàn Cơ sở Dữ liệu:** Không có bất kỳ lệnh SQL hoặc importer phá hoại nào được kích hoạt, cơ sở dữ liệu local hoàn toàn nguyên vẹn.
