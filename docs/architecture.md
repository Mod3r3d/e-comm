# Kiến trúc hệ thống (System Architecture) — WOODLUXE

> **Phiên bản:** 1.0.0  
> **Mục tiêu:** Định nghĩa kiến trúc luồng dữ liệu, phân tầng ứng dụng, cấu trúc component và cơ chế kiểm chứng Harness Engineering.

---

## 1. Tổng quan Kiến trúc phân tầng

```text
+-----------------------------------------------------------------------------------+
|                           GIAO DIỆN NGƯỜI DÙNG (FRONTEND)                          |
|  [Header & MegaNav]  [Hero Slider]  [Category Hub]  [Catalog & Faceted Filter]   |
|  [Product Detail Modal]  [Cart Drawer & Page]  [Checkout Portal]  [Blog Reader]   |
|  [Live Instant Search]  [Interactive Test Runner Dashboard]                       |
+-----------------------------------------------------------------------------------+
                                        | (DOM Events & Actions)
                                        v
+-----------------------------------------------------------------------------------+
|                        TẦNG ĐIỀU PHỐI & LOGIC (APP ENGINE)                        |
|  - Router & View Switcher (Home / Shop / PDP / Cart / Checkout / Account / Blog)  |
|  - Reactive Filter & Sort Pipeline (Category, Brand, Color, Size, Price, Stock)   |
|  - Variation Matrix Resolver (Color x Size -> SKU, Dynamic Price, Stock)         |
|  - Cart & Coupon Calculator (Subtotal, Tax, Shipping, Discount Rules)             |
|  - Order Dispatcher (Validation, Order ID Generator, History Persistence)         |
|  - Automated Test Assertion Engine (Run 20 Acceptance Test Cases in Browser)      |
+-----------------------------------------------------------------------------------+
                                        | (CRUD & Serialization)
                                        v
+-----------------------------------------------------------------------------------+
|                     TẦNG DỮ LIỆU & BỘ NHỚ LƯU TRỮ (STATE & DATA)                   |
|  - Canonical Products Dataset (docs/dataset/products.csv & JS Data Contract)      |
|  - Canonical Blog Posts Dataset (docs/dataset/blog.csv)                            |
|  - Browser LocalStorage Repository:                                               |
|      * `woodluxe_cart_items`: Danh sách sản phẩm trong giỏ kèm biến thể đã chọn   |
|      * `woodluxe_wishlist_items`: Danh sách sản phẩm yêu thích                    |
|      * `woodluxe_orders`: Danh sách đơn hàng đã đặt thành công                    |
|      * `woodluxe_applied_coupon`: Mã giảm giá đang kích hoạt                      |
+-----------------------------------------------------------------------------------+
```

---

## 2. Thiết kế luồng dữ liệu Biến thể (Variable Product Resolution)

```text
[Người dùng chọn Màu: Cream]  +  [Người dùng chọn Kích thước: L-Shape]
                         │
                         ▼
             [Variation Matrix Matcher]
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
    [SKU Cập nhật]              [Giá & Trạng thái Kho]
 `SOFA-RED-CRM-LSP`           `34.500.000₫` - Còn hàng
          │                             │
          └──────────────┬──────────────┘
                         ▼
        [Kích hoạt nút 'Thêm vào giỏ hàng']
```

---

## 3. Kiến trúc kiểm thử Harness (Automated Test Engine)

Khác với các website thông thường chỉ kiểm thử thủ công, kiến trúc của dự án tích hợp một **Test Runner Engine** ngay trong giao diện:
- Cho phép người chấm hoặc lập trình viên bấm 1 nút để thực thi lần lượt 20 test case (`TC01` đến `TC20`).
- Mỗi test case tự động kích hoạt sự kiện DOM thực tế (nhập ô search, click filter, chọn biến thể, thêm giỏ, áp coupon, submit form thanh toán).
- Thu thập kết quả Pass/Fail và thời gian phản hồi, xuất báo cáo khớp với [`docs/test-report.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/test-report.md).
