# Đặc tả sản phẩm (Product Specification) — WOODLUXE E-Commerce

> **Mã dự án:** PRD-WOODLUXE-2026  
> **Phiên bản:** 1.0.0  
> **Dựa trên kế hoạch:** [`Ke-hoach-Harness-Engineering-WooCommerce.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/Ke-hoach-Harness-Engineering-WooCommerce.md)  
> **Nguyên mẫu thiết kế tham chiếu:** WoodMart Retail Furniture (Có tinh chỉnh nhận diện thương hiệu độc lập)

---

## 1. Mục tiêu và Định vị

Xây dựng nền tảng thương mại điện tử chuyên ngành **Nội thất cao cấp & Phong cách sống quốc tế** (International High-end Furniture) tại thị trường Việt Nam. Hệ thống cung cấp trải nghiệm mua sắm mượt mà từ khám phá sản phẩm, tìm kiếm thông minh, lọc đa chiều, tùy biến biến thể (Màu sắc & Kích thước), giỏ hàng, thanh toán thử nghiệm (COD & Chuyển khoản ngân hàng) đến quản lý đơn hàng.

---

## 2. Bảng ma trận Yêu cầu & Traceability Matrix

| Mã Yêu cầu | Phân hệ | Mô tả Yêu cầu | Tiêu chí nghiệm thu (Acceptance Criteria) | Test Case liên kết |
|---|---|---|---|---|
| `REQ-HOME-01` | Header & Nav | Header gồm logo WOODLUXE, thanh tìm kiếm live, danh mục cha, nút Đăng nhập, Yêu thích và Giỏ hàng | Đầy đủ icon, số đếm phản ứng theo thao tác người dùng | TC11, TC18 |
| `REQ-HOME-02` | Hero Section | Carousel trình chiếu sofa Reddington với CTA "Xem thêm", "Vào cửa hàng", nút chuyển slide 01-02-03 | Chuyển đổi slide mượt mà, hiệu ứng chữ nổi bật trên nền ảnh tối ưu | TC20 |
| `REQ-HOME-03` | Top Categories | 6 danh mục: Chairs, Tables, Sofas, Beds, Lighting, Decoration hiển thị dạng tròn kèm số lượng | Bấm vào danh mục điều hướng sang trang Shop và lọc đúng danh mục | TC03 |
| `REQ-HOME-04` | Promo / Deal | Khu vực Sale Products & Special Offers tabbed (New, Featured, Top Sellers) | Hiển thị sản phẩm giảm giá, nhãn phần trăm, nút mua nhanh | TC07 |
| `REQ-SHOP-01` | Catalog Grid | Danh mục hiển thị dạng lưới hỗ trợ 4 cột (desktop), 3 cột (tablet), 2 cột (mobile) | Không vỡ khung, tải ảnh tối ưu, phân trang hoặc tải thêm | TC20 |
| `REQ-SHOP-02` | Faceted Filter | Bộ lọc theo: Danh mục, Thương hiệu, Màu sắc, Kích thước, Khoảng giá slider, Tồn kho/Sale | Khi lọc, kết quả cập nhật ngay lập tức; có nút Xóa bộ lọc và chip trạng thái | TC03, TC04, TC05, TC06, TC07 |
| `REQ-SHOP-03` | Sắp xếp | Sắp xếp theo: Độ phổ biến, Mới nhất, Giá tăng dần, Giá giảm dần, Đánh giá | Thứ tự sản phẩm sắp xếp chính xác theo thuộc tính | TC01 |
| `REQ-PDP-01` | Chi tiết sản phẩm | Thư viện ảnh, tên, SKU, giá gốc, giá sale, đánh giá sao, mô tả ngắn, tồn kho, chính sách | Hiển thị thông số chuẩn xác từ dataset | TC08 |
| `REQ-PDP-02` | Biến thể (Variable) | Chọn thuộc tính Màu sắc (Color) và Kích thước (Size) | Giá, SKU, ảnh đại diện và trạng thái kho thay đổi tương ứng theo biến thể | TC09, TC10 |
| `REQ-CART-01` | Giỏ hàng | Thêm sản phẩm, tăng/giảm số lượng, xóa sản phẩm, tính tổng phụ, tính thuế và phí ship | Dữ liệu lưu trong localStorage, đồng bộ khắp site | TC11, TC12, TC13 |
| `REQ-CART-02` | Mã giảm giá | Áp dụng coupon `WOODLUXE10` (giảm 10%), `FREESHIP` | Tính toán khấu trừ chính xác, thông báo lỗi nếu mã sai | TC14 |
| `REQ-CHK-01` | Thanh toán | Form thông tin thanh toán có kiểm tra dữ liệu bắt buộc (Họ tên, SĐT, Địa chỉ, Email) | Báo lỗi tại trường sai sót, không cho gửi đơn rỗng | TC15 |
| `REQ-CHK-02` | Phương thức COD/Bank | Tùy chọn COD hoặc Chuyển khoản kèm thông tin tài khoản demo | Đặt hàng thành công tạo mã Order ID duy nhất | TC16 |
| `REQ-ACC-01` | Tài khoản | Xem hồ sơ, danh sách đơn hàng đã đặt, trạng thái đơn, địa chỉ nhận hàng | Đơn hàng vừa đặt xuất hiện ngay trong tab Đơn hàng | TC17 |
| `REQ-BLG-01` | Blog Nội thất | 6 bài viết chia 3 danh mục (Interior Design, Material & Craft, Smart Living) | Xem danh sách bài và đọc chi tiết bài viết kèm tác giả, ngày đăng | TC19 |
| `REQ-SRH-01` | Tìm kiếm Live | Gõ từ khóa tìm kiếm trực tiếp sản phẩm và bài viết liên quan | Tự động gợi ý kết quả, xử lý trạng thái không tìm thấy kết quả | TC01, TC02 |
| `REQ-RES-01` | Responsive | Thích ứng tại 1440px (Desktop), 768px (Tablet), 390px (Mobile) | Menu mobile drawer, giỏ hàng cảm ứng, nút bấm chuẩn touch target | TC20 |

---

## 3. Quy chuẩn Dữ liệu Biến thể
Các sản phẩm variable (ví dụ: Sofa Reddington, Ghế Stockholm, Giường Oslo) yêu cầu:
1. Phải chọn đủ **Màu sắc** VÀ **Kích thước** trước khi thêm vào giỏ hàng.
2. Nếu người dùng chưa chọn, nút "Thêm vào giỏ" sẽ thông báo rõ thuộc tính còn thiếu.
3. Mỗi tổ hợp biến thể sẽ cập nhật SKU tương ứng (ví dụ: `SOFA-RED-CRM-STD`).
