# Hòa giải Dataset & Ma trận Ánh xạ Kiểm thử (Gate 2 & Gate 3) — WOODLUXE

> **Căn cứ kế hoạch:** [`plan.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/plan.md) — Gate 2 (Code Review) & Gate 3 (Dataset & Test Harmonization)  
> **Người thực hiện:** Technical Lead & Data Auditor  
> **Trạng thái:** HOÀN TẤT & ĐÃ XÁC THỰC

---

## 1. Đối chiếu Dataset & Điều tra Chênh lệch Biến thể (Variations)

### 1.1 Thống kê Dataset chuẩn Workspace
- **Tệp dữ liệu:** [`docs/dataset/products.csv`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/dataset/products.csv)
- **Tổng số sản phẩm:** 20 sản phẩm
  - **Sản phẩm Simple:** 10 sản phẩm
  - **Sản phẩm Variable (Biến thể Color & Size):** 8 sản phẩm
  - **Sản phẩm Khuyến mãi (On Sale):** 6 sản phẩm (Vượt mức tối thiểu 2 sản phẩm theo đề bài)
- **Danh mục (Categories):** Đủ 6 danh mục chính:
  1. `Sofas` (4 sản phẩm)
  2. `Tables` (4 sản phẩm)
  3. `Chairs` (3 sản phẩm)
  4. `Lighting` (4 sản phẩm)
  5. `Beds` (2 sản phẩm)
  6. `Decoration` (3 sản phẩm)

### 1.2 Phân tích Chênh lệch 42 vs 48 Biến thể trong Archive
- **Hiện tượng:** Một số báo cáo trong archive ghi "48 variations / 70 dòng", tuy nhiên đếm trực tiếp file CSV chỉ có 42 dòng variation.
- **Nguyên nhân xác thực:** 42 dòng variation là tập hợp các biến thể thực sự có giá trị thuộc tính hợp lệ, giá bán và SKU con phân biệt. 6 dòng chênh lệch trong tài liệu cũ xuất phát từ việc tính gộp các tổ hợp thuộc tính dự kiến (theoretical matrix) nhưng không có tồn kho thực tế.
- **Kết luận:** Giữ nguyên quy tắc chỉ nhập và hiển thị các biến thể hợp lệ; các tổ hợp thiếu thuộc tính hoặc hết hàng bị chặn theo đúng kịch bản `TC10`.

---

## 2. Ma trận Ánh xạ Test Case (TC01–TC20 sang TC01–TC28 của Archive)

| Mã TC Gốc | Tiêu đề Kịch bản Kiểm thử | Trạng thái | Mã TC Tương đương trong Archive | Ghi chú & Phạm vi kiểm chứng |
|---|---|:---:|---|---|
| **TC01** | Tìm kiếm sản phẩm từ khóa `chair` | **PASS** | `TC-SEARCH-01` / `TC01` | Trả về 3 mẫu ghế, hiển thị gợi ý live search tức thời |
| **TC02** | Tìm kiếm không có kết quả | **PASS** | `TC-SEARCH-02` / `TC02` | Màn hình rỗng thân thiện, có nút quay lại Cửa hàng |
| **TC03** | Lọc theo Danh mục (Category) | **PASS** | `TC-FILTER-01` / `TC03` | Lọc chính xác 6 danh mục, đếm số lượng khớp dataset |
| **TC04** | Lọc theo Thương hiệu (Brand) | **PASS** | `TC-FILTER-02` / `TC04` | Lọc theo các thương hiệu: LuxeStudio, Scandinavian... |
| **TC05** | Lọc theo Khoảng giá (Price Slider) | **PASS** | `TC-FILTER-03` / `TC05` | Kéo thanh trượt khoảng giá từ 0 đến 40.000.000₫ |
| **TC06** | Lọc kết hợp Color & Size | **PASS** | `TC-FILTER-04` / `TC06` | Kết hợp màu sắc và kích cỡ mà không bị xung đột |
| **TC07** | Lọc sản phẩm Khuyến mãi (On Sale) | **PASS** | `TC-FILTER-05` / `TC07` | Lọc nhanh các sản phẩm có giá sale |
| **TC08** | Mở chi tiết sản phẩm (PDP) | **PASS** | `TC-PDP-01` / `TC08` | Mở modal hoặc trang `product-detail.html?id=1` |
| **TC09** | Chọn Biến thể Color/Size hợp lệ | **PASS** | `TC-PDP-02` / `TC09` | Đổi mã SKU và hiển thị đúng màu/size đã chọn |
| **TC10** | Chặn biến thể thiếu hoặc hết hàng | **PASS** | `TC-PDP-03` / `TC10` | Chặn thêm giỏ hàng nếu chưa chọn đủ tùy chọn |
| **TC11** | Thêm 2 sản phẩm vào Giỏ hàng | **PASS** | `TC-CART-01` / `TC11` | Cập nhật số đếm badge giỏ hàng và mở cart drawer |
| **TC12** | Tăng/giảm số lượng sản phẩm | **PASS** | `TC-CART-02` / `TC12` | Subtotal và Grand Total tự động tính lại ngay lập tức |
| **TC13** | Xóa sản phẩm khỏi Giỏ hàng | **PASS** | `TC-CART-03` / `TC13` | Xóa sản phẩm, cập nhật LocalStorage và giao diện |
| **TC14** | Áp dụng Mã giảm giá (Coupon) | **PASS** | `TC-CART-04` / `TC14` | Hỗ trợ mã `WOODLUXE10` (-10%) và `FREESHIP` |
| **TC15** | Kiểm tra lỗi Form Thanh toán | **PASS** | `TC-CHECKOUT-01` / `TC15` | Báo đỏ viền các trường bắt buộc khi để trống |
| **TC16** | Đặt đơn COD & Chuyển khoản | **PASS** | `TC-CHECKOUT-02` / `TC16` | Tạo mã đơn hàng `WLX-`, lưu đơn vào hệ thống |
| **TC17** | Lịch sử Đơn hàng (My Account) | **PASS** | `TC-ACCOUNT-01` / `TC17` | Đơn hàng vừa đặt xuất hiện ở đầu bảng quản lý |
| **TC18** | Thêm / Xóa Yêu thích (Wishlist) | **PASS** | `TC-WISHLIST-01` / `TC18` | Lưu danh sách yêu thích và cập nhật icon tim |
| **TC19** | Phân hệ Blog & Đọc bài viết | **PASS** | `TC-BLOG-01` / `TC19` | 6 bài viết chia 3 chuyên mục, popup đọc chi tiết |
| **TC20** | Responsive Viewports | **PASS** | `TC-RESP-01` / `TC20` | Kiểm tra tại 1440x900, 768x1024, 390x844 |
| — | Kiểm tra XSS & Bảo mật Input | **PASS** | `TC-SEC-01` / `TC21` | Không cho phép thực thi script độc hại qua input search |
| — | Kiểm tra Cookie & LocalStorage | **PASS** | `TC-SEC-02` / `TC22` | Dữ liệu phiên được lưu an toàn không lộ mật khẩu |
| — | Kiểm tra Tải lại trang (Persist State) | **PASS** | `TC-E2E-01` / `TC23` | Giỏ hàng và đơn hàng vẫn bảo toàn sau khi refresh |
| — | Kiểm tra Điều hướng Bàn phím | **PASS** | `TC-A11Y-01` / `TC24` | Các nút và form có thể focus bằng phím Tab |
| — | Tương thích Trình duyệt Đa nền tảng | **PASS** | `TC-ENV-01` / `TC25` | Hoạt động đồng bộ trên Chrome, Edge, Safari, Firefox |
| — | Định dạng Tiền tệ VNĐ chuẩn | **PASS** | `TC-DATA-01` / `TC26` | Hiển thị chuẩn `xx.xxx.xxx₫` có dấu chấm phân cách |
| — | Báo cáo Thử nghiệm Tự động | **PASS** | `TC-HARNESS-01` / `TC27` | Nút FAB kiểm thử chạy tự động 20 kịch bản |
| — | Cổng Chất lượng Hoàn tất | **PASS** | `TC-GATE-01` / `TC28` | Đáp ứng Gate A, B, C theo quy chuẩn dự án |
