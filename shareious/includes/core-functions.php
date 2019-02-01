<?php //Shareious - Core Functionality: Public

// exit if file is called directly
if ( ! defined ( 'ABSPATH') ) {
	exit;
} 

// Shareious: Enqueue public styles
function shareious_enqueue_public_styles(){
	wp_enqueue_style( 'public-style-shareious', plugin_dir_url( __FILE__ ) . '../public/css/shareious.css',  array(), null, 'screen' );	
}

// Shareious: Enqueue public scripts
function shareious_enqueue_public_scripts(){
		wp_enqueue_script( 'public-script-jquery-ui', plugin_dir_url( __FILE__ ) . '../public/js/jquery-ui.min.js', array('jquery'), null, false );

		wp_enqueue_script( 'public-script-shareious', plugin_dir_url( __FILE__ ) . '../public/js/shareious.js', array('jquery'), null, false );
}


// Shareious: Print shareious plugin options used be /public/js/shareious.js
function shareious_print_shareious_options(){
	$options = get_option( 'shareious_options', shareious_options_default() );
	$shareious_click = true;
	$shareious_ignore_img_width = isset($options['ignoreImg_width']) ? $options['ignoreImg_width'] : '200';
	$shareious_ignore_img_height = isset($options['ignoreImg_height']) ? $options['ignoreImg_width'] : '200';
	$shareious_compact 	 = isset($options['special_share']) ? true : 0 ;
	$shareious_compact_color = isset($options['special_share_color'] ) ? $options['special_share_color'] : false;	
	$drag_to_share 		 = isset($options['drag_to_share']) ? true : false;	
	$twitter_username 	 = isset($options['twitter_username']) ? $options['twitter_username'] : ''; 
	$fb_app_id = isset($options['fb_app_id']) ? $options['fb_app_id'] : ''; 
	
	$custom_entrance_animation = $options['custom_entrance_animation'];
	$custom_exit_animation = $options['custom_exit_animation'];

	// noAnimation if animations are disabled from Advanced tab
	if (isset($options['advanced_enable_animation'])){
		$custom_entrance_animation = $options['custom_entrance_animation'];
		$custom_exit_animation = $options['custom_exit_animation'];
	} else {
		$custom_entrance_animation = 'noAnimationIn';
		$custom_exit_animation = 'noAnimationOut';
	}
	
	// Disable click if special sharing modes are selected
	if ( ($shareious_compact || $drag_to_share) == true){
		$shareious_click  = 0;
	};
	
	// If special mode "drag to share" is ON then disable the other 2 sharing modes
	if( $drag_to_share == true){
		$shareious_compact = 0;
		$shareious_click = 0;
	} 
	
	if (($options['ignoreImg_width'])  == null) {  $shareious_ignore_img_width = '200'; };
	if (($options['ignoreImg_height']) == null) { $shareious_ignore_img_height = '200'; }

	// Prefered Networks array
	$shareious_selected_socials = array (

			"facebook-f"   => array(
				"facebook-f" => "facebook" ,
			),
			"google"   => array(
				"google" => "google" ,
			),
			"twitter"   => array(
				"twitter" => "twitter" ,
			),
			"pinterest-p"   => array(
				"pinterest-p" => "pinterest" ,
			),
			"tumblr"   => array(
				"tumblr" => "tumblr" ,
			),
			"linkedin-in"   => array(
				"linkedin-in" => "linkedin" ,
			),
			"vk"   => array(
				"vk" => "vk" ,
			),
			"odnoklassniki"   => array(
				"odnoklassniki" => "odnoklassniki" ,
			),
			"reddit-alien"   => array(
				"reddit-alien" => "reddit" ,
			),
			"digg"   => array(
				"digg" => "digg " ,
			),
			"delicious"   => array(
				"delicious" => "delicious " ,
			)

	);
	
	// Start printing shareious options for /public/js/shareious.js
	$output = '<script id="shareious-script-init" type="text/javascript" >
	(function($){
	$("img").initialize(function() { 	
	$(this).shareious({';
	$output .= '  socials: { '; 
	foreach ( $shareious_selected_socials as $value => $option ) {
		
			$verify =  isset($options[$value]) ? true : 0 ;
			$output .= $option[$value] . ':' . $verify . ',' ; 	
		
	}

	$output .='  },';
	$output .=	'click:'. $shareious_click .',';
	$output .= 'username:"'. $twitter_username. '",';
	$output .= 'effect:{ in:';
	$output .= '"'.$custom_entrance_animation. '", out:"'. $custom_exit_animation .'"},' ;
	$output .= 'shareiousCompact:' . $shareious_compact . ',';
	$output .= 'shareCompactColor:"' . $shareious_compact_color . '",';
	$output .= 'fb_app:"' . $fb_app_id . '",';
	$output .= 'ignoreImg: {img:".noShareious",smallerThanWidth:' . $shareious_ignore_img_width . ', smallerThanHeight:' . $shareious_ignore_img_height . '
      },';
	$output .=	'}); });})(jQuery);</script>';
	echo $output;
}

// Activate Shareious based on condition from post/pages/custom posts
function shareious_activate(){

	if ( is_single() || is_page() ){
		global $wp_query;
		$post = $wp_query->post;

		if ( $post !== null ) {
				$ignore_img = get_post_meta( $post->ID, '_shareious_ignore_img_key', TRUE );

			// If checkbox isn't checked
			if ( $ignore_img == NULL ){
				add_action( 'wp_enqueue_scripts', 'shareious_enqueue_public_styles'); 
				add_action( 'wp_footer', 'shareious_enqueue_public_scripts' ); 
				add_action( 'wp_footer', 'shareious_print_shareious_options', 200); 
			} else {
				// Don't to anything, don't activate Shareious
			} 
		}
	}
}

add_action( 'wp', 'shareious_activate'); 


//  Shareious: load text domain - translate plugin
function shareious_load_textdomain(){
	load_plugin_textdomain( 'shareious', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}
add_action( 'plugins-loaded', 'shareious_load_textdomain' );