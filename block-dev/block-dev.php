<?php
/**
 * Plugin Name:       Block Dev
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-dev
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_block_dev_block_init() {
	register_block_type( __DIR__ . '/build' );

	if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }

    register_block_type( 'my-custom-blocks/about', array(
        'editor_script' => 'my-custom-blocks-js',
        'editor_style'  => 'my-custom-blocks-editor-style',
        'style'         => 'my-custom-blocks-style',
    ) );
}
add_action( 'init', 'create_block_block_dev_block_init' );

// Enqueue Block Editor Assets
add_action( 'enqueue_block_editor_assets', 'my_custom_block_enqueue_assets' );
function my_custom_block_enqueue_assets() {
    wp_enqueue_script(
        'my-custom-blocks-js',
        plugins_url( '/blocks/about/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-editor', 'wp-components' ),
        null,
        true
    );

    wp_enqueue_style(
        'my-custom-blocks-editor-style',
        plugins_url( '/blocks/about/editor.css', __FILE__ ),
        array(),
        null
    );

    wp_enqueue_style(
        'my-custom-blocks-style',
        plugins_url( '/blocks/about/style.css', __FILE__ ),
        array(),
        null
    );
}