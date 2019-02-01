<?php //Shareious: Uninstall feature via the Plugins Screen

//exit if uninstall constant is not defined 
if( ! defined( 'WP_UNINSTALL_PLUGIN' ) ){
	exit;
} 

//  Shareious: delete the plugin options
delete_option( 'shareious_options');