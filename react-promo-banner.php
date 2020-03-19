<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://brandynlordi.com
 * @since             1.0.0
 * @package           React_Promo_Banner
 *
 * @wordpress-plugin
 * Plugin Name:       React Promo Banner
 * Plugin URI:        https://brandynlordi.com/wordpress-plugins/react-promo-banner
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Brandyn Lordi
 * Author URI:        https://brandynlordi.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       react-promo-banner
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define('REACT_PROMO_BANNER_VERSION', '1.0.0');

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-react-promo-banner-activator.php
 */
function activate_react_promo_banner()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-react-promo-banner-activator.php';
	React_Promo_Banner_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-react-promo-banner-deactivator.php
 */
function deactivate_react_promo_banner()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-react-promo-banner-deactivator.php';
	React_Promo_Banner_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_react_promo_banner');
register_deactivation_hook(__FILE__, 'deactivate_react_promo_banner');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-react-promo-banner.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_react_promo_banner()
{

	$plugin = new React_Promo_Banner();
	$plugin->run();
}
run_react_promo_banner();
