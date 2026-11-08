<?php
/**
 * Twenty Twenty-Five Child - WOODLUXE Theme Functions
 *
 * @package TwentyTwentyFiveChild
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Enqueue parent and child stylesheets & typography
 */
function twentytwentyfive_child_enqueue_styles() {
    // Parent theme styles
    wp_enqueue_style(
        'twentytwentyfive-parent-style',
        get_template_directory_uri() . '/style.css',
        array(),
        wp_get_theme()->parent() ? wp_get_theme()->parent()->get('Version') : '1.0.0'
    );

    // Google Fonts: Plus Jakarta Sans
    wp_enqueue_style(
        'woodluxe-google-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );

    // Font Awesome 6 Icons
    wp_enqueue_style(
        'woodluxe-fontawesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        array(),
        '6.5.1'
    );

    // Hugeicons Stroke Rounded
    wp_enqueue_style(
        'woodluxe-hugeicons',
        'https://cdn.hugeicons.com/font/hgi-stroke-rounded.css',
        array(),
        '1.0.0'
    );

    // Child theme stylesheet
    wp_enqueue_style(
        'twentytwentyfive-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('twentytwentyfive-parent-style'),
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'twentytwentyfive_child_enqueue_styles');

/**
 * Declare WooCommerce & HPOS theme support
 */
function twentytwentyfive_child_setup_woocommerce() {
    add_theme_support('woocommerce', array(
        'thumbnail_image_width' => 450,
        'single_image_width'    => 800,
        'product_grid'          => array(
            'default_rows'    => 4,
            'min_rows'        => 2,
            'max_rows'        => 8,
            'default_columns' => 4,
            'min_columns'     => 2,
            'max_columns'     => 4,
        ),
    ));

    // Gallery features
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');
}
add_action('after_setup_theme', 'twentytwentyfive_child_setup_woocommerce');

/**
 * Declare High-Performance Order Storage (HPOS) Compatibility
 */
add_action('before_woocommerce_init', function() {
    if (class_exists(\Automattic\WooCommerce\Utilities\FeaturesUtil::class)) {
        \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility('custom_order_tables', __FILE__, true);
        \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility('cart_checkout_blocks', __FILE__, true);
    }
});

/**
 * Filter currency symbol display for VNĐ
 */
function woodluxe_currency_symbol($currency_symbol, $currency) {
    if ('VND' === $currency) {
        return '₫';
    }
    return $currency_symbol;
}
add_filter('woocommerce_currency_symbol', 'woodluxe_currency_symbol', 10, 2);
