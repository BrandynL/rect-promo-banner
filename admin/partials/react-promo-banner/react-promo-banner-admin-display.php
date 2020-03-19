<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://brandynlordi.com
 * @since      1.0.0
 *
 * @package    React_Promo_Banner
 * @subpackage React_Promo_Banner/admin/partials
 */

require 'react-wp-scripts.php';
\ReactWPScripts\enqueue_assets(plugin_dir_path(__FILE__), [
	'base_url' => plugin_dir_url(__FILE__)
]);
include(plugin_dir_path(__FILE__) . '/build/index.html');
