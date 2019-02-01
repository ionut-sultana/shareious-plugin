<?php  // Shareious: Register Settings 

// exit if file is called directly
if ( ! defined ( 'ABSPATH') ) {
	exit;
} 

// Shareious: Register Settings 
function shareious_register_settings(){

	// Shareious: Register settings to be used
	register_setting( 'shareious_options', 'shareious_options', 'shareious_callback_validate_options' );

	// Shareious: register "shareious_section_admin" section
	add_settings_section( 'shareious_section_admin',
						 'Customize Shareious Settings',
						 'shareious_callback_section_admin',
						 'shareious' 
						);


	// Shareious: add custom fields to sections
	// Shareious Field: Preferred Social Networks: Networks tab
	add_settings_field(  'custom_networks',
						 'Social Networks',
						 'shareious_calback_field_networks',
						 'shareious',
						 'shareious_section_admin',
						 [ 'id' => "custom_networks", 'label' => "Preferred social networks" ]
						);


		// Shareious Field: Custom Facebook Application ID: Social Identity tab
	add_settings_field(  'custom_fb_app_id', 
						 'Custom Facebook App Id',
						 'shareious_calback_field_fb_app_id',
						 'shareious',
						 'shareious_section_admin',
						 [ 'id' => "custom_fb_app_id", 'label' => "Custom Facebook App Id" ]
						);


	// Shareious Field: Twitter Username: Social Identity tab
	add_settings_field(  'twitter_username', 
						 'Custom Twitter Username',
						 'shareious_calback_field_twitter_username',
						 'shareious',
						 'shareious_section_admin',
						 [ 'id' => "twitter_username", 'label' => "Custom Twitter Username" ]
						);


	// Shareious Field: Custom Entrance for showing the social buttons: Hover in: Advanced tab
	add_settings_field(  'custom_entrance_animation',
						 'Custom Entrance Animation',
						 'shareious_calback_field_entrance_animation',
						 'shareious',
						 'shareious_section_admin',
						 [ 'id' => "custom_entrance_animation", 'label' => "Custom Entrance for showing the social buttons" ]
						);


	// Shareious Field: Custom Exits for hiding the social buttons: Hover out: Advanced tab
	add_settings_field(  'custom_exit_animation',
						 'Custom Entrance Animation',
						 'shareious_calback_field_mixt_animation',
						 'shareious',
						 'shareious_section_admin',
						 [ 'id' => "custom_exit_animation", 'label' => "Custom Exits for hiding the social buttons" ]
						);


	// Shareious Field: Enable or disable animations: Advanced tab
	add_settings_field(  'advanced_enable_animation',
						 'Custom Enable Animation',
						 'shareious_calback_field_social_advanced',
						 'shareious',
						 'shareious_section_admin',
						 [ 'id' => "advanced_enable_animation", 'label' => "Enable animations in Advanced tabs" ]
						);


	// Shareious Field: Drag to share: sharing option: Advanced tab
	add_settings_field(  'drag_to_share',
						 'Drag to share',
						 'shareious_calback_drag_to_share',
						 'shareious',
						 'shareious_section_admin',
						 [ 'id' => "drag_to_share", 'label' => "This option allows you to share by dragging the social buttons" ]
						);


	// Shareious Field: Special share: sharing option: Advanced tab
	add_settings_field(  'special_share',
						 'Special share',
						 'shareious_calback_special_share',
						 'shareious',
						 'shareious_section_admin',
						 [ 'id' => "special_share", 'label' => "This option allows you to share using just a button " ]
						);

	// Shareious Field: Ignore image based on width and height: Advanced tab
	add_settings_field(  'ignore_img_width',
						 'Ignore image height',
						 'shareious_calback_ignore_img',
						 'shareious',
						 'shareious_section_admin',
						 [ 'id' => "ignore_img_width", 'label' => "This option allows you to ignore image based on width and height " ]
						);

	// Shareious Field: Ignore image based on width and height: Advanced tab
	add_settings_field(  'ignore_img_width',
						 'Ignore image width',
						 'shareious_calback_ignore_img',
						 'shareious',
						 'shareious_section_admin',
						 [ 'id' => "ignore_img_width", 'label' => "This option allows you to ignore image based on width and height " ]
						);


}
// Shareious: admin_init fires only in the admin area
add_action( "admin_init", "shareious_register_settings" );