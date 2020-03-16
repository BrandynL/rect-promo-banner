<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://brandynlordi.com
 * @since      1.0.0
 *
 * @package    React_Promo_Banner
 * @subpackage React_Promo_Banner/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    React_Promo_Banner
 * @subpackage React_Promo_Banner/includes
 * @author     Brandyn Lordi <brandyn.lordi@gmail.com>
 */
class React_Promo_Banner_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'react-promo-banner',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
