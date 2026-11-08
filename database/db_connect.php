<?php
/**
 * WOODLUXE E-COMMERCE DATABASE CONNECTOR
 * Hỗ trợ cả Localhost (XAMPP/WAMP) và Hosting InfinityFree (vPanel)
 */

// ==============================================================================
// CẤU HÌNH CƠ SỞ DỮ LIỆU (DATABASE CONFIGURATION)
// ==============================================================================
// HƯỚNG DẪN DÀNH CHO INFINITYFREE:
// 1. Vào InfinityFree Control Panel (cPanel/vPanel) -> Mục "MySQL Databases".
// 2. Tạo một database mới (ví dụ: woodluxe_db -> tên đầy đủ sẽ là: if0_XXXXX_woodluxe_db).
// 3. Sao chép các thông số: MySQL Host Name, MySQL User Name, MySQL Password.
// 4. Điền các thông số đó vào các biến bên dưới:
// ==============================================================================

$is_localhost = in_array($_SERVER['SERVER_NAME'] ?? '', ['localhost', '127.0.0.1', '::1']);

if ($is_localhost) {
    // Cấu hình môi trường máy tính cục bộ (XAMPP / WAMP)
    $db_host = '127.0.0.1';
    $db_port = '3306';
    $db_name = 'woodluxe_db';
    $db_user = 'root';
    $db_pass = '';
} else {
    // Cấu hình môi trường máy chủ InfinityFree
    // (Thay thế bằng thông tin thực tế trong Control Panel của bạn)
    $db_host = 'sql100.infinityfree.com'; // Ví dụ: sql100.infinityfree.com hoặc sqlxxx.epizy.com
    $db_port = '3306';
    $db_name = 'if0_00000000_woodluxe_db'; // Thay if0_00000000 bằng username InfinityFree của bạn
    $db_user = 'if0_00000000';             // Username vPanel của bạn
    $db_pass = 'YOUR_VPO_PASSWORD';        // Mật khẩu vPanel / Account password của bạn
}

// Kết nối PDO an toàn với utf8mb4
try {
    $dsn = "mysql:host={$db_host};port={$db_port};dbname={$db_name};charset=utf8mb4";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];

    $pdo = new PDO($dsn, $db_user, $db_pass, $options);
} catch (PDOException $e) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'status'  => 'error',
        'message' => 'Lỗi kết nối cơ sở dữ liệu. Vui lòng kiểm tra thông số kết nối trong database/db_connect.php',
        'debug'   => $is_localhost ? $e->getMessage() : null
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
