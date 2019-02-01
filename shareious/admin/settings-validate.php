<?php // Shareious: Validate function 


// exit if file is called directly
if ( ! defined ( 'ABSPATH') ) {
	exit;
} 


function shareious_callback_validate_options ($input){

	// Shareious: Prefered Networks: Networks tab
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

	foreach ( $shareious_selected_socials as $network => $value){
	  	if ( isset( $input[$network] ) )  {
			$input[$network] =  ( $input[$network] == 1 ? 1 : 0 );
		}
	}

	//Shareious: Twitter username: Social Identity tab
	if ( isset($input['twitter_username'] ) ) {
		$input['twitter_username'] = sanitize_text_field( $input['twitter_username'] ) ;
	} 

	//Shareious: Facebook Application ID: Social Identity tab
	if ( isset($input['fb_app_id'] ) ) {
		$input['fb_app_id'] = (intval( $input['fb_app_id'] ) ) ? intval( $input['fb_app_id'] ) : ''  ;
	} 

	//Shareious: Ignore Image if Width is smaller than: Advanced tab
	if ( isset($input['ignoreImg_width'] ) ) {
		$input['ignoreImg_width'] = (intval( $input['ignoreImg_width'] ) ) ? intval( $input['ignoreImg_width'] ) : ''  ;
	} 
		//Shareious: Ignore Image if Height is smaller than: Advanced tab
	if ( isset($input['ignoreImg_height'] ) ) {
		$input['ignoreImg_height'] = (intval( $input['ignoreImg_height'] ) ) ? intval( $input['ignoreImg_height'] ) : ''  ;
	} 

	// Shareious: Enable animations: Advanced tab
	if ( isset( $input['advanced_enable_animation'] ) ) {
		$input['advanced_enable_animation'] = ( $input['advanced_enable_animation'] == 1 ? 1 : 0 );
	}

	// Shareious: Drag to share: Advanced tab
	if ( isset( $input['drag_to_share'] ) ) {
		$input['drag_to_share'] = ( $input['drag_to_share'] == 1 ? 1 : 0 );
	}


	// Shareious: Special Share: Advanced tab
	if ( isset( $input['special_share'] ) ) {
		$input['special_share'] = ( $input['special_share'] == 1 ? 1 : 0 );
	}


	// Shareious: Animation Hover In: Advanced tab
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
			'lightSpeedIn' => 'lighSpeedIn',
	 		'lightSpeedInExit' => ['lightSpeedIn Exit', 'end']
		
		 );

	if ( !array_key_exists( $input['custom_entrance_animation'], $select_options_entrance ) ) {
		$input['custom_entrance_animation'] = null;
	}


	// Shareious: Animation Hover Out: Advanced tab
	$select_options_exits = array (
        'flipersexit' => ["Flippers Hover Out", 'start'],
          "flipOutX" => "flipOutX",
          "flipOutY" => "flipOutY",
       'flipersexitend' => ["Flippers Hover Out", 'end'],

        'bounceexit' => ["Bouncing Hover Out", 'start'],
          "bounceOut" => 'bounceOut',
          "bounceOutDown" => 'bounceOutDown',
          "bounceOutLeft" => 'bounceOutLeft',
          "bounceOutRight" => 'bounceOutRight',
          "bounceOutUp" => 'bounceOutUp',
  		'bounceexitend' => ["Bounce Hover Out", 'end'],

        'fadeeexit' => ["Fading Hover Out", 'start'],
          "fadeOut" => 'fadeOut',
          "fadeOutDown" => 'fadeOutDown',
          "fadeOutDownBig" => 'fadeOutDownBig',
          "fadeOutLeft" => 'fadeOutLeft',
          "fadeOutLeftBig" => 'fadeOutLeftBig',
          "fadeOutRight" => 'fadeOutRight',
          "fadeOutRightBig" => 'fadeOutRightBig',
          "fadeOutUp" => 'fadeOutUp',
          "fadeOutUpBig" => 'fadeOutUpBig',
   		'fadeeexitend' => ["Bounce Hover Out", 'end'],


        'lightspeedexit' => ["Lightspeed Hover Out", 'start'],
        "lightSpeedOut" => 'lightSpeedOut',
  		'lightspeedexitend' => ["Lightspeed Hover Out", 'end'],

        'rotatingexit' => ["Rotating Hover Out", 'start'],
          "rotateOut" => 'rotateOut',
          "rotateOutDownLeft" => 'rotateOutDownLeft',
          "rotateOutDownRight" => 'rotateOutDownRight',
          "rotateOutUpLeft" => 'rotateOutUpLeft',
          "rotateOutUpRight" => 'rotateOutUpRight',
  		'rotatingexitend' => ["Rotating Hover Out", 'end'],

        'slidingexits' => ["Sliding Hover Out", 'start'],
          "slideOutUp" => 'slideOutUp',
          "slideOutDown" => 'slideOutDown',
          "slideOutLeft" => 'slideOutLeft',
          "slideOutRight" => 'slideOutRight',
  		'slidingexitend' => ["Sliding Hover Out", 'end'],

                
        'zoomexit' => ["Zoom Hover Out", 'start'],
          "zoomOut" => 'zoomOut',
          "zoomOutDown" => 'zoomOutDown',
          "zoomOutLeft" => 'zoomOutLeft',
          "zoomOutRight" => 'zoomOutRight',
          "zoomOutUp" => 'zoomOutUp',
  		'zoomexitend' => ["Zoom Hover Out", 'end'],


        'rollexit' => ["Roll Hover Out", 'start'],
          "rollOut" => 'rollOut',
  		'rollexitend' => ["Roll Hover Out", 'end']
  	);

  	if ( !array_key_exists( $input['custom_exit_animation'], $select_options_exits ) ) {
		$input['custom_exit_animation'] = null;
	}

	return $input;

}