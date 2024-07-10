<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/assets/css/style.css', array('parent-style'));
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/assets/js/script.js', array('jquery'), null, true);
    wp_localize_script('custom-script', 'themeVars', array('templateDirectoryUri' => get_template_directory_uri(),));
    wp_enqueue_style('swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
    wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), null, true);
}

function add_custom_css() {
    $custom_css = "
    .banner {
        background-image: url('" . get_template_directory_uri() . "/assets/images/banner-back.png');
    }
    @media (max-width: 768px) {
        .banner {
            background-image: url('" . get_template_directory_uri() . "/assets/images/banner-back.png');
        }
    }";
    wp_add_inline_style('main-styles', $custom_css);
}
add_action('wp_enqueue_scripts', 'add_custom_css');


// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}