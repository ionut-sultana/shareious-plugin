<?php // Shareious: Admin Menu

// exit if file is called directly
if ( ! defined ( 'ABSPATH') ) {
	exit;
} 


// Shareious: Adding the menu for the plugin
function shareious_add_top_level_menu(){
	add_menu_page( 'Shareious Image Sharing',
				   'Shareious',
				   'manage_options',
				   'shareious',
				   'shareious_display_settings_page',
				   plugins_url( 'shareious/admin/img/icon.svg' )
	);
}
add_action('admin_menu', 'shareious_add_top_level_menu');