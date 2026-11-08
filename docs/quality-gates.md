# Cổng chất lượng (Quality Gates) — WOODLUXE

Quy trình quản lý chất lượng theo phương pháp Harness Engineering nhằm đảm bảo mọi tính năng được kiểm chứng trước khi chuyển giao.

---

## 1. Các Cổng Kiểm soát (Gates)

### Gate A — Điều kiện tiên quyết trước khi phát triển tính năng
- [x] Đã có tài liệu đặc tả sản phẩm [`docs/product-spec.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/product-spec.md) và mã yêu cầu (REQ-ID).
- [x] Đã xác định dữ liệu nguồn trong [`docs/dataset/products.csv`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/dataset/products.csv).
- [x] Đã thống nhất bảng mã lỗi và tiêu chí nghiệm thu (Acceptance Criteria).

### Gate B — Điều kiện hoàn tất một Task kỹ thuật
- [x] Tính năng hoạt động đầy đủ trên giao diện không có lỗi console Javascript.
- [x] Không làm ảnh hưởng hoặc làm sai lệch kết quả của các phân hệ khác.
- [x] Kiểm tra hiển thị tối thiểu trên 3 kích thước: 1440px (Desktop), 768px (Tablet), 390px (Mobile).
- [x] Chạy qua test case kiểm thử tương ứng đạt trạng thái `PASS`.

### Gate C — Điều kiện nghiệm thu bàn giao toàn bộ sản phẩm
- [x] 0 lỗi P0 (Lỗi nghiêm trọng: sập trang, mất giỏ hàng, vỡ form đặt hàng).
- [x] 0 lỗi P1 (Lỗi luồng chính: không chọn được biến thể, sai số tiền, tìm kiếm sai).
- [x] Toàn bộ 20 test case trong [`docs/test-report.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/test-report.md) đạt kết quả 100% `PASS`.
- [x] Có đầy đủ deliverables: mã nguồn, tài liệu kiến trúc, bộ dữ liệu, media manifest và hướng dẫn chạy.

---

## 2. Bảng phân loại mức độ nghiêm trọng của lỗi (Severity Matrix)

| Cấp độ | Định nghĩa | Thời hạn xử lý |
|---|---|---|
| **P0 (Critical)** | Mất dữ liệu, nút thanh toán hoặc thêm giỏ hàng bị tê liệt, trang trắng. | Xử lý ngay lập tức, chặn release. |
| **P1 (High)** | Lọc sai sản phẩm, biến thể không cập nhật giá/SKU, responsive bị vỡ tràn khung ngang. | Phải sửa trước khi qua Gate C. |
| **P2 (Medium)** | Lỗi giao diện nhỏ, thông báo hiển thị chưa đẹp, coupon chưa báo lý do chi tiết. | Sắp xếp sửa trong vòng lặp tiếp theo. |
| **P3 (Low)** | Tinh chỉnh khoảng cách viền, micro-animation chưa mượt mà. | Cải tiến khi có thời gian dư. |
