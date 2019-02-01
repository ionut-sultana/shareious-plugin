( function( $ ) {

	//---------------------------------------------------------
	// 	Append social items
	//---------------------------------------------------------
	function shr_add_social_icons(arg){
	
	//---------------------------------------------------------
	// 	Remove social items
	//---------------------------------------------------------
	$('.shareious_social_buttons i').remove();

	//---------------------------------------------------------
	// 	Gather social icons(from Networks) and append them to Advanced tab
	//---------------------------------------------------------
	$('.shareious_network_tabs .custom-input').each(function(i, el){

		if ( $(el).find('input').attr('checked') == 'checked' ){
			var id = $(el).find('input').nextAll('label').find('i').attr('class');
			$('.shareious_social_buttons').append('<i class="'+ id +'"/>');
		}
	});	
	}


	//---------------------------------------------------------
	// 	Header tabs functionality 
	//---------------------------------------------------------
	$('.shareious-admin-headers-list li').on('click', function() {
		$('.shareious-admin-headers-list li').removeClass('active');
		var clicked_attr = $(this).attr('id');
		$(this).addClass('active');
		$('.shareious-admin-tabs').hide().removeClass('active');
		$('.' + clicked_attr).show().addClass('active');

		//---------------------------------------------------------
		// 	Append social items -> Advanced tab
		//---------------------------------------------------------
		shr_add_social_icons();

		//------------------------------------------------------------------------------------------------------------------
		// 	Only one option activation (Drag to share || Special Share) -> Advanced tab
		//------------------------------------------------------------------------------------------------------------------

		$('.special_share_holder input, .drag_to_share_holder input').on('click', function(){
			if( $(this).attr('checked') == "checked" ) {
				$(this).parent().nextAll('.special_share_holder').find('input').attr('checked', false);
				$(this).parent().prevAll('.drag_to_share_holder').find('input').attr('checked', false);
			}
		});

	 
	});

 
	//---------------------------------------------------------
	// 	Animate social buttons on -> Advanced tab
	//---------------------------------------------------------
	var shr_social_btns =  [];
	$('[id *= "shareious_options_custom_"]').on('change', function(){
		
		shr_add_social_icons();

		var effectIn = $(this).find('option:selected');
		var s_class = $(effectIn).attr('value');
		$('.shareious_social_buttons i').addClass(s_class + ' animated');
		setTimeout(function(){
			$('.shareious_social_buttons i').removeClass('animated');
		}, 1000)
	});

	//---------------------------------------------------------
	// 	// Get the defaultColor for special share button 
	//---------------------------------------------------------
	$('.shareious-admin i.fa.fa-share-alt').css('background', $('.shareiouscolorpicker').attr('value'));


	//---------------------------------------------------------
	// 	// Initiate color picker for -> Advanced tab
	//---------------------------------------------------------
	$('.shareiouscolorpicker').wpColorPicker(
	{
		defaultColor: '#0085cc',
	    change: function (event, ui) {

			var val = $('.shareiouscolorpicker').wpColorPicker('color');
			$('.shareious-admin i.fa.fa-share-alt').css('background', val);
			$('.shareiouscolorpicker').attr('value', val);
	   }
	}
	);

})( jQuery );

