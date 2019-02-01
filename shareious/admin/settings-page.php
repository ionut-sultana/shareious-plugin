<?php // Shareious: Display settings

// exit if file is called directly
if ( ! defined ( 'ABSPATH') ) {
	exit;
} 
 
// Shareious: Display settings
function shareious_display_settings_page() {

	// Output this setting only if the user can Manage Options
	if ( !current_user_can( 'manage_options' ) ) return;

	echo '<div class="shareious-admin">
			<div class="shareious-admin-wrap">
			<h1 class="shareious-admin-title"><img class="shareious-admin-title-logo" src="'. plugin_dir_url( __FILE__ ) . '../admin/img/shareious-white.png' .'"><span>' . esc_html( get_admin_page_title() ) . '</span></h1>
			<form action="options.php" method="post">';

				// output security fields
				settings_fields( 'shareious_options' );

 				// output callbacks for [Header, Networks, Social Identity and Advanced tab]
				shareious_callback_headers();
				shareious_calback_field_networks();
				shareious_calback_field_social_identity();
				shareious_calback_field_social_advanced();

				//Save Changes button
				submit_button();

				 
	echo	'</form></div></div>';
	
}