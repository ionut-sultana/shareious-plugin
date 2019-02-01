<?php
/*
Plugin Name:	Shareious
Description:	Share you images in a simple and unique way with fancy animations. Drag or click the social buttons to share
Plugin URI: 	https://sultanaionut.com/shareious
Author: 		  Sultana Ionut
Version:      1.0
Text Domain:	shareious
Domain Path:	/languages
License:      GPL v2 or later
License URI:	https://www.gnu.org/licenses/gpl-2.0.txt

*/ 

// exit if file is called directly
if ( ! defined ( 'ABSPATH') ) {
	exit;
}

//Shareious: include dependencies: admin
if( is_admin() ){

	require_once plugin_dir_path( __FILE__ ) . 'admin/admin-menu.php';
    require_once plugin_dir_path( __FILE__ ) . 'admin/settings-page.php';
	require_once plugin_dir_path( __FILE__ ) . 'admin/settings-register.php';
	require_once plugin_dir_path( __FILE__ ) . 'admin/settings-callbacks.php';
	require_once plugin_dir_path( __FILE__ ) . 'admin/settings-validate.php';

}

// Shareious: includes dependencies: admin and public
require_once plugin_dir_path( __FILE__ ) . 'includes/core-functions.php';


// Shareious: default plugin options: this options will be used 
// if no other options are provided 
function shareious_options_default(){
	return array(
    'custom_fb_app_id' => "custom_fb_app_id",
    'custom_entrance_animation' => 'noAnimationIn',
    'custom_exit_animation' => 'noAnimationOut',
    'advanced_enable_animation' => false,
    'facebook-f' => true,
    'twitter' => true,
    'google' => true,
    'pinterest-p' => true,
    'linkedin-in' => false,
    'vk' => false,
    'odnoklassniki' => false,
    'reddit-alien' => false,
    'digg' => false,
    'delicious' => false,
    'special_share_color' => '#0085cc',
    'ignore_img_width' => '200',
    'ignore_img_height' => '200'
	);
}
?>