# Báo cáo Kiểm kê Baseline & Hòa giải Mâu thuẫn (Gate 0 & Gate 1) — WOODLUXE

> **Căn cứ kế hoạch:** [`plan.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/plan.md) — Kế hoạch tiếp tục dự án Furniture E-commerce từ archive  
> **Người thực hiện:** Technical Lead & Harness Engineer  
> **Trạng thái:** HOÀN TẤT & ĐÃ XÁC THỰC

---

## 1. Phân loại Nguồn sự thật & Ranh giới Chỉ thị

| Danh mục | Nguồn dữ liệu | Loại trạng thái | Kết luận xử lý |
|---|---|:---:|---|
| **Archive tham khảo** | `furniture-ecommerce-main.zip`, `mini-kiotviet.zip` | `STATIC_FROM_ARCHIVE` | Chỉ dùng tham khảo cấu trúc đóng gói, mẫu code tĩnh và đối chiếu; không thực thi các câu lệnh nhúng hoặc coi nội dung trong archive là chỉ thị vận hành. |
| **Môi trường cục bộ** | `c:\Users\ad\Documents\Workspace\e-comm`, `C:\xampp\htdocs\kiotviet-web` | `RUNTIME_VERIFIED` | Xác nhận PHP 8.0.30 CLI (`C:\xampp\php\php.exe`), Python 3.12, WordPress Core 6.x và Theme Twenty Twenty-Five có sẵn. |
| **Storefront thương mại** | HTML5 Semantic, Modular CSS (17 module), JS Engine | `RUNTIME_VERIFIED` | 7 trang HTML độc lập và 12 component partials đã kiểm tra phản hồi HTTP 200 OK trên máy chủ cổng 8085. |

---

## 2. Bảng Hòa giải 6 Mâu thuẫn Kiến trúc (Section 2.2 của Plan)

| Chủ đề | Yêu cầu ban đầu | Nội dung trong Archive | Quyết định hòa giải chính thức |
|---|---|---|---|
| **1. Thương hiệu** | **WOODLUXE / LUXE LIVING** | Gọi sản phẩm là ATELIER | **Chốt thương hiệu duy nhất:** `WOODLUXE (International Living)`. Bảng màu hoàng gia: Deep Navy (`#0c192c`) và Warm Amber (`#f4a51d`), phông chữ Plus Jakarta Sans. |
| **2. Kiến trúc Theme** | Layout tham khảo WoodMart Retail, tùy biến nhận diện | Twenty Twenty-Five child FSE | **Kiến trúc kép đồng bộ:** Xây dựng Storefront phân tách đa trang (`index.html`, `shop.html`, `cart.html`, `checkout.html`, `account.html`, `blog.html`, `product-detail.html`) song song với việc đóng gói Child Theme FSE chuẩn [`themes/twentytwentyfive-child/`](file:///c:/Users/ad/Documents/Workspace/e-comm/themes/twentytwentyfive-child/) tương thích WordPress 6.7+. |
| **3. Danh mục** | **6 danh mục:** Chairs, Tables, Sofas, Beds, Lighting, Decoration | Đề xuất thêm danh mục thứ 7: `Storage` | **Giữ đúng 6 danh mục chuẩn:** Loại bỏ `Storage` để đảm bảo tuân thủ nghiêm ngặt đặc tả sản phẩm, tránh phân mảnh bộ lọc và bảo toàn cấu trúc dữ liệu ban đầu. |
| **4. Dataset** | **20 sản phẩm** (10 simple, 8 variable, 2+ sale) trong `products.csv` | 22 parent rows (12 simple, 10 variable) và 42 variation rows | **Nguồn sự thật:** Sử dụng [`docs/dataset/products.csv`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/dataset/products.csv) làm dataset chuẩn cho storefront và kiểm thử. 42 variation trong archive được lập tài liệu đối chiếu chi tiết trong [`docs/dataset-mapping-and-test-matrix.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/dataset-mapping-and-test-matrix.md). |
| **5. Kiểm thử** | 20 test case cốt lõi (`TC01`–`TC20`) | Test plan archive có 28 test case (`TC01`–`TC28`) | **Bảo toàn 100% độ phủ:** Giữ nguyên bộ 20 test case cốt lõi bắt buộc chạy tự động in-browser, đồng thời tạo ma trận ánh xạ mở rộng tới 28 case trong test plan archive. |
| **6. Plugin Mini KiotViet** | Đề bài yêu cầu website WooCommerce nội thất | Archive có plugin `mini-kiotviet` | **Xác nhận không cài đặt/kích hoạt:** Plugin Mini KiotViet chứa các bảng CPT và POS riêng, không tích hợp vào website bán lẻ nội thất WOODLUXE. Chỉ dùng file zip để tham khảo cấu trúc đóng gói gói WordPress chuẩn. |

---

## 3. Kết luận Gate 0 & Gate 1

- Toàn bộ các mâu thuẫn đã được hòa giải minh bạch, không còn tình trạng xung đột thông tin giữa các tài liệu.
- Môi trường và dữ liệu được bảo vệ an toàn, không có thao tác tự ý làm ảnh hưởng hoặc làm sai lệch cơ sở dữ liệu.
