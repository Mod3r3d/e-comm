# Từ điển dữ liệu (Data Dictionary) — WOODLUXE

Tài liệu này chuẩn hóa toàn bộ các trường dữ liệu, kiểu dữ liệu, ràng buộc và giá trị mẫu trong hệ thống.

---

## 1. Thực thể Sản phẩm (Product Entity)

| Tên trường | Kiểu dữ liệu | Bắt buộc | Ràng buộc / Giá trị hợp lệ | Diễn giải |
|---|---|---|---|---|
| `id` | Integer | Có | Tăng dần, duy nhất (1..20) | Mã định danh hệ thống |
| `name` | String(120) | Có | Không rỗng | Tên thương mại của sản phẩm |
| `sku` | String(30) | Có | Duy nhất, viết hoa có gạch nối | Mã kiểm kho (VD: `SOFA-RED-01`) |
| `type` | Enum | Có | `simple`, `variable`, `sale` | Phân loại sản phẩm WooCommerce |
| `category` | Enum | Có | `Chairs`, `Tables`, `Sofas`, `Beds`, `Lighting`, `Decoration` | 6 danh mục chuẩn của đề bài |
| `brand` | String(50) | Có | Thuộc danh sách brand đối tác | Ví dụ: `LuxeStudio`, `ArtisanHome` |
| `regular_price` | Integer | Có | > 0, đơn vị VNĐ | Giá niêm yết ban đầu |
| `sale_price` | Integer | Không | < regular_price nếu có | Giá khuyến mãi |
| `rating` | Float | Có | 1.0 đến 5.0 | Điểm đánh giá trung bình |
| `stock_quantity` | Integer | Có | >= 0 | Số lượng tồn kho thực tế |
| `stock_status` | Enum | Có | `instock`, `outofstock` | Trạng thái hiển thị tồn kho |
| `color` | String | Không | Danh sách màu ngăn cách bằng dấu phẩy | Dùng cho sản phẩm biến thể |
| `size` | String | Không | Danh sách size ngăn cách bằng dấu phẩy | Dùng cho sản phẩm biến thể |
| `short_description`| String(255) | Có | Tóm tắt sản phẩm | Đoạn văn ngắn hiển thị dưới tên |
| `image` | String(255) | Có | Đường dẫn tệp nội bộ hợp lệ | Đường dẫn tới ảnh đại diện sản phẩm |

---

## 2. Thực thể Bài viết Blog (Blog Entity)

| Tên trường | Kiểu dữ liệu | Bắt buộc | Diễn giải |
|---|---|---|---|
| `id` | Integer | Có | Mã định danh bài viết |
| `title` | String(150) | Có | Tiêu đề bài viết |
| `slug` | String(100) | Có | Đường dẫn tĩnh thân thiện SEO |
| `category` | Enum | Có | `Interior Design`, `Material & Craft`, `Smart Living` |
| `author` | String(80) | Có | Tên tác giả chuyên môn |
| `published_date` | Date (YYYY-MM-DD)| Có | Ngày xuất bản |
| `reading_time` | String(20) | Có | Thời gian đọc ước tính (VD: `5 phút`) |
| `image` | String(255) | Có | Ảnh tiêu đề bài viết |
| `summary` | String(300) | Có | Trích đoạn ngắn trên thẻ blog |
| `content` | Text | Có | Nội dung bài viết chi tiết |

---

## 3. Thực thể Đơn hàng (Order Entity)

| Tên trường | Kiểu dữ liệu | Diễn giải |
|---|---|---|
| `order_id` | String | Mã đơn hàng định dạng `WLX-YYYYMMDD-XXXX` |
| `created_at` | DateTime | Thời gian đặt hàng |
| `customer_name` | String | Tên đầy đủ người nhận |
| `customer_phone` | String | Số điện thoại liên hệ giao hàng |
| `customer_email` | String | Email nhận hóa đơn xác nhận |
| `shipping_address`| String | Địa chỉ nhận hàng tại Việt Nam |
| `payment_method` | Enum (`COD`, `BANK_TRANSFER`) | Hình thức thanh toán đã chọn |
| `items` | Array[OrderItem] | Danh sách sản phẩm, số lượng, biến thể đã chọn |
| `subtotal` | Integer | Tổng tiền hàng chưa giảm giá |
| `discount` | Integer | Số tiền khấu trừ từ mã coupon |
| `shipping_fee` | Integer | Phí vận chuyển tiêu chuẩn (0đ hoặc 50.000đ) |
| `total` | Integer | Tổng tiền thanh toán cuối cùng |
| `status` | Enum (`processing`, `completed`) | Trạng thái xử lý đơn hàng |
