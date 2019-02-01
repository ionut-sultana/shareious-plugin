<?php // Shareious: Callback functions

// exit if file is called directly
if ( ! defined ( 'ABSPATH') ) {
	exit;
} 


// Shareious: Facebook Application ID: Social Identity tab
function shareious_calback_field_fb_app_id () {
	$options = get_option( 'shareious_options', shareious_options_default() );
	$id = 'fb_app_id'; 
	$value = isset( $options[$id] ) ? sanitize_text_field( $options[$id] ) : '';

	$output = '<div class="input shareious_social_identity_item "><input id="shareious_options_'. $id .'" placeholder="'.esc_html('Example: 152256894321578', 'shareious').'" name="shareious_options['. $id .']" type="text"  size="40" value="'. $value .'"/>';
	$output .= '<label for=shareious_options_'. $id .'"><span>'. esc_html__( 'Facebook App Id', 'shareious') .'</span></label></div>';

	return $output;
}


// Shareious: Twitter username: Social Identity tab
function shareious_calback_field_twitter_username () {

	$options = get_option( 'shareious_options', shareious_options_default() );
	$id = 'twitter_username'; 
	$value = isset( $options[$id] ) ? sanitize_text_field( $options[$id] ) : '';


	$output = '<div class="input shareious_social_identity_item"><input placeholder="'.esc_html('Example: john_doe', 'shareious') .'" id="shareious_options_'. $id .'" name="shareious_options['. $id .']" type="text"  size="40" value="'. $value .'"/>';
	$output .= '<label for="sharerious_options_'. $id .'"><span>'. esc_html__( 'Twitter Username', 'shareious') .'</span></label></div>';

	return $output;
}


// Shareious: Animation Field:  Advanced tab
function shareious_calback_field_mixt_animation () {

	$options = get_option( 'shareious_options', shareious_options_default() );

	$id_entrance = 'custom_entrance_animation';
	$id_exit = 'custom_exit_animation';

	$select_options_entrance = array (

		'bounceinentrance' => ['BounceIn Hover In', 'start'],
		'bounceIn'		=> 'bounceIn',
		'bounceInDown'	=> 'bounceInDown',
		'bounceInLeft'	=> 'bounceInLeft',
		'bounceInRight'	=> 'bounceInRight',
		'bounceInUp'	=> 'bounceInUp',
		'bounceexit'	=> ['Bounce Exit', 'end'],

		'fadeinentrace' => ['FadeIn Hover In', 'start'],
		'fadeIn' => 'fadeIn',
		'fadeInDown' => 'fadeInDown',
		'fadeInDownBig' => 'fadeInDownBig',
		'fadeInLeft' => 'fadeInLeft',
		'fadeInLeftBig' => 'fadeInLeftBig',
		'fadeInRight' => 'fadeInRight',
		'fadeInRightBig' => 'fadeInRightBig',
		'fadeInUp' => 'fadeInUp',
		'fadeInUpBig' =>'fadeInUpBig ',
		'fadeexit' =>['fadeInUpBig ', 'end'],

		'rotatein' => ['RotateIn Hover In', 'start'],
		'rotateIn' => 'rotateIn',
		'rotateInDownLeft' => 'rotateInDownLeft',
		'rotateInDownRight' => 'rotateInDownRight',
		'rotateInUpLeft' => 'rotateInUpLeft',
		'rotateInUpRight' => 'rotateInUpRight',
		'rotateinexit' => ['RotateIn Exit', 'end'],

		'slideInUpentrance' => ['SlideInUp Hover In', 'start'],
		'slideInUp' => 'slideInUp',
		'slideInDown' => 'slideInDown',
		'slideInLeft' => 'slideInLeft',
		'slideInRight' => 'slideInRight',
		'slideinupexit' => ['SlideInUp Exit', 'end'],

		'zoomInentrance' => ['ZoomIn Hover In', 'start'],
		'zoomIn' => 'zoomIn',
		'zoomInDown' => 'zoomInDown',
		'zoomInLeft' => 'zoomInLeft',
		'zoomInRight' => 'zoomInRight',
		'zoomInUp' => 'zoomInUp',
		'zoominexit' => ['ZoomIn Exits', 'end'],

		'flipentrance' => ['Flip Hover In', 'start'],
		'flip' => 'flip',
		'flipInX' => 'flipInX',
		'flipInY' => 'flipInY',
		'flipinexit' => ['FlipIn Exits', 'end'],

		'special' => ['Special Hover In', 'start'],
		'bounce' => 'bounce',
		'flash' => 'flash',
		'pulse' => 'pulse',
		'rubberBand' => 'rubberBand',
		'shake' => 'shake',
		'swing' => 'swing',
		'tada' => 'tada',
		'wobble' => 'wobble',
		'jello' => 'jello', 
		'specialxits' => ['Special Exit', 'end'],

		'lightSpeedInEntrance' => ['lightSpeedIn Hover In', 'start'],
		'lightSpeedIn' => 'lightSpeedIn',
		'lightSpeedInExit' => ['lightSpeedIn Exit', 'end']
		
		 );
	$select_options_exits = array (
	
		'bounceexit' => ["Bouncing Hover Out", 'start'],
		'bounceOut' => 'bounceOut',
		'bounceOutDown' => 'bounceOutDown',
		'bounceOutLeft' => 'bounceOutLeft',
		'bounceOutRight' => 'bounceOutRight',
		'bounceOutUp' => 'bounceOutUp',
		'bounceexitend' => ["Bounce Hover Out", 'end'],

		'fadeeexit' => ["Fading Hover Out", 'start'],
		'fadeOut' => 'fadeOut',
		'fadeOutDown' => 'fadeOutDown',
		'fadeOutDownBig' => 'fadeOutDownBig',
		'fadeOutLeft' => 'fadeOutLeft',
		'fadeOutLeftBig' => 'fadeOutLeftBig',
		'fadeOutRight' => 'fadeOutRight',
		'fadeOutRightBig' => 'fadeOutRightBig',
		'fadeOutUp' => 'fadeOutUp',
		'fadeOutUpBig' => 'fadeOutUpBig',
		'fadeeexitend' => ["Bounce Hover Out", 'end'],
		
		
		'rotatingexit' => ["Rotating Hover Out", 'start'],
		'rotateOut' => 'rotateOut',
		'rotateOutDownLeft' => 'rotateOutDownLeft',
		'rotateOutDownRight' => 'rotateOutDownRight',
		'rotateOutUpLeft' => 'rotateOutUpLeft',
		'rotateOutUpRight' => 'rotateOutUpRight',
		'rotatingexitend' => ["Rotating Hover Out", 'end'],

		'slidingexits' => ["Sliding Hover Out", 'start'],
		'slideOutUp' => 'slideOutUp',
		'slideOutDown' => 'slideOutDown',
		'slideOutLeft' => 'slideOutLeft',
		'slideOutRight' => 'slideOutRight',
		'slidingexitend' => ["Sliding Hover Out", 'end'],

		'zoomexit' => ["Zoom Hover Out", 'start'],
		'zoomOut' => 'zoomOut',
		'zoomOutDown' => 'zoomOutDown',
		'zoomOutLeft' => 'zoomOutLeft',
		'zoomOutRight' => 'zoomOutRight',
		'zoomOutUp' => 'zoomOutUp',
		'zoomexitend' => ["Zoom Hover Out", 'end'],

		'flipersexit' => ["Flippers Hover Out", 'start'],
		'flipOutX' => "flipOutX",
		'flipOutY' => "flipOutY",
		'flipersexitend' => ["Flippers Hover Out", 'end'],

		'lightspeedexit' => ["Lightspeed Hover Out", 'start'],
		'lightSpeedOut' => 'lightSpeedOut',
		'lightspeedexitend' => ["Lightspeed Hover Out", 'end'],

		'rollexit' => ["Roll Hover Out", 'start'],
		'rollOut' => 'rollOut',
		'rollexitend' => ["Roll Hover Out", 'end']

	);
	$output = "<div class='shareious_social_buttons'><span class='live_animation'><b class='fa fa-bolt'></b><b>". esc_html__( "Live Animation", 'shareious' ) ."</b></span></div><br/>";

	$output .= "<div class='clearfix select_holder'><select id='shareious_options_". $id_entrance ."' name='shareious_options[". $id_entrance ."]'>";

		foreach ( $select_options_entrance as $value => $option ) {
			
			$selected = selected( $options[$id_entrance] === $value, true, false );

  				if ( $option[1] === 'start' ) {
  				$output .=  "<optgroup label='". $option[0] ."'>";
  				} else if ( $option[1] === 'end') {
  				$output .=  "</optgroup>";
  				} else {
  				$output .=  "<option value='". $option ."'". $selected .">". $option ."</option>";
  				}
		}

	$output .=  "</select><span>". esc_html__('Animation Hover In', 'shareious') . "</span></div> ";

	$output .= "<div class='clearfix select_holder'><select id='shareious_options_". $id_exit ."' name='shareious_options[". $id_exit ."]'>";

		foreach ( $select_options_exits as $value => $option ) {
			
			$selected = selected( $options[$id_exit] === $value, true, false );

  				if ( $option[1] === 'start' ) {
  				$output .=  "<optgroup label='". $option[0] ."'>";
  				} else if ( $option[1] === 'end') {
  				$output .=  "</optgroup>";
  				} else {
  				$output .=  "<option value='". $option ."'". $selected .">". $option ."</option>";
  				}
		}

	$output .=  "</select><span>". esc_html__('Animation Hover Out', 'shareious') . "</span></div></div> ";
	echo $output;
}

// Sharerious: Drag to share:  Advanced tab
function shareious_calback_drag_to_share () {
	$options = get_option( 'shareious_options', shareious_options_default() );
	$id = 'drag_to_share';
	$drag_check = isset( $options[$id]) ?  $options[$id] : false; 
	$checked = checked( $drag_check , true, false );

	$output = "<hr/><h2>". esc_html__('Sharing modes', "shareious") ."</h2>";
	$output .= "<h3>". esc_html__('Select a sharing mode:', "shareious") ."</h3>";

	$output .= '<div class="custom-input drag_to_share_holder"><input id="shareious_options_'. $id .'" name="shareious_options['. $id .']" type="checkbox"  size="40" value="1"'. $checked .'/><strong></strong><label for="shareious_options_'. $id .'">' . esc_html__('Drag to share', 'shareious') .'</label><div class="explanation">'. esc_html__('This option allows you to share by dragging the social buttons', 'shareious') .'</div></div>';
	echo $output;
}

// Shareious: Special share:  Advanced tab
function shareious_calback_special_share () {

	$options = get_option( 'shareious_options', shareious_options_default() );
	$id = 'special_share';
	$id_color = 'special_share_color';
	$id_check = isset($options[$id]) ? $options[$id] : false; 
	$checked = checked( $id_check , true, false );

	$output = '<hr/><div class="custom-input clearfix special_share_holder"><input id="shareious_options_'. $id .'" name="shareious_options['. $id .']" type="checkbox"  size="40" value="1"'. $checked .'/><strong></strong><label for="shareious_options_'. $id .'">'. esc_html__('Special share', 'shareious' ) . '</label>';

	// Special Share button:  Advanced tab
	$output .= '<div class="shareious_choose_color"><div class="shareious_choose_color_header"><b class="fa fa-eye-dropper"></b><b>'. esc_html__( "Choose color", 'shareious' ) .'</b></div>
		<div class="clearfix"><i class="fa shareioMove fa-share-alt"></i>'
		;

	//ColorPicker for Special Share Button: Advanced tab
	$output .= '<input id="shareious_options_'. $id_color .'" name="shareious_options['. $id_color .']" class="shareiouscolorpicker" value="'.$options[$id_color].'"/></div></div>';

	// Explanation:  More info about the button:  Advanced tab
	$output .= '<div class="explanation">'. esc_html__('This option allows you to share using just a button' , 'shareious' ) . '</div></div>';

	echo $output;
}

// Shareious: Ignore certain images: Advanced tab
function shareious_calback_field_ignore_img () {

	$options = get_option( 'shareious_options', shareious_options_default() );
	$id_width = 'ignoreImg_width'; 
	$id_height = 'ignoreImg_height'; 
	$value_width = isset( $options[$id_width] ) ? sanitize_text_field( $options[$id_width] ) : '';
	$value_height = isset( $options[$id_height] ) ? sanitize_text_field( $options[$id_height] ) : '';
	
	$output = "<hr/><h2>". esc_html__('Ignore images', "shareious") ."</h2>";
	$output .= "<h3>". esc_html__("Don't activate Shareious on certain images:", "shareious") ."</h3>";

	$output .= '<div class="input shareious_ignore_width"><label for="sharerious_options_'. $id_width .'"><span>'. esc_html__( 'If width of image is smaller than: ', 'shareious') .'</span></label><input placeholder="'.esc_html('Example: 200', 'shareious') .'" id="shareious_options_'. $id_width .'" name="shareious_options['. $id_width .']" type="text"  size="40" value="'. $value_width .'"/><span>px</span></div>';


	$output .= '<div class="input shareious_ignore_width"><label for="sharerious_options_'. $id_height .'"><span>'. esc_html__( 'If height of image is smaller than:', 'shareious') .'</span></label><input placeholder="'.esc_html('Example: 200', 'shareious') .'" id="shareious_options_'. $id_height .'" name="shareious_options['. $id_height .']" type="text"  size="40" value="'. $value_height .'"/><span>px</span></div>';


	echo $output;
}



// Shareious: Output networks for:  Networks tab
function shareious_calback_field_networks () {
	$options = get_option( 'shareious_options', shareious_options_default() );
	$id = 'shareious_networks'; 

	//Shareious: Social Networks[11]
		$shareious_selected_socials = array (
			"facebook-f" => "Facebook",
			"google" => "Google+",
			"twitter" => "Twitter",
			"pinterest-p" => "Pinterest",
			"tumblr" => "Tumblr",
			"linkedin-in" => "Linkedin",
			"vk" => "Vk",
			"odnoklassniki" => "Odnoklassniki",
			"reddit-alien" => "Reddit",
			"digg" => "Digg",
			"delicious" => "Delicious"
		);
	

	echo '<div class="shareious-admin-tabs active shareious_network_tabs">
		<h2><'. esc_html__( 'Social Networks', 'shareious' ) . '</h2>
		<h3>' . esc_html__( 'Choose your prefered networks:', 'shareious' ) . '</h3>';
	
	foreach ( $shareious_selected_socials as $value => $option ) {
			
			$network_check = isset( $options[$value]) ?  $options[$value] : false; 
			$verify = checked( $network_check , true, false );
			echo '<div class="shareious-admin_network_tabs_list custom-input"><input id="shareious_options_'. $value .'" name="shareious_options['. $value .']" type="checkbox"  size="40"
			value="1"'. $verify .'/>'; 
			echo '<strong></strong><label for="shareious_options_'. $value .'"><i class="fab fa-'.$value.'"></i><span>'. $option .'</span></label></div>';
		}
	
	echo '</div>';
	
}

// Shareious: Callback function to append content within Social Identity tab
function shareious_calback_field_social_identity() {
		echo '<div class="shareious-admin-tabs shareious_social_identity">
			   <h2>' . esc_html__( 'Social identities', 'shareious' ) .'</h2>
			   <h3>' . esc_html__( 'Please enter your credentials:', 'shareious' ) .'</h3> 
	  			'  .  shareious_calback_field_fb_app_id() .  shareious_calback_field_twitter_username().'
		 </div>';
};

// Shareious: Callback function to append Social Advanced tab content
function shareious_calback_field_social_advanced() {

	 $options = get_option( 'shareious_options', shareious_options_default() );

		echo '<div class="shareious-admin-tabs shareious_social_advanced">
			  <h2>' . esc_html__( 'Advanced', 'shareious' ) .'</h2>
			  <h3>' . esc_html__( 'Advanced settings:', 'shareious' ) .'</h3>';

			  $id = 'advanced_enable_animation';
			  $animation_check = isset( $options[$id]) ?  $options[$id] : false; 
			  $checked = checked( $animation_check , true, false );

			  echo '<div class="advanced_effects"><div class="clearfix custom-input"><input id="shareious_options_'. $id .'" name="shareious_options['. $id .']" type="checkbox" size="40" value="1"'. $checked .'/><strong></strong><label for="shareious_options_'. $id .'">'. esc_html__( 'Enable animation', 'shareious' ) .'</label>';

			  // Shareious: Callback function hover in/out animation feature:  Advanced tab
			  shareious_calback_field_mixt_animation();
			  
			  // Shareious: Callback function for drag to share feature:  Advanced tab
			  shareious_calback_drag_to_share();

			  // Shareious: Callback function for special share feature:  Advanced tab
			  shareious_calback_special_share();

			  // Shareious: Callback function for ignore images feature:  Advanced tab
			  shareious_calback_field_ignore_img();

		 echo '</div></div>';
		  
};

// Shareious: output headers for tabs [ Social Networks, Social Identity, Advanced ]
function shareious_callback_headers() {
	$shareious_header_titles = array (
		"network_tabs" => [esc_html__( "Social Networks", 'shareious' ), 'active'],
		"social_identity" => [esc_html__("Social Identity", 'shareious'), 'inactive'],
		"social_advanced" => [esc_html__("Advanced", 'shareious'), 'inactive']
	);
	echo "<div class='shareious-admin-headers'><ul class='clearfix shareious-admin-headers-list'>";
	foreach ( $shareious_header_titles as $id => $value ) {
			echo '<li class="'.$value[1].'" id="shareious_'. $id .'">'.$value[0].'</li>';
	}
	echo "</ul></div>";
}

// Shareious: add scripts and styles to admin area
function shareious_enqueue_admin_scripts(){
		wp_enqueue_style( 'wp-color-picker' );
		wp_enqueue_script('wp-color-picker');
		wp_enqueue_style( 'admin-style', plugin_dir_url( __FILE__ ) . '../admin/css/shareious-admin.css',  array(), null, 'screen' );
		wp_enqueue_style( 'fontawesome', plugin_dir_url( __FILE__ ) . '../admin/css/fontawesome.css',  array(), null, 'screen' );
		wp_enqueue_script( 'admin-script', plugin_dir_url( __FILE__ ) . '../admin/js/shareious-admin.js', array('jquery', 'wp-color-picker'), null, true );
}
add_action( 'admin_enqueue_scripts', 'shareious_enqueue_admin_scripts' );



	


// Add meta boxes(Deactivate Shareious) to post, pages and other custom post types
function shareious_add_meta_box($post_type){

		add_meta_box( 	'shareious_meta_box',
						esc_html__( 'Deactivate Shareious on this ' . $post_type, 'shareious' ) ,
						'shareious_display_meta_box',
						null
		);
}
add_action( 'add_meta_boxes', 'shareious_add_meta_box', 10, 2 );

function shareious_display_meta_box($post){
	$value = get_post_meta($post->ID, '_shareious_ignore_img_key', true);
	wp_nonce_field( basename( __FILE__ ), 'shareious_meta_box_nonce' );

	$ignore_img_check = isset( $value ) ?  $value : false; 
	$checked = checked( $ignore_img_check , true, false );

	?>
	
	<section class="shareious-admin-tabs shr_mtbx"><div class="custom-input"><input id="shareious_meta_box" name="shareious_meta_box" type="checkbox"  size="40" value="1" <?php echo $checked ?> /><strong></strong><label for="shareious_meta_box"><span> <?php echo esc_html__('Deactivate Shareious?', 'shareious') ?> </span></label></div></section>
	
	<?php 
}

function shareious_save_meta_box( $post_id ){
	$is_autosave = wp_is_post_autosave( $post_id );
	$is_revision = wp_is_post_revision( $post_id );

	$is_valid_nonce = false;

	if ( isset( $_POST['shareious_meta_box_nonce'] ) ) {
		if ( wp_verify_nonce( $_POST['shareious_meta_box_nonce'], basename( __FILE__ ) ) ) {
			$is_valid_nonce = true;
		}
	}

	if ( $is_autosave || $is_revision || !$is_valid_nonce) return;

		update_post_meta(	
			$post_id,	
			'_shareious_ignore_img_key',
			$_POST['shareious_meta_box'] 
		);
}

add_action( "save_post", 'shareious_save_meta_box' );

