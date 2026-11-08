-- ============================================================================
-- WOODLUXE INTERNATIONAL LIVING — RELATIONAL DATABASE SCHEMA (MySQL 8.0+)
-- Architecture: E-Commerce Storefront & Order Management System
-- Character Set: utf8mb4 / Collation: utf8mb4_unicode_ci
-- ============================================================================

-- Lưu ý khi import lên Hosting (InfinityFree, cPanel...):
-- Hãy tạo Database từ bảng điều khiển trước, sau đó chọn Database đó trong phpMyAdmin rồi bấm Import.
-- (Các dòng CREATE DATABASE bên dưới được đặt trong comment để tương thích 100% với Hosting)
-- CREATE DATABASE IF NOT EXISTS `woodluxe_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE `woodluxe_db`;

-- Tắt kiểm tra khóa ngoại tạm thời để khởi tạo lại bảng sạch sẽ nếu cần
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `consultation_leads`;
DROP TABLE IF EXISTS `cart_items`;
DROP TABLE IF EXISTS `wishlists`;
DROP TABLE IF EXISTS `reviews`;
DROP TABLE IF EXISTS `order_items`;
DROP TABLE IF EXISTS `orders`;
DROP TABLE IF EXISTS `coupons`;
DROP TABLE IF EXISTS `product_variations`;
DROP TABLE IF EXISTS `product_images`;
DROP TABLE IF EXISTS `products`;
DROP TABLE IF EXISTS `brands`;
DROP TABLE IF EXISTS `categories`;
DROP TABLE IF EXISTS `blog_posts`;
DROP TABLE IF EXISTS `blog_categories`;
DROP TABLE IF EXISTS `users`;

SET FOREIGN_KEY_CHECKS = 1;

-- ============================================================================
-- 1. BẢNG NGƯỜI DÙNG & TÀI KHOẢN (users)
-- ============================================================================
CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(60) NOT NULL,
  `email` VARCHAR(120) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(120) NOT NULL,
  `phone` VARCHAR(20) NULL,
  `address` VARCHAR(255) NULL,
  `city` VARCHAR(80) DEFAULT 'TP. Hồ Chí Minh',
  `role` ENUM('customer', 'admin', 'manager') NOT NULL DEFAULT 'customer',
  `status` ENUM('active', 'inactive', 'banned') NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_users_username` (`username`),
  UNIQUE KEY `idx_users_email` (`email`),
  KEY `idx_users_phone` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Quản lý thông tin tài khoản người dùng và phân quyền';

-- ============================================================================
-- 2. BẢNG DANH MỤC SẢN PHẨM (categories)
-- ============================================================================
CREATE TABLE `categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100) NOT NULL,
  `icon_class` VARCHAR(100) NOT NULL DEFAULT 'fa-solid fa-couch',
  `image_url` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `display_order` INT NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_categories_slug` (`slug`),
  KEY `idx_categories_order` (`display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='6 danh mục sản phẩm nội thất tuyển chọn';

-- ============================================================================
-- 3. BẢNG THƯƠNG HIỆU ĐỐI TÁC (brands)
-- ============================================================================
CREATE TABLE `brands` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100) NOT NULL,
  `origin_country` VARCHAR(60) DEFAULT 'Bắc Âu (Scandinavia)',
  `logo_url` VARCHAR(255) NULL,
  `description` TEXT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_brands_name` (`name`),
  UNIQUE KEY `idx_brands_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Nhà sản xuất và xưởng thủ công đối tác của WOODLUXE';

-- ============================================================================
-- 4. BẢNG SẢN PHẨM CỐT LÕI (products)
-- ============================================================================
CREATE TABLE `products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` INT UNSIGNED NOT NULL,
  `brand_id` INT UNSIGNED NULL,
  `name` VARCHAR(200) NOT NULL,
  `slug` VARCHAR(200) NOT NULL,
  `sku` VARCHAR(50) NOT NULL,
  `product_type` ENUM('simple', 'variable', 'sale') NOT NULL DEFAULT 'simple',
  `regular_price` DECIMAL(14,2) NOT NULL,
  `sale_price` DECIMAL(14,2) NULL,
  `stock_quantity` INT NOT NULL DEFAULT 0,
  `stock_status` ENUM('instock', 'outofstock', 'onbackorder') NOT NULL DEFAULT 'instock',
  `rating_avg` DECIMAL(3,2) NOT NULL DEFAULT 5.00,
  `reviews_count` INT UNSIGNED NOT NULL DEFAULT 0,
  `short_description` VARCHAR(500) NULL,
  `description` LONGTEXT NULL,
  `specs_json` JSON NULL COMMENT 'Lưu thông số kỹ thuật (Kích thước, Khung, Chất liệu, Bảo hành)',
  `primary_image` VARCHAR(255) NOT NULL,
  `badge` VARCHAR(50) NULL COMMENT 'Nhãn nổi bật: Sale, New, Hot',
  `is_featured` TINYINT(1) NOT NULL DEFAULT 0,
  `is_top_seller` TINYINT(1) NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_products_sku` (`sku`),
  UNIQUE KEY `idx_products_slug` (`slug`),
  KEY `idx_products_category` (`category_id`),
  KEY `idx_products_brand` (`brand_id`),
  KEY `idx_products_price` (`regular_price`, `sale_price`),
  KEY `idx_products_rating` (`rating_avg`),
  KEY `idx_products_featured` (`is_featured`),
  CONSTRAINT `fk_products_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_products_brand` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Danh mục 20 sản phẩm nội thất cao cấp';

-- ============================================================================
-- 5. BẢNG THƯ VIỆN HÌNH ẢNH SẢN PHẨM (product_images)
-- ============================================================================
CREATE TABLE `product_images` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `alt_text` VARCHAR(255) NULL,
  `is_primary` TINYINT(1) NOT NULL DEFAULT 0,
  `display_order` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `idx_product_images_product` (`product_id`),
  CONSTRAINT `fk_images_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Ảnh chi tiết studio, góc chụp khác nhau của sản phẩm';

-- ============================================================================
-- 6. BẢNG BIẾN THỂ SẢN PHẨM (product_variations)
-- ============================================================================
CREATE TABLE `product_variations` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `sku` VARCHAR(80) NOT NULL,
  `color` VARCHAR(80) NULL,
  `size` VARCHAR(80) NULL,
  `regular_price` DECIMAL(14,2) NOT NULL,
  `sale_price` DECIMAL(14,2) NULL,
  `stock_quantity` INT NOT NULL DEFAULT 10,
  `image_url` VARCHAR(255) NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_variations_sku` (`sku`),
  KEY `idx_variations_product` (`product_id`),
  CONSTRAINT `fk_variations_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Ma trận biến thể Màu sắc x Kích cỡ của sản phẩm variable';

-- ============================================================================
-- 7. BẢNG MÃ GIẢM GIÁ (coupons)
-- ============================================================================
CREATE TABLE `coupons` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(50) NOT NULL,
  `discount_type` ENUM('percentage', 'fixed_amount', 'free_shipping') NOT NULL,
  `discount_value` DECIMAL(12,2) NOT NULL,
  `min_order_amount` DECIMAL(14,2) NOT NULL DEFAULT 0.00,
  `max_discount_amount` DECIMAL(14,2) NULL,
  `usage_limit` INT NULL,
  `times_used` INT NOT NULL DEFAULT 0,
  `expires_at` DATETIME NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_coupons_code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Mã khuyến mãi và giảm giá giỏ hàng';

-- ============================================================================
-- 8. BẢNG ĐƠN HÀNG (orders)
-- ============================================================================
CREATE TABLE `orders` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_code` VARCHAR(50) NOT NULL,
  `user_id` INT UNSIGNED NULL,
  `customer_name` VARCHAR(120) NOT NULL,
  `customer_phone` VARCHAR(20) NOT NULL,
  `customer_email` VARCHAR(120) NOT NULL,
  `shipping_address` VARCHAR(255) NOT NULL,
  `shipping_city` VARCHAR(80) DEFAULT 'TP. Hồ Chí Minh',
  `order_notes` TEXT NULL,
  `payment_method` ENUM('COD', 'BANK_TRANSFER', 'VNPAY', 'MOMO') NOT NULL DEFAULT 'COD',
  `payment_status` ENUM('pending', 'paid', 'failed', 'refunded') NOT NULL DEFAULT 'pending',
  `order_status` ENUM('pending', 'processing', 'shipping', 'completed', 'cancelled') NOT NULL DEFAULT 'completed',
  `subtotal` DECIMAL(14,2) NOT NULL,
  `discount_amount` DECIMAL(14,2) NOT NULL DEFAULT 0.00,
  `coupon_code` VARCHAR(50) NULL,
  `shipping_fee` DECIMAL(14,2) NOT NULL DEFAULT 0.00,
  `total_amount` DECIMAL(14,2) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_orders_code` (`order_code`),
  KEY `idx_orders_user` (`user_id`),
  KEY `idx_orders_status` (`order_status`),
  KEY `idx_orders_created` (`created_at`),
  CONSTRAINT `fk_orders_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Đơn đặt hàng từ khách hàng';

-- ============================================================================
-- 9. BẢNG CHI TIẾT ĐƠN HÀNG (order_items)
-- ============================================================================
CREATE TABLE `order_items` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NULL,
  `variation_id` INT UNSIGNED NULL,
  `product_name` VARCHAR(200) NOT NULL,
  `product_sku` VARCHAR(80) NOT NULL,
  `color` VARCHAR(80) NULL,
  `size` VARCHAR(80) NULL,
  `unit_price` DECIMAL(14,2) NOT NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  `subtotal` DECIMAL(14,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_order_items_order` (`order_id`),
  KEY `idx_order_items_product` (`product_id`),
  CONSTRAINT `fk_order_items_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_order_items_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_order_items_variation` FOREIGN KEY (`variation_id`) REFERENCES `product_variations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Chi tiết danh sách sản phẩm cấu thành đơn hàng';

-- ============================================================================
-- 10. BẢNG ĐÁNH GIÁ & NHẬN XÉT (reviews)
-- Quy tắc nghiệp vụ cốt lõi: Chỉ khách đã mua sản phẩm (có order_id) mới được đánh giá
-- ============================================================================
CREATE TABLE `reviews` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `order_id` INT UNSIGNED NULL,
  `rating_score` TINYINT UNSIGNED NOT NULL CHECK (`rating_score` BETWEEN 1 AND 5),
  `review_title` VARCHAR(150) NULL,
  `comment` TEXT NULL,
  `is_verified_purchase` TINYINT(1) NOT NULL DEFAULT 1 COMMENT '1 = Khách hàng đã mua hàng thực tế',
  `status` ENUM('approved', 'pending', 'rejected') NOT NULL DEFAULT 'approved',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_user_product_review` (`product_id`, `user_id`),
  KEY `idx_reviews_product` (`product_id`),
  KEY `idx_reviews_user` (`user_id`),
  KEY `idx_reviews_order` (`order_id`),
  CONSTRAINT `fk_reviews_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_reviews_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_reviews_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Đánh giá chất lượng sản phẩm (bảo vệ bằng verified purchase)';

-- ============================================================================
-- 11. BẢNG SẢN PHẨM YÊU THÍCH (wishlists)
-- ============================================================================
CREATE TABLE `wishlists` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_user_wishlist` (`user_id`, `product_id`),
  KEY `idx_wishlists_user` (`user_id`),
  CONSTRAINT `fk_wishlists_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_wishlists_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Danh sách sản phẩm yêu thích của khách hàng';

-- ============================================================================
-- 12. BẢNG GIỎ HÀNG LƯU TRỮ (cart_items)
-- ============================================================================
CREATE TABLE `cart_items` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `variation_id` INT UNSIGNED NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_cart_user` (`user_id`),
  CONSTRAINT `fk_cart_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_cart_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_cart_variation` FOREIGN KEY (`variation_id`) REFERENCES `product_variations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Giỏ hàng đồng bộ hóa theo tài khoản đăng nhập';

-- ============================================================================
-- 13. BẢNG CHUYÊN MỤC BLOG (blog_categories)
-- ============================================================================
CREATE TABLE `blog_categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100) NOT NULL,
  `description` VARCHAR(255) NULL,
  `display_order` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_blog_categories_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Chuyên mục bài viết cẩm nang nội thất';

-- ============================================================================
-- 14. BẢNG BÀI VIẾT BLOG (blog_posts)
-- ============================================================================
CREATE TABLE `blog_posts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` INT UNSIGNED NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `author` VARCHAR(100) NOT NULL,
  `summary` TEXT NOT NULL,
  `content` LONGTEXT NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `reading_time` VARCHAR(30) NOT NULL DEFAULT '5 phút',
  `published_date` DATE NOT NULL,
  `views_count` INT UNSIGNED NOT NULL DEFAULT 0,
  `status` ENUM('published', 'draft', 'archived') NOT NULL DEFAULT 'published',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_blog_posts_slug` (`slug`),
  KEY `idx_blog_posts_category` (`category_id`),
  KEY `idx_blog_posts_date` (`published_date`),
  CONSTRAINT `fk_blog_category` FOREIGN KEY (`category_id`) REFERENCES `blog_categories` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='6 bài viết cẩm nang thiết kế và phong cách sống';

-- ============================================================================
-- 15. BẢNG ĐĂNG KÝ TƯ VẤN & NHẬN BẢN TIN (consultation_leads)
-- ============================================================================
CREATE TABLE `consultation_leads` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(120) NULL,
  `phone` VARCHAR(20) NULL,
  `email` VARCHAR(120) NOT NULL,
  `service_type` ENUM('consultation_3d', 'newsletter', 'custom_order') NOT NULL DEFAULT 'newsletter',
  `notes` TEXT NULL,
  `status` ENUM('new', 'contacted', 'completed') NOT NULL DEFAULT 'new',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_leads_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Khách hàng đăng ký tư vấn không gian sống 3D và newsletter';


-- ============================================================================
-- VIEW TỐI ƯU HÓA TRUY VẤN CATALOG (v_product_catalog)
-- ============================================================================
CREATE OR REPLACE VIEW `v_product_catalog` AS
SELECT 
  p.`id`,
  p.`name`,
  p.`slug`,
  p.`sku`,
  p.`product_type`,
  c.`name` AS `category_name`,
  c.`slug` AS `category_slug`,
  b.`name` AS `brand_name`,
  p.`regular_price`,
  p.`sale_price`,
  COALESCE(p.`sale_price`, p.`regular_price`) AS `effective_price`,
  CASE WHEN p.`sale_price` IS NOT NULL AND p.`sale_price` < p.`regular_price` THEN 1 ELSE 0 END AS `is_on_sale`,
  p.`stock_quantity`,
  p.`stock_status`,
  p.`rating_avg`,
  p.`reviews_count`,
  p.`primary_image`,
  p.`badge`,
  p.`is_featured`,
  p.`is_top_seller`
FROM `products` p
JOIN `categories` c ON p.`category_id` = c.`id`
LEFT JOIN `brands` b ON p.`brand_id` = b.`id`
WHERE p.`is_active` = 1;

-- ============================================================================
-- STORED PROCEDURE: KIỂM TRA ĐIỀU KIỆN ĐÁNH GIÁ (sp_check_user_can_review)
-- Kiểm tra xem người dùng đã hoàn thành đơn hàng có chứa sản phẩm đó chưa
-- ============================================================================
DROP PROCEDURE IF EXISTS `sp_check_user_can_review`;
DELIMITER //
CREATE PROCEDURE `sp_check_user_can_review`(
  IN p_user_id INT UNSIGNED,
  IN p_product_id INT UNSIGNED,
  OUT p_can_review TINYINT(1),
  OUT p_order_id INT UNSIGNED
)
BEGIN
  SET p_can_review = 0;
  SET p_order_id = NULL;

  SELECT o.`id` INTO p_order_id
  FROM `orders` o
  JOIN `order_items` oi ON o.`id` = oi.`order_id`
  WHERE o.`user_id` = p_user_id
    AND oi.`product_id` = p_product_id
    AND o.`order_status` IN ('completed', 'processing')
  LIMIT 1;

  IF p_order_id IS NOT NULL THEN
    SET p_can_review = 1;
  ELSE
    SET p_can_review = 0;
  END IF;
END //
DELIMITER ;


-- ============================================================================
-- SEED DATA (DỮ LIỆU MẪU CHUẨN ĐỒNG BỘ 100% VỚI CSV & HỆ THỐNG WOODLUXE)
-- ============================================================================

-- 1. Chèn người dùng
INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `full_name`, `phone`, `address`, `role`) VALUES
(1, 'admin', 'admin@woodluxe.vn', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Quản Trị Viên WOODLUXE', '1900 6868', 'Quận 1, TP. Hồ Chí Minh', 'admin'),
(2, 'nam.nguyen', 'nam.nguyen@woodluxe.vn', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Trần Hoàng Nam', '0901 234 567', 'Penthouse B12, Thảo Điền, Quận 2, TP. Hồ Chí Minh', 'customer'),
(3, 'linh.dan', 'linh.dan@woodluxe.vn', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Đặng Quỳnh Nga', '0988 776 655', 'Biệt thự Ciputra, Tây Hồ, Hà Nội', 'customer');

-- 2. Chèn 6 danh mục
INSERT INTO `categories` (`id`, `name`, `slug`, `icon_class`, `image_url`, `description`, `display_order`) VALUES
(1, 'Chairs', 'chairs', 'fa-solid fa-chair', 'assets/images/accent-chair.jpg', 'Ghế thư giãn, ghế ăn Bắc Âu & công thái học', 1),
(2, 'Tables', 'tables', 'fa-solid fa-table', 'assets/images/dining-table.jpg', 'Bàn ăn gỗ sồi, bàn trà & bàn mở rộng thông minh', 2),
(3, 'Sofas', 'sofas', 'fa-solid fa-couch', 'assets/images/hero-sofa.jpg', 'Sofa module, sofa văng Ý & bọc da tự nhiên', 3),
(4, 'Beds', 'beds', 'fa-solid fa-bed', 'assets/images/platform-bed.jpg', 'Giường ngủ platform bọc nỉ Bouclé & khung treo', 4),
(5, 'Lighting', 'lighting', 'fa-solid fa-lightbulb', 'assets/images/brass-lamp.jpg', 'Đèn cây vòm đồng thau & đèn thả pha lê nghệ thuật', 5),
(6, 'Decoration', 'decoration', 'fa-solid fa-wand-magic-sparkles', 'assets/images/ceramic-vase.jpg', 'Bình gốm thủ công Japandi, thảm len & gương vòm', 6);

-- 3. Chèn 5 thương hiệu đối tác
INSERT INTO `brands` (`id`, `name`, `slug`, `origin_country`, `description`) VALUES
(1, 'LuxeStudio', 'luxestudio', 'Ý (Italy)', 'Thương hiệu thiết kế sofa và giường bọc da xa xỉ phong cách Milan'),
(2, 'Scandinavian Living', 'scandinavian-living', 'Đan Mạch (Denmark)', 'Nội thất gỗ sồi mộc mạc tối giản chuẩn mực Bắc Âu'),
(3, 'ArtisanHome', 'artisan-home', 'Nhật Bản (Japan)', 'Xưởng thủ công chế tác gốm thô và nội thất Wabi-Sabi'),
(4, 'NordicCraft', 'nordic-craft', 'Thụy Điển (Sweden)', 'Nghệ thuật chiếu sáng đương đại và cơ khí kim loại cao cấp'),
(5, 'WoodWood', 'woodwood', 'Đức (Germany)', 'Thiết kế bàn trà và ghế công thái học gỗ sồi FSC');

-- 4. Chèn 20 sản phẩm chuẩn từ docs/dataset/products.csv
INSERT INTO `products` (`id`, `category_id`, `brand_id`, `name`, `slug`, `sku`, `product_type`, `regular_price`, `sale_price`, `stock_quantity`, `stock_status`, `rating_avg`, `reviews_count`, `short_description`, `description`, `specs_json`, `primary_image`, `badge`, `is_featured`, `is_top_seller`) VALUES
(1, 3, 1, 'Reddington Modular Living Room Sofa', 'reddington-modular-living-room-sofa', 'SOFA-RED-01', 'variable', 32000000, 28500000, 15, 'instock', 4.90, 38, 'Sofa nỉ cao cấp với khung nhôm sơn tĩnh điện và đệm bọt nhớ đàn hồi cao.', 'Reddington 6-Piece Modular Sofa là biểu tượng của sự thư thái thượng lưu. Với khung nhôm nguyên khối sơn tĩnh điện màu than chì, đệm mút D40 phủ lông vũ êm ái chống xẹp lún và lớp vải nỉ chống bám bụi nhập khẩu từ Bỉ. Thiết kế thông minh cho phép bạn tự do thay đổi bố cục ghế góc trái, góc phải hoặc tách rời linh hoạt.', '{"Khung kết cấu": "Khung nhôm Coated Aluminum + Gỗ thông sấy", "Chất liệu bọc": "Vải nỉ Bouclé cao cấp nhập khẩu Bỉ", "Bảo hành": "5 năm cho khung, 2 năm cho đệm nỉ", "Kích thước tiêu chuẩn": "280 x 180 x 85 cm"}', 'assets/images/hero-sofa.jpg', 'Sale', 1, 1),
(2, 2, 2, 'Aarhus Scandinavian Dining Table', 'aarhus-scandinavian-dining-table', 'TBL-AAR-02', 'variable', 18500000, NULL, 12, 'instock', 4.80, 24, 'Bàn ăn gỗ sồi tự nhiên Bắc Âu với xử lý chống trầy và chống ẩm công nghệ cao.', 'Bàn ăn Aarhus được chế tác từ 100% gỗ sồi trắng châu Âu được tuyển chọn kỹ lưỡng. Từng đường vát cạnh bo tròn tinh xảo tạo cảm giác nhẹ nhàng, an toàn cho trẻ nhỏ. Lớp sơn dầu thực vật tự nhiên Osmo của Đức giữ nguyên xúc cảm vân gỗ sống động.', '{"Sức chứa": "6 - 8 người ngồi thoải mái", "Vật liệu": "Gỗ sồi trắng châu Âu (FSC Certified)", "Bảo hành": "3 năm", "Kích thước": "180 x 90 x 75 cm"}', 'assets/images/dining-table.jpg', 'New', 1, 0),
(3, 1, 3, 'Bergen Ergonomic Lounge Armchair', 'bergen-ergonomic-lounge-armchair', 'CHR-BER-03', 'sale', 12500000, 8900000, 8, 'instock', 4.90, 52, 'Ghế thư giãn da bò thủ công với khung gỗ óc chó nguyên khối.', 'Bergen Armchair kết hợp hoàn mỹ giữa công thái học thư giãn và tay nghề thuộc da thủ công tinh xảo của Tuscany. Đệm ngồi ôm sát đường cong cột sống, giúp xua tan mệt mỏi sau ngày dài.', '{"Góc ngả lưng": "115 độ thư giãn tối ưu", "Khung chân": "Gỗ óc chó Bắc Mỹ (American Walnut)", "Chất liệu da": "Da bò sáp Semi-Aniline Ý", "Bảo hành": "5 năm kết cấu"}', 'assets/images/accent-chair.jpg', 'Sale', 1, 1),
(4, 5, 4, 'Koppar Brass Arc Floor Lamp', 'koppar-brass-arc-floor-lamp', 'LGT-KOP-04', 'variable', 6800000, 5440000, 20, 'instock', 4.70, 19, 'Đèn cây vòm cong chao thủy tinh khói phong cách nghệ thuật đương đại.', 'Đèn cây Koppar tạo điểm nhấn điêu khắc ấn tượng trong phòng khách. Trục vòm bằng đồng thau chải xước vươn dài thanh thoát, đế đá cẩm thạch nguyên khối 18kg giữ thăng bằng tuyệt đối.', '{"Đế đèn": "Đá cẩm thạch Nero Marquina tự nhiên", "Chao đèn": "Thủy tinh khói thổi thủ công", "Công suất": "Đui E27 max 40W (kèm bóng LED Warm 2700K)", "Bảo hành": "2 năm linh kiện điện"}', 'assets/images/brass-lamp.jpg', 'Hot', 1, 0),
(5, 4, 1, 'Oslo Minimalist Platform King Bed', 'oslo-minimalist-platform-king-bed', 'BED-OSL-05', 'variable', 26000000, NULL, 6, 'instock', 4.90, 16, 'Giường ngủ bọc vải bouclé dệt sợi tự nhiên với khung chân gỗ tần bì kiên cố.', 'Giường ngủ Oslo nâng niu từng giấc ngủ với thiết kế phản sàn tối giản. Đầu giường chần bông dày 12cm tạo điểm tựa thoải mái khi đọc sách, khung dát nan cong hỗ trợ nâng đỡ đệm đàn hồi.', '{"Hệ nan dát": "Gỗ bạch dương uốn nhiệt dẻo dai", "Khung chính": "Gỗ tần bì tự nhiên + Vải nỉ len Bouclé", "Tải trọng": "Lên đến 450 kg", "Bảo hành": "5 năm khung sườn"}', 'assets/images/platform-bed.jpg', 'New', 1, 0),
(6, 6, 3, 'Kyoto Textured Ceramic Vase Trio', 'kyoto-textured-ceramic-vase-trio', 'DEC-KYO-06', 'simple', 2400000, NULL, 35, 'instock', 4.60, 28, 'Bộ 3 bình gốm thô thủ công tráng men mờ phong cách Japandi thanh nhã.', 'Bộ 3 bình gốm Kyoto được nung củi truyền thống tại xưởng gốm cổ, mang bề mặt vân cát thô mộc Wabi-Sabi không trùng lặp.', '{"Số lượng": "Set 3 bình với 3 kích cỡ cao 18cm, 24cm, 32cm", "Chất đất": "Đất sét khoáng nung 1280 độ C", "Ứng dụng": "Cắm hoa tươi, hoa khô hoặc trưng bày decor"}', 'assets/images/ceramic-vase.jpg', NULL, 0, 0),
(7, 1, 2, 'Stockholm Velvet Accent Chair', 'stockholm-velvet-accent-chair', 'CHR-STK-07', 'variable', 7200000, 6480000, 18, 'instock', 4.80, 31, 'Ghế bành nhung sang trọng chân kim loại mạ vàng chải tia.', 'Stockholm Accent Chair mang vẻ đẹp quyến rũ thời thượng với chất nhung mật độ cao êm ái chống bắt bụi, phối cùng chân mạ PVD vàng đồng sang trọng.', '{"Chất liệu": "Nhung cao cấp + Chân thép mạ vàng PVD", "Kích thước": "78 x 75 x 82 cm", "Bảo hành": "2 năm"}', 'assets/images/accent-chair.jpg', 'Sale', 0, 1),
(8, 2, 5, 'Malmo Solid Oak Coffee Table', 'malmo-solid-oak-coffee-table', 'TBL-MLM-08', 'simple', 8900000, NULL, 14, 'instock', 4.70, 22, 'Bàn trà phòng khách tròn gỗ sồi tự nhiên với cạnh vát tinh tế.', 'Bàn trà tròn Malmo sở hữu đường kính 80cm thanh nhã, phù hợp với mọi kiểu dáng sofa góc hay sofa văng.', '{"Vật liệu": "100% Gỗ sồi trắng nhập khẩu Đức", "Xử lý bề mặt": "Dầu lau chống thấm nước 3 lớp", "Kích thước": "Đường kính 80cm, cao 42cm"}', 'assets/images/dining-table.jpg', NULL, 0, 0),
(9, 3, 1, 'Copenhagen 3-Seater Leather Sofa', 'copenhagen-3-seater-leather-sofa', 'SOFA-CPH-09', 'variable', 38000000, NULL, 5, 'instock', 5.00, 14, 'Sofa văng da thật nhập khẩu Ý với đường may tay thủ công.', 'Đỉnh cao nội thất phòng khách với da bò nguyên tấm Top-Grain nhập khẩu trực tiếp từ vùng Veneto của Ý.', '{"Chất liệu": "100% Da bò Top Grain dày 1.6mm", "Kích thước": "220 x 95 x 82 cm", "Bảo hành": "10 năm khung sườn, 3 năm bề mặt da"}', 'assets/images/hero-sofa.jpg', 'Hot', 1, 0),
(10, 4, 2, 'Helsinki Oak Floating Bed Frame', 'helsinki-oak-floating-bed-frame', 'BED-HEL-10', 'simple', 22000000, NULL, 9, 'instock', 4.80, 17, 'Khung giường treo cảm giác bay nhẹ nhàng tích hợp đèn LED hắt gầm.', 'Thiết kế chân ẩn giấu bên trong tạo hiệu ứng thị giác như chiếc giường đang bồng bềnh lơ lửng.', '{"Kích thước đệm": "King Size 180 x 200 cm", "Vật liệu": "Gỗ sồi tự nhiên + LED âm dải 3000K", "Bảo hành": "5 năm"}', 'assets/images/platform-bed.jpg', 'New', 0, 0),
(11, 6, 3, 'Nordic Geometric Ceramic Planter', 'nordic-geometric-ceramic-planter', 'DEC-PLN-11', 'simple', 1200000, NULL, 40, 'instock', 4.50, 42, 'Chậu cây gốm hoa văn hình học tối giản tôn vinh không gian xanh trong nhà.', 'Chậu cây gốm dáng trụ vát cạnh mang nét hiện đại sắc sảo, có lỗ thoát nước và đĩa lót thẩm mỹ.', '{"Đường kính": "25cm, chiều cao 28cm", "Chất liệu": "Gốm nung men mờ Sand White"}', 'assets/images/ceramic-vase.jpg', NULL, 0, 0),
(12, 5, 4, 'Aura Amber Glass Pendant Light', 'aura-amber-glass-pendant-light', 'LGT-AUR-12', 'variable', 3500000, NULL, 25, 'instock', 4.60, 27, 'Đèn thả trần thủy tinh thổi thủ công tạo ánh sáng vàng ấm cúng.', 'Chao thủy tinh màu hổ phách ấm áp khúc xạ ánh sáng huyền ảo cho bàn ăn và đảo bếp.', '{"Dây thả": "Dài tối đa 150cm (tự do tăng giảm độ cao)", "Chao đèn": "Thủy tinh thổi nghệ thuật Ø22cm"}', 'assets/images/brass-lamp.jpg', NULL, 0, 0),
(13, 1, 5, 'Geneva Ergonomic Mesh Office Chair', 'geneva-ergonomic-mesh-office-chair', 'CHR-GNV-13', 'simple', 5800000, 4900000, 22, 'instock', 4.80, 63, 'Ghế công thái học lưới chuẩn quốc tế bảo vệ cột sống tối đa.', 'Ghế văn phòng cao cấp chuẩn BIFMA với tựa lưng 3D điều chỉnh linh hoạt theo cơ thể.', '{"Cơ cấu ngả": "Khóa ngả 3 nấc 90-115-135 độ", "Piston": "Piston thủy lực cấp 4 chứng nhận SGS"}', 'assets/images/accent-chair.jpg', 'Sale', 0, 1),
(14, 2, 2, 'Zurich Extendable Dining Table', 'zurich-extendable-dining-table', 'TBL-ZUR-14', 'variable', 24500000, NULL, 7, 'instock', 4.90, 18, 'Bàn ăn mở rộng thông minh chứa được 6 đến 10 người tiện lợi.', 'Cơ cấu ray trượt nhôm đồng bộ kéo mở nhẹ nhàng chỉ bằng một tay, biến bàn 160cm thành 220cm trong 5 giây.', '{"Kích thước": "160-220 x 90 x 75 cm", "Khung chân": "Gỗ óc chó hoặc sồi hun khói"}', 'assets/images/dining-table.jpg', 'New', 1, 0),
(15, 3, 1, 'Siena Tufted Velvet Ottoman', 'siena-tufted-velvet-ottoman', 'SOFA-SIE-15', 'simple', 4500000, NULL, 16, 'instock', 4.70, 15, 'Đôn ngồi đệm nhung chần nút sang trọng đa năng cho phòng khách.', 'Đôn tròn chần quả trám phong cách quý tộc châu Âu, vừa làm ghế đôn vừa làm bàn phụ thanh lịch.', '{"Kích thước": "Đường kính 60cm, cao 42cm", "Chất liệu": "Nhung Champagne + Khung gỗ dẻ gai"}', 'assets/images/hero-sofa.jpg', NULL, 0, 0),
(16, 3, 1, 'Lille Bouclé Curved Daybed', 'lille-boucle-curved-daybed', 'SOFA-LIL-16', 'simple', 19000000, NULL, 4, 'instock', 4.80, 11, 'Ghế sofa thư giãn uốn cong quyến rũ bọc vải hạt len bouclé.', 'Đường cong mềm mại tựa như điêu khắc nghệ thuật kiến tạo nét chấm phá đắt giá cho phòng ngủ master.', '{"Kích thước": "180 x 85 x 72 cm", "Chất liệu": "Vải sợi xoắn Bouclé Pháp"}', 'assets/images/hero-sofa.jpg', 'Hot', 0, 0),
(17, 5, 4, 'Reykjavik Industrial Desk Lamp', 'reykjavik-industrial-desk-lamp', 'LGT-REY-17', 'simple', 2900000, NULL, 30, 'instock', 4.60, 23, 'Đèn bàn học làm việc phong cách cơ khí công nghiệp hiện đại.', 'Khớp nối đồng linh hoạt chỉnh hướng sáng chuẩn xác cùng chao kim loại sơn tĩnh điện mờ.', '{"Trục xoay": "Xoay 360 độ và gập 180 độ", "Đui đèn": "Chuẩn E14"}', 'assets/images/brass-lamp.jpg', NULL, 0, 0),
(18, 2, 3, 'Tuscany Fluted Marble Side Table', 'tuscany-fluted-marble-side-table', 'TBL-TUS-18', 'sale', 9500000, 6990000, 10, 'instock', 4.90, 34, 'Bàn phụ sofa mặt đá cẩm thạch Ý chân gỗ tiện khía rãnh.', 'Sự kết hợp vương giả giữa đá trắng Calacatta vân xám mây và chân trụ gỗ sồi tự nhiên rãnh sọc roman.', '{"Mặt bàn": "Đá marble tự nhiên chống ố", "Kích thước": "Đường kính 45cm, cao 52cm"}', 'assets/images/dining-table.jpg', 'Sale', 1, 0),
(19, 5, 4, 'Bordeaux Brass Wall Sconce', 'bordeaux-brass-wall-sconce', 'LGT-BDX-19', 'simple', 2100000, NULL, 28, 'instock', 4.70, 19, 'Đèn tường đồng cổ điển chiếu sáng điểm nhấn cầu thang và phòng ngủ.', 'Ánh sáng hắt 2 đầu trên dưới dịu nhẹ tôn lên vẻ đẹp của bề mặt tường vân bê tông hoặc ốp gỗ.', '{"Chất liệu": "100% Đồng thau nguyên khối", "Kích thước": "Cao 32cm, rộng 10cm"}', 'assets/images/brass-lamp.jpg', NULL, 0, 0),
(20, 6, 3, 'Kanso Abstract Arch Mirror', 'kanso-abstract-arch-mirror', 'DEC-KAN-20', 'simple', 4200000, NULL, 12, 'instock', 4.80, 29, 'Gương đứng vòm phong cách tối giản viền nhôm anode chống oxy hóa.', 'Phôi gương Bỉ AGC tráng bạc 8 lớp dày 5mm cho hình ảnh phản chiếu chân thực, mở rộng chiều sâu không gian.', '{"Kích thước": "60 x 160 cm", "Khung": "Hợp kim nhôm Anode vàng champagne"}', 'assets/images/ceramic-vase.jpg', 'Hot', 0, 0);

-- 5. Chèn biến thể cho các sản phẩm Variable (8 sản phẩm biến thể theo canonical dataset)
INSERT INTO `product_variations` (`product_id`, `sku`, `color`, `size`, `regular_price`, `sale_price`, `stock_quantity`, `image_url`) VALUES
-- SP 1: Reddington Modular Sofa (3 màu x 3 size = 9 biến thể mẫu)
(1, 'SOFA-RED-CRM-3S', 'Cream', 'Standard (3-Seater)', 32000000, 28500000, 5, 'assets/images/hero-sofa.jpg'),
(1, 'SOFA-RED-CRM-4S', 'Cream', 'Large (4-Seater)', 36000000, 32500000, 3, 'assets/images/hero-sofa.jpg'),
(1, 'SOFA-RED-CRM-LSP', 'Cream', 'L-Shape Sectional', 42000000, 37500000, 2, 'assets/images/hero-sofa.jpg'),
(1, 'SOFA-RED-CHR-3S', 'Charcoal', 'Standard (3-Seater)', 32000000, 28500000, 4, 'assets/images/hero-sofa.jpg'),
(1, 'SOFA-RED-COG-3S', 'Cognac', 'Standard (3-Seater)', 33000000, 29500000, 1, 'assets/images/hero-sofa.jpg'),

-- SP 2: Aarhus Dining Table (3 màu x 3 size)
(2, 'TBL-AAR-NOK-160', 'Natural Oak', '160x90cm', 16500000, NULL, 4, 'assets/images/dining-table.jpg'),
(2, 'TBL-AAR-NOK-180', 'Natural Oak', '180x90cm', 18500000, NULL, 5, 'assets/images/dining-table.jpg'),
(2, 'TBL-AAR-SOK-180', 'Smoked Oak', '180x90cm', 19500000, NULL, 2, 'assets/images/dining-table.jpg'),
(2, 'TBL-AAR-WAL-210', 'Walnut', '210x100cm', 23000000, NULL, 1, 'assets/images/dining-table.jpg'),

-- SP 3: Bergen Lounge Armchair
(3, 'CHR-BER-CAR-STD', 'Caramel Tan', 'Standard', 12500000, 8900000, 5, 'assets/images/accent-chair.jpg'),
(3, 'CHR-BER-CAR-OTM', 'Caramel Tan', 'With Ottoman', 16500000, 12900000, 3, 'assets/images/accent-chair.jpg'),
(3, 'CHR-BER-ESP-STD', 'Espresso', 'Standard', 12500000, 8900000, 2, 'assets/images/accent-chair.jpg'),

-- SP 4: Koppar Brass Floor Lamp
(4, 'LGT-KOP-BRS-180', 'Brushed Brass', '180cm Height', 6800000, 5440000, 12, 'assets/images/brass-lamp.jpg'),
(4, 'LGT-KOP-BRS-210', 'Brushed Brass', '210cm Height', 7800000, 6240000, 5, 'assets/images/brass-lamp.jpg'),
(4, 'LGT-KOP-BLK-180', 'Matte Black', '180cm Height', 6500000, 5200000, 3, 'assets/images/brass-lamp.jpg'),

-- SP 5: Oslo Platform Bed
(5, 'BED-OSL-BEI-QEN', 'Oatmeal Beige', 'Queen (160x200)', 24000000, NULL, 3, 'assets/images/platform-bed.jpg'),
(5, 'BED-OSL-BEI-KNG', 'Oatmeal Beige', 'King (180x200)', 26000000, NULL, 2, 'assets/images/platform-bed.jpg'),
(5, 'BED-OSL-GRY-KNG', 'Slate Grey', 'King (180x200)', 26000000, NULL, 1, 'assets/images/platform-bed.jpg'),

-- SP 7: Stockholm Velvet Chair
(7, 'CHR-STK-EMR-STD', 'Emerald Green', 'Standard', 7200000, 6480000, 8, 'assets/images/accent-chair.jpg'),
(7, 'CHR-STK-BLU-STD', 'Midnight Blue', 'Standard', 7200000, 6480000, 6, 'assets/images/accent-chair.jpg'),

-- SP 9: Copenhagen Leather Sofa
(9, 'SOFA-CPH-COG-220', 'Cognac Brown', '220cm', 38000000, NULL, 3, 'assets/images/hero-sofa.jpg'),
(9, 'SOFA-CPH-BLK-220', 'Black Onyx', '220cm', 38000000, NULL, 2, 'assets/images/hero-sofa.jpg'),

-- SP 12: Aura Amber Glass Lamp
(12, 'LGT-AUR-AMB-SGL', 'Amber Glow', 'Single', 3500000, NULL, 15, 'assets/images/brass-lamp.jpg'),
(12, 'LGT-AUR-AMB-CL3', 'Amber Glow', 'Cluster 3-Drop', 8500000, NULL, 7, 'assets/images/brass-lamp.jpg');

-- 6. Chèn mã giảm giá
INSERT INTO `coupons` (`id`, `code`, `discount_type`, `discount_value`, `min_order_amount`, `max_discount_amount`, `usage_limit`, `times_used`, `is_active`) VALUES
(1, 'WOODLUXE10', 'percentage', 10.00, 5000000.00, 5000000.00, 1000, 12, 1),
(2, 'FREESHIP', 'free_shipping', 0.00, 10000000.00, 0.00, 500, 35, 1);

-- 7. Chèn đơn hàng mẫu hoàn thành (Đơn của Trần Hoàng Nam mua Reddington Sofa)
INSERT INTO `orders` (`id`, `order_code`, `user_id`, `customer_name`, `customer_phone`, `customer_email`, `shipping_address`, `shipping_city`, `payment_method`, `payment_status`, `order_status`, `subtotal`, `discount_amount`, `coupon_code`, `shipping_fee`, `total_amount`, `created_at`) VALUES
(1, 'WLX-20261026-8892', 2, 'Trần Hoàng Nam', '0901 234 567', 'nam.nguyen@woodluxe.vn', 'Penthouse B12, Thảo Điền, Quận 2', 'TP. Hồ Chí Minh', 'COD', 'paid', 'completed', 28500000.00, 0.00, NULL, 0.00, 28500000.00, '2026-10-26 14:30:00');

-- 8. Chi tiết đơn hàng mẫu
INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `variation_id`, `product_name`, `product_sku`, `color`, `size`, `unit_price`, `quantity`, `subtotal`) VALUES
(1, 1, 1, 1, 'Reddington Modular Living Room Sofa', 'SOFA-RED-CRM-3S', 'Cream', 'Standard (3-Seater)', 28500000.00, 1, 28500000.00);

-- 9. Đánh giá sản phẩm đã xác thực mua hàng (Verified Purchase cho SP 1)
INSERT INTO `reviews` (`id`, `product_id`, `user_id`, `order_id`, `rating_score`, `review_title`, `comment`, `is_verified_purchase`, `status`, `created_at`) VALUES
(1, 1, 2, 1, 5, 'Chất lượng da và nỉ vượt trội so với tầm giá', 'Bộ sofa module Reddington đặt vào phòng khách penthouse tạo hiệu ứng thị giác tuyệt vời. Đệm mút D40 êm ái đàn hồi chuẩn mực, đường may bouclé tinh xảo đến từng milimet.', 1, 'approved', '2026-10-27 10:15:00');

-- 10. Chuyên mục blog
INSERT INTO `blog_categories` (`id`, `name`, `slug`, `description`, `display_order`) VALUES
(1, 'Interior Design', 'interior-design', 'Nghệ thuật bài trí không gian & kiến trúc đương đại', 1),
(2, 'Material & Craft', 'material-craft', 'Bảo tồn chất liệu gỗ tự nhiên & chế tác da thủ công', 2),
(3, 'Smart Living', 'smart-living', 'Giải pháp công thái học & không gian sống thông minh', 3);

-- 11. Chèn 6 bài viết blog từ docs/dataset/blog.csv
INSERT INTO `blog_posts` (`id`, `category_id`, `title`, `slug`, `author`, `summary`, `content`, `image_url`, `reading_time`, `published_date`, `views_count`, `status`) VALUES
(1, 1, 'Nghệ thuật bài trí phòng khách tối giản xu hướng 2026', 'nghe-thuat-bai-tri-phong-khach-2026', 'Elena Vance', 'Khám phá cách phối màu trung tính, bố cục sofa module và luồng sáng tự nhiên để tạo không gian mở đẳng cấp.', 'Nghệ thuật tối giản (Minimalism) trong nội thất hiện đại không đơn thuần là bớt đồ đạc, mà là tinh chọn từng món đồ đạt độ hoàn thiện cao nhất. Khi sắp đặt sofa Reddington tại trung tâm phòng khách, hãy chú ý hướng ánh sáng từ ban công hoặc cửa kính lửng. Kết hợp cùng bàn trà gỗ sồi Malmo tạo nên sự đối thoại cân bằng giữa chất liệu vải dệt mềm mại và vân gỗ tự nhiên mộc mạc.', 'assets/images/hero-sofa.jpg', '5 phút', '2026-10-15', 342, 'published'),
(2, 2, 'Bí quyết chọn bàn ăn gỗ tự nhiên cho căn hộ hiện đại', 'bi-quyet-chon-ban-an-go-tu-nhien', 'Marcus Lindberg', 'Phân biệt giữa gỗ sồi trắng châu Âu, óc chó Bắc Mỹ và cách bảo dưỡng để giữ vân gỗ luôn sáng bóng.', 'Bàn ăn là trái tim của gian bếp ấm cúng. Với dòng bàn Aarhus Scandinavian từ gỗ sồi thịt, bạn sẽ cảm nhận được độ lì đầm và đường vân uốn lượn mềm mại. Lớp sơn dầu gốc thực vật không chứa VOC bảo đảm an toàn thực phẩm cho gia đình có trẻ nhỏ, đồng thời giữ cho bề mặt gỗ thở tự nhiên theo chu kỳ thời tiết 4 mùa tại Việt Nam.', 'assets/images/dining-table.jpg', '7 phút', '2026-10-18', 215, 'published'),
(3, 1, 'Định hình ánh sáng đa tầng: Giải pháp nâng tầm không gian sống', 'dinh-hinh-anh-sang-da-tang-lighting', 'Elena Vance', 'Cách phối hợp giữa ánh sáng chung, ánh sáng tác vụ và đèn điểm nhấn nghệ thuật trong phòng khách.', 'Ánh sáng là linh hồn của thiết kế nội thất. Thay vì chỉ dùng đèn âm trần phẳng tẻ nhạt, một cây đèn vòm cong Koppar bằng đồng thau đặt cạnh góc ghế sofa tạo ra vùng sáng ấm cúng tập trung khi đọc sách ban tối. Khi phối thêm đèn treo chùm thủy tinh hổ phách Aura trên bàn ăn, bạn đã biến ngôi nhà thành một khách sạn boutique sang trọng.', 'assets/images/brass-lamp.jpg', '6 phút', '2026-10-20', 188, 'published'),
(4, 1, 'Japandi & Wabi Sabi: Vẻ đẹp của sự mộc mạc và tĩnh lặng', 'japandi-wabi-sabi-phong-cach-noi-that', 'Kenji Sato', 'Sự giao thoa hoàn mỹ giữa nét thanh lịch của Bắc Âu và triết lý trân quý sự không hoàn hảo từ Nhật Bản.', 'Phong cách Japandi là điểm hẹn giữa sự thực dụng tối giản của Scandinavia và mỹ học Wabi-Sabi tôn vinh thời gian của Nhật Bản. Những chiếc bình gốm thô Kyoto với men mờ tự nhiên mang đến vẻ đẹp điềm đạm. Đặt một nhành bạch đàn hoặc hoa khô đơn độc sẽ khơi gợi cảm giác thanh tịnh bất tận cho góc làm việc của bạn.', 'assets/images/ceramic-vase.jpg', '8 phút', '2026-10-21', 405, 'published'),
(5, 3, 'Tối ưu hóa giấc ngủ với giường ngủ công thái học và nỉ Bouclé', 'toi-uu-giac-ngu-voi-giuong-ngu-boucle', 'Dr. Clara Dupont', 'Cấu trúc khung giường thấp, khả năng thoáng khí và bề mặt vải len hạt nâng niu giấc ngủ sâu.', 'Một phần ba đời người dành cho giấc ngủ. Giường platform Oslo King Bed được tính toán độ cao tiêu chuẩn 35cm từ mặt sàn giúp cơ thể tiếp đất tự nhiên. Lớp đệm bọc vải bouclé dệt mật độ cao chống bám bụi và hỗ trợ lưu thông không khí, giữ nhiệt độ lý tưởng cho phòng ngủ quanh năm.', 'assets/images/platform-bed.jpg', '5 phút', '2026-10-23', 290, 'published'),
(6, 2, 'Hướng dẫn chăm sóc và làm mới nội thất da bò Ý thủ công', 'huong-dan-cham-soc-noi-that-da-bo-y', 'Marcus Lindberg', 'Các bước dưỡng ẩm da, tránh nứt nẻ và làm sạch vết ố cho ghế thư giãn Bergen da thuộc tự nhiên.', 'Da thật là chất liệu có thể "già đi" một cách duyên dáng theo năm tháng (patina). Để giữ cho chiếc ghế Bergen luôn mềm mịn như nhung, hãy lau sạch bằng khăn ẩm vắt kiệt mỗi tuần và thoa sáp dưỡng chiết xuất sáp ong 6 tháng một lần. Tránh đặt da dưới ánh nắng trực tiếp của cửa sổ mà không có rèm che.', 'assets/images/accent-chair.jpg', '4 phút', '2026-10-25', 312, 'published');

-- 12. Danh sách sản phẩm yêu thích mẫu
INSERT INTO `wishlists` (`user_id`, `product_id`) VALUES
(2, 1),
(2, 3),
(3, 5);

-- ============================================================================
-- KẾT THÚC KHỞI TẠO CƠ SỞ DỮ LIỆU WOODLUXE
-- ============================================================================

