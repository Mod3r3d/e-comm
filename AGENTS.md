# AGENTS.md — Bản đồ dự án & Hướng dẫn Tác nhân

Dự án này là website thương mại điện tử nội thất quốc tế tại thị trường Việt Nam, xây dựng theo phương pháp **Harness Engineering** dựa trên thiết kế tham chiếu **WoodMart Retail** (có tinh chỉnh cá nhân hóa thương hiệu sang **WOODLUXE / LUXE LIVING**).

---

## 1. Bản đồ tài liệu (Document Map)

| Tài liệu | Đường dẫn | Mục đích |
|---|---|---|
| **Đặc tả sản phẩm** | [`docs/product-spec.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/product-spec.md) | Phạm vi, hành vi người dùng, tiêu chí nghiệm thu |
| **Kiến trúc hệ thống** | [`docs/architecture.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/architecture.md) | Kiến trúc giao diện, luồng dữ liệu, WooCommerce contract |
| **Hệ thống thiết kế** | [`docs/design-system.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/design-system.md) | Bảng màu, typography, responsive tokens, components |
| **Từ điển dữ liệu** | [`docs/data-dictionary.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/data-dictionary.md) | Cấu trúc dữ liệu sản phẩm, biến thể, bài viết blog |
| **Môi trường & Vận hành** | [`docs/environment.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/environment.md) | Cấu hình máy chủ, cổng, hướng dẫn chạy và reset |
| **Cổng chất lượng** | [`docs/quality-gates.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/quality-gates.md) | Tiêu chí Gate A, Gate B, Gate C và phân loại lỗi P0–P3 |
| **Nhật ký quyết định (ADR)** | [`docs/decisions.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/decisions.md) | Các quyết định kỹ thuật, tinh chỉnh thiết kế, tiền tệ |
| **Báo cáo kiểm thử** | [`docs/test-report.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/test-report.md) | 20 test case kiểm thử chi tiết kèm bằng chứng |
| **Dataset sản phẩm** | [`docs/dataset/products.csv`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/dataset/products.csv) | Dữ liệu nguồn 20 sản phẩm (10 simple, 8 variable, 2 sale) |
| **Dataset bài viết** | [`docs/dataset/blog.csv`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/dataset/blog.csv) | 6 bài viết chia 3 chuyên mục nội thất |
| **Danh mục Media** | [`docs/dataset/media-manifest.csv`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/dataset/media-manifest.csv) | Danh sách tài sản hình ảnh, quyền sử dụng, alt text |
| **Kế hoạch triển khai WooCommerce** | [`plan.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/plan.md) | Kế hoạch tổng thể tiếp tục dự án WooCommerce theo Harness Engineering |
| **Kế hoạch thực thi kỹ thuật** | [`docs/exec-plans/active/plan-ecomm-execution.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/exec-plans/active/plan-ecomm-execution.md) | Bảng theo dõi tiến độ các task chi tiết |
| **Báo cáo kiểm kê & đối chiếu gốc** | [`docs/audit-baseline-report.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/audit-baseline-report.md) | Báo cáo kiểm kê archive, phân định STATIC/RUNTIME, hòa giải 6 xung đột |
| **Ma trận ánh xạ Dataset & Test** | [`docs/dataset-mapping-and-test-matrix.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/dataset-mapping-and-test-matrix.md) | Đối chiếu 20 vs 22 sản phẩm, phân tích 42 vs 48 biến thể, map TC01–TC20 sang TC01–TC28 |
| **Manifest & Hướng dẫn Deploy Theme** | [`docs/deployment-manifest.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/deployment-manifest.md) | Manifest artifact `twentytwentyfive-child.zip` (SHA-256), checklist staging & runbook rollback |
| **Thiết kế Cơ sở dữ liệu** | [`docs/database-design.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/database-design.md) | Kiến trúc ERD, đặc tả 14 bảng, ràng buộc verified purchase, views & SP |
| **Mã nguồn SQL khởi tạo** | [`database/woodluxe_db.sql`](file:///c:/Users/ad/Documents/Workspace/e-comm/database/woodluxe_db.sql) | Script tạo CSDL MySQL `woodluxe_db`, khóa ngoại, chỉ mục và 20 sản phẩm |

---

## 2. Quy tắc vận hành (Harness Rules)

1. **Nguồn sự thật:** Mọi thuộc tính sản phẩm và biến thể bắt buộc tuân theo [`docs/dataset/products.csv`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/dataset/products.csv) và [`docs/data-dictionary.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/data-dictionary.md).
2. **Không sao chép nguyên dạng demo:** Thiết kế kế thừa bố cục tối ưu của WoodMart Retail nhưng sở hữu nhận diện thương hiệu độc lập (WOODLUXE), bảng màu sang trọng (Deep Navy, Warm Amber, Slate White), 6 danh mục nội thất thực thụ và bộ asset nhiếp ảnh studio cao cấp.
3. **Phản hồi kiểm chứng:** Tất cả 20 test case (TC01–TC20) phải có thể chạy kiểm tra trực tiếp và lưu trữ kết quả trong [`docs/test-report.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/test-report.md).
4. **Không phụ thuộc internet khi chạy:** Các tài nguyên cốt lõi (ảnh, CSS, icons, dữ liệu) được đóng gói cục bộ trong dự án.
