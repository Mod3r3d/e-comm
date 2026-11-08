# Hệ thống thiết kế (Design System) — WOODLUXE

> **Nguồn cảm hứng:** WoodMart Retail Demo (với bảng màu cao cấp và bản quyền thương hiệu độc lập).

---

## 1. Bảng màu chủ đạo (Color Palette)

| Tên biến CSS | Mã màu HEX / HSL | Ứng dụng |
|---|---|---|
| `--color-primary-navy` | `#0c192c` | Màu nền header, footer, thanh điều hướng chính, tiêu đề cấp 1 |
| `--color-primary-navy-light` | `#162844` | Trạng thái hover menu, thẻ phụ, nền tối |
| `--color-accent-amber` | `#f4a51d` | Nút kêu gọi hành động (CTA), viền highlight, icon giỏ hàng, ngôi sao rating |
| `--color-accent-amber-hover`| `#d98b0f` | Trạng thái hover của nút màu hổ phách |
| `--color-surface-bg` | `#f8f9fb` | Nền chung của website, nền thẻ sản phẩm, khu vực tương phản nhẹ |
| `--color-surface-card` | `#ffffff` | Nền thẻ sản phẩm, modal popup, thanh tìm kiếm |
| `--color-text-main` | `#1f2937` | Màu chữ chính, tiêu đề bài viết, giá sản phẩm |
| `--color-text-muted` | `#6b7280` | Mô tả phụ, số lượng sản phẩm danh mục, ngày tháng |
| `--color-border-subtle` | `#e5e7eb` | Đường kẻ phân cách, viền input, viền bảng |
| `--color-badge-sale` | `#ef4444` | Huy hiệu giảm giá (-25%, -30%) |
| `--color-badge-new` | `#10b981` | Huy hiệu hàng mới về (NEW) |

---

## 2. Quy chuẩn Typography

- **Phông chữ hiển thị & nội dung:** `'Plus Jakarta Sans', 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Hệ thống cấp bậc chữ:**
  - `Hero Heading`: 44px – 52px / Line-height 1.15 / Font-weight 800
  - `Section Heading (H2)`: 26px – 30px / Line-height 1.3 / Font-weight 700 / Uppercase kèm gạch chân hổ phách
  - `Product Title (H3)`: 16px – 18px / Line-height 1.4 / Font-weight 600
  - `Body Regular`: 14px – 15px / Line-height 1.6 / Font-weight 400
  - `Meta / Captions`: 12px – 13px / Line-height 1.4 / Font-weight 500

---

## 3. Quy chuẩn Breakpoint Responsive

| Kích thước Viewport | Thiết bị đại diện | Mật độ lưới sản phẩm | Bố cục điều hướng |
|---|---|---|---|
| **1440px+** | Desktop màn hình lớn | 4 cột sản phẩm | Mega-menu đầy đủ, thanh tìm kiếm mở rộng |
| **768px – 1024px** | Tablet (iPad Portrait/Landscape) | 3 cột sản phẩm | Thanh menu thu gọn, bộ lọc drawer tiện lợi |
| **390px – 480px** | Smartphone (iPhone 14/15, Galaxy) | 2 cột sản phẩm | Hamburger menu drawer, bottom quick bar, giỏ hàng cảm ứng |

---

## 4. Các thành phần giao diện đặc trưng (Signature Components)

1. **Header Topbar & Live Search Bar:**
   - Bộ chọn danh mục dropdown (`Select Category`) kết hợp ô nhập từ khóa tức thời.
   - Nút tìm kiếm màu hổ phách đồng bộ WoodMart.
   - Bộ đếm Wishlist, Compare và Giỏ hàng tương tác thời gian thực.
2. **Carousel Hero Slider:**
   - Ảnh nền phòng khách sang trọng, slogan màu vàng kim ("COATED ALUMINUM FRAME").
   - Nút đôi: Nút "VIEW MORE" bo tròn vàng và nút "TO SHOP" trong suốt viền mảnh.
   - Chỉ số phân trang `01 — 02 — 03 —`.
3. **Category Circles Hub:**
   - Khối tròn nền sáng, ảnh vật phẩm nội thất nổi lên trên, hiệu ứng hover phóng to nhẹ 1.05x kèm đổ bóng mềm.
4. **Sale Spotlight & Special Offer Tabs:**
   - Cột trái: Thẻ nổi bật sản phẩm giảm giá với đồng hồ đếm ngược Flash Sale.
   - Cột phải: 3 tab [NEW], [FEATURED], [TOP SELLERS] chuyển đổi tức thì không cần tải lại trang.

---

## 5. Kiến trúc CSS Module hóa (Modular CSS Structure)

Hệ thống CSS được phân tách từ file đơn khối thành các module độc lập đặt tại `assets/css/`:

```text
assets/css/
├── variables.css      # Biến màu sắc, phông chữ, bóng đổ, bo góc
├── base.css           # Reset CSS, container, button, badge tiện ích
├── header.css         # Top notice bar, logo, live search bar, header actions
├── navigation.css     # Sticky nav bar, menu dropdown "Browse Categories"
├── hero.css           # Carousel banner, slide transitions, controls
├── categories.css     # 6 thẻ danh mục hình tròn (Top Categories)
├── showcase.css       # Bố cục 2 cột: Sale countdown & Special offer tabs
├── product-card.css   # Thẻ sản phẩm dùng chung, rating sao, badge, giá
├── shop.css           # Lưới catalog và bộ lọc đa diện (Faceted sidebar)
├── pdp.css            # Modal chi tiết sản phẩm, biến thể Color/Size, tab thông số
├── cart.css           # Drawer giỏ hàng trượt, coupon box, danh sách món
├── checkout.css       # Form thanh toán, phương thức COD & Chuyển khoản
├── account.css        # Cổng thông tin khách hàng, lịch sử đơn hàng
├── blog.css           # Lưới bài viết tin tức và modal đọc bài chi tiết
├── test-runner.css    # Nút FAB và bảng điều khiển kiểm thử tự động Harness
├── footer.css         # Chân trang 4 cột, mạng xã hội, bản quyền
├── responsive.css     # Quy tắc media queries cho Desktop, Tablet, Mobile
└── style.css          # Master aggregator liên kết toàn bộ module qua @import
```

---

## 6. Quy chuẩn Iconography (Hugeicons & FontAwesome 6)

Hệ thống thay thế toàn bộ emoji hoặc ký tự Unicode cũ bằng bộ icon vector chuyên nghiệp:
- **Hugeicons Stroke Rounded:** Ứng dụng cho các hành vi tương tác cốt lõi: Logo Sofa (`hgi-sofa-01`), Search (`hgi-search-01`), User Account (`hgi-user`), Wishlist (`hgi-favourite`), Cart Bag (`hgi-shopping-bag-02`).
- **FontAwesome 6:** Ứng dụng cho icon danh mục nội thất (`fa-chair`, `fa-table`, `fa-couch`, `fa-bed`, `fa-lightbulb`), icon tiện ích (`fa-phone-volume`, `fa-location-dot`, `fa-truck-fast`), điều hướng, rating sao (`fa-star`), và mạng xã hội.

