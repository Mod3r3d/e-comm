# HƯỚNG DẪN CƠ SỞ DỮ LIỆU WOODLUXE (`woodluxe_db`)

Thư mục này chứa toàn bộ định nghĩa cấu trúc (DDL), dữ liệu khởi tạo (Seed Data DML) và mã kết nối PDO PHP cho dự án thương mại điện tử **WOODLUXE International Living**.

---

## 1. Danh sách tệp tin

| Tên tệp | Mục đích |
|---|---|
| [`woodluxe_db.sql`](file:///c:/Users/ad/Documents/Workspace/e-comm/database/woodluxe_db.sql) | Script tạo database, 14 bảng, 1 view, 1 stored procedure và toàn bộ dữ liệu mẫu |
| [`db_connect.php`](file:///c:/Users/ad/Documents/Workspace/e-comm/database/db_connect.php) | Tệp kết nối PDO PHP chuẩn UTF-8, cấu hình tương thích XAMPP |
| [`../docs/database-design.md`](file:///c:/Users/ad/Documents/Workspace/e-comm/docs/database-design.md) | Tài liệu kiến trúc ERD, từ điển dữ liệu và giải thích ràng buộc chi tiết |

---

## 2. Hướng dẫn cài đặt & Nạp dữ liệu vào XAMPP MySQL

### Cách 1: Nạp nhanh qua dòng lệnh (Command Line)

Mở PowerShell hoặc Command Prompt tại thư mục dự án và chạy:

```bash
cmd /c "C:\xampp\mysql\bin\mysql.exe -u root < database\woodluxe_db.sql"
```

### Cách 2: Nạp qua giao diện phpMyAdmin

1. Khởi động Apache và MySQL trên **XAMPP Control Panel**.
2. Truy cập trình duyệt: [http://localhost/phpmyadmin/](http://localhost/phpmyadmin/).
3. Nhấp vào tab **Import** (Nhập).
4. Chọn tệp [`database/woodluxe_db.sql`](file:///c:/Users/ad/Documents/Workspace/e-comm/database/woodluxe_db.sql).
5. Nhấn **Go** (Thực hiện). Hệ thống sẽ tự động tạo cơ sở dữ liệu `woodluxe_db` kèm tất cả bảng và dữ liệu 20 sản phẩm.

---

## 3. Cấu hình kết nối mặc định trong `db_connect.php`

```php
$db_host = '127.0.0.1';
$db_port = '3306';
$db_name = 'woodluxe_db';
$db_user = 'root';
$db_pass = ''; // Mặc định XAMPP không có mật khẩu
```

