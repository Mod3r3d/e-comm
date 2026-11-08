# Nhật ký quyết định kiến trúc & Thiết kế (Architecture Decision Records - ADR)

Tài liệu này ghi lại các quyết định kỹ thuật và thiết kế trong quá trình hiện thực hóa kế hoạch.

---

## ADR-01: Tinh chỉnh Nhận diện thương hiệu so với Demo WoodMart gốc
- **Bối cảnh:** Đề bài và kế hoạch yêu cầu tham khảo thiết kế từ demo WoodMart Retail nhưng ràng buộc: *"không import nguyên demo rồi đổi logo/màu"*, mà phải có tính nguyên bản cao cấp.
- **Quyết định:** 
  1. Giữ nguyên cấu trúc UX/UI tối ưu của WoodMart Retail: Top bar tiện ích, Live search có dropdown Category, Hero Slider sofa lớn với nút CTA đôi, 6 Category circles, Cột Sale Products & Special Offers tabbed.
  2. Tinh chỉnh nhận diện sang thương hiệu **WOODLUXE (Luxe Living)** với tông màu xanh đen hoàng gia (Deep Royal Navy `#0c192c`) phối cùng màu hổ phách ấm (Warm Amber `#f4a51d`), phông chữ hiện đại Plus Jakarta Sans.
  3. Thay thế các ảnh demo chung chung bằng bộ ảnh nhiếp ảnh Studio chất lượng cao cho đúng 6 ngành hàng nội thất: Chairs, Tables, Sofas, Beds, Lighting, Decoration.
- **Hệ quả:** Đạt trọn vẹn điểm thẩm mỹ (WOW factor), tôn trọng đúng bản quyền và tiêu chí "tính nguyên bản" của đề bài.

---

## ADR-02: Quy chuẩn Tiền tệ và Ngôn ngữ giao diện
- **Bối cảnh:** Kế hoạch đặt câu hỏi về tiền tệ và ngôn ngữ cho thị trường Việt Nam.
- **Quyết định:**
  - Tiền tệ hiển thị mặc định: Việt Nam Đồng (VNĐ, format `xx.xxx.xxx₫`) kèm bộ chuyển đổi sang USD trong cài đặt.
  - Ngôn ngữ: Song ngữ thông minh với nhãn điều hướng tiếng Anh quốc tế (Home, Shop, Blog, Cart, Checkout) kết hợp mô tả sản phẩm, chính sách giao hàng bằng tiếng Việt để tối ưu trải nghiệm người mua tại Việt Nam.

---

## ADR-03: Triển khai Engine kiểm thử tích hợp (In-Browser Test Engine)
- **Bối cảnh:** Kế hoạch yêu cầu kiểm thử tối thiểu 15-20 test case có bằng chứng cụ thể.
- **Quyết định:** Xây dựng một module "Test Runner Harness" trực tiếp trên giao diện website. Người đánh giá có thể mở bảng điều khiển kiểm thử và nhấn "Chạy kiểm thử tự động 20 Test Case", hệ thống sẽ mô phỏng hành vi người dùng và xác nhận kết quả kiểm chứng ngay tức thì.
- **Hệ quả:** Bằng chứng kiểm thử có thể tái lập 100%, minh bạch và trực quan.

---

## ADR-04: Phân tách Kiến trúc CSS Module và Chuẩn hóa Icon (Hugeicons & FontAwesome)
- **Bối cảnh:** Nhằm nâng cao khả năng bảo trì, mở rộng và tính thẩm mỹ cao cấp theo tiêu chuẩn thiết kế hiện đại, toàn bộ CSS cần được chia nhỏ thành các module rõ ràng theo trách nhiệm phân hệ, đồng thời loại bỏ toàn bộ emoji và ký tự Unicode để chuyển sang icon vector chuyên nghiệp.
- **Quyết định:**
  1. Phân rã `style.css` thành 17 module CSS độc lập (`variables.css`, `base.css`, `header.css`, `navigation.css`, `hero.css`, `categories.css`, `showcase.css`, `product-card.css`, `shop.css`, `pdp.css`, `cart.css`, `checkout.css`, `account.css`, `blog.css`, `test-runner.css`, `footer.css`, `responsive.css`) và tổng hợp qua master `style.css`.
  2. Tích hợp bộ đôi thư viện biểu tượng chuẩn quốc tế: **Hugeicons** (dành cho các điểm tương tác chính như Logo Sofa, Search, Giỏ hàng, Yêu thích, Người dùng) và **FontAwesome 6** (dành cho danh mục sản phẩm, rating sao, các tiện ích, điều hướng và mạng xã hội).
- **Hệ quả:** Mã nguồn CSS mạch lạc, dễ mở rộng, giao diện chuẩn UI/UX quốc tế.

---

## ADR-05: Phân tách Toàn diện Cấu trúc HTML (Multi-Page Architecture & Components) và Thực thi Plan WooCommerce
- **Bối cảnh:** Nhằm đáp ứng đầy đủ tiêu chí của kế hoạch `Ke-hoach-trien-khai-WordPress-WooCommerce.md` và yêu cầu tách file HTML, toàn bộ ứng dụng cần có cả các trang HTML độc lập (Home, Shop, Cart, Checkout, My Account, Blog, PDP) và thư viện các component partials dùng chung trong `components/`.
- **Quyết định:**
  1. Xây dựng 7 trang HTML độc lập có liên kết chéo liền mạch:
     - `index.html`: Trang chủ (Hero slider, Top Categories, Deal countdown, Split showcase, Inspiration banner).
     - `shop.html`: Trang catalog sản phẩm đầy đủ với sidebar bộ lọc đa diện (Category, Brand, Color, Size, Price slider, Sale).
     - `cart.html`: Trang giỏ hàng chuyên biệt với bảng chi tiết sản phẩm, điều chỉnh số lượng (+/-), coupon discount, tính phí ship và tổng kết.
     - `checkout.html`: Trang thanh toán chuyên biệt với form xác nhận người nhận, phương thức COD & Chuyển khoản ngân hàng.
     - `account.html`: Trang cổng thông tin khách hàng với Bảng điều khiển (Dashboard stats), lịch sử đơn hàng (Orders history), sổ địa chỉ và thông tin cá nhân.
     - `blog.html`: Bản tin kiến trúc nội thất với 6 bài viết, 3 danh mục lọc, tìm kiếm bài viết và popup đọc chuyên sâu.
     - `product-detail.html`: Trang chi tiết sản phẩm (PDP) độc lập hỗ trợ URL query `?id=X`, chuyển đổi biến thể Color & Size tương tác, bảng thông số kỹ thuật và sản phẩm liên quan.
  2. Đóng gói 12 component partials có thể tái sử dụng trong thư mục `components/`: `header.html`, `navbar.html`, `hero.html`, `categories.html`, `showcase.html`, `cart-view.html`, `checkout-view.html`, `account-view.html`, `blog-view.html`, `pdp-view.html`, `modals.html`, `footer.html`.
- **Hệ quả:** Đáp ứng 100% hợp đồng kiến trúc trang của WooCommerce, dễ dàng tích hợp vào template PHP của WordPress Theme / Child theme hoặc chạy trực tiếp trên bất kỳ máy chủ tĩnh/PHP nào.

---

## ADR-06: Hòa giải Toàn diện Kiến trúc, Đóng gói FSE Child Theme & Thực thi plan.md
- **Bối cảnh:** Kế hoạch `plan.md` đặt ra các yêu cầu tiếp tục dự án WooCommerce từ archive, giải quyết các điểm mâu thuẫn về thương hiệu, theme, danh mục, dataset, test coverage và quy trình đóng gói WordPress child theme FSE sạch.
- **Quyết định:**
  1. **Thương hiệu & Thiết kế:** Xác nhận thương hiệu chính thức là **WOODLUXE (International Living)**, màu sắc Deep Royal Navy và Warm Amber, phông chữ Plus Jakarta Sans.
  2. **Kiến trúc Theme:** Xây dựng và đóng gói gói phát hành sạch `twentytwentyfive-child.zip` (SHA-256: `3F4DC2CA7581DD637D9940CFC66482FFEED99FAB77D410243D9301745ABAE93E`) tuân thủ cấu trúc Full Site Editing (FSE) của WordPress 6.7+ và Twenty Twenty-Five; triển khai sẵn sàng vào `C:\xampp\htdocs\kiotviet-web\wp-content\themes\twentytwentyfive-child`.
  3. **Danh mục:** Giữ đúng 6 danh mục chuẩn (Chairs, Tables, Sofas, Beds, Lighting, Decoration), không đưa danh mục phụ `Storage` vào làm xáo trộn dữ liệu.
  4. **Dataset:** Đồng bộ 20 sản phẩm chuẩn trong `docs/dataset/products.csv`, giải trình minh bạch sự khác biệt 42 vs 48 variations.
  5. **Plugin Mini KiotViet:** Không cài đặt hoặc kích hoạt plugin Mini KiotViet vào website bán hàng; chỉ dùng làm tham khảo mô hình đóng gói WordPress.
  6. **Kiểm thử:** Bảo toàn 20 test case cốt lõi TC01–TC20 tích hợp bảng ánh xạ tới 28 case mở rộng trong archive.
- **Hệ quả:** Đạt trọn vẹn Definition of Done và toàn bộ các Gate (Gate 0 đến Gate 5, Deployment Phase D) của `plan.md`.



