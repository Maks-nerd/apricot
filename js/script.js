$(document).ready(function() {


  jQuery.validator.addMethod("defaultInvalid", function(value, element) {
    return !(element.value == element.defaultValue);
  });

  jQuery('.form1').validate({
    rules: {
      name: {
        required:true,
        defaultInvalid: true,
        minlength:1
      },
      phone: {
        required:true,
        defaultInvalid: true,
        minlength:1
      }
    },
    submitHandler: function(form) {
      jQuery.ajax({
        type: "POST",
        url: jQuery(form).attr('action'),
               data: jQuery(form).serialize(), // serializes the form's elements.
               success: function(data) {

                console.log(data);

                if(data == 'Спасибо за заявку!') {

                  form.reset();
                  //thanks();
                }
               }
            });
      return false;
    }
  });

   jQuery('.form').validate({
    rules: {
      name: {
        required:true,
        defaultInvalid: true,
        minlength:1
      },
      phone: {
        required:true,
        defaultInvalid: true,
        minlength:1
      },
      email: {
        required:true,
        defaultInvalid: true,
        minlength:1
      },
      subject: {
        required:true,
        defaultInvalid: true,
        minlength:1
      }
    },
    submitHandler: function(form) {
      jQuery.ajax({
        type: "POST",
        url: jQuery(form).attr('action'),
               data: jQuery(form).serialize(), // serializes the form's elements.
               success: function(data) {

                console.log(data);

                if(data == 'Спасибо за заявку!') {

                  form.reset();
                  //thanks();
                }
               }
            });
      return false;
    }
  });

 $("#phone").mask("+7(999) 999-99-99");
  $("#phone2").mask("+7(999) 999-99-99");


  jQuery('.lines').click(function(){
    jQuery(".menu2").toggle(500);
});

	// $('.show_more_groups1').click(function(e){
	// 	event.preventDefault();
	// 	jQuery('.page_cont1').show();
	// 	jQuery('.g_right1').css({'height' : 'auto'});
	// 	jQuery(this).hide();
	// 	jQuery('.right_b1').show();
	// });
	// $('.right_b1').click(function(e){
	// 	event.preventDefault();
	// 	jQuery('.page_cont1').hide();
	// 	jQuery('.g_right1').css({'height' : '135px'});
	// 	jQuery(this).hide();
	// 	jQuery('.show_more_groups1').show();
	// });

 //  $('.show_more_groups2').click(function(e){
 //    event.preventDefault();
 //    jQuery('.page_cont2').show();
 //    jQuery('.g_right2').css({'height' : 'auto'});
 //    jQuery(this).hide();
 //    jQuery('.right_b2').show();
 //  });
 //  $('.right_b2').click(function(e){
 //    event.preventDefault();
 //    jQuery('.page_cont2').hide();
 //    jQuery('.g_right2').css({'height' : '135px'});
 //    jQuery(this).hide();
 //    jQuery('.show_more_groups2').show();
 //  });

 //    $('.show_more_groups3').click(function(e){
 //    event.preventDefault();
 //    jQuery('.page_cont3').show();
 //    jQuery('.g_right3').css({'height' : 'auto'});
 //    jQuery(this).hide();
 //    jQuery('.right_b3').show();
 //  });
 //  $('.right_b3').click(function(e){
 //    event.preventDefault();
 //    jQuery('.page_cont3').hide();
 //    jQuery('.g_right3').css({'height' : '135px'});
 //    jQuery(this).hide();
 //    jQuery('.show_more_groups3').show();
 //  });

jQuery('.call').click(function(){
    jQuery('.b-popap').fadeIn(700); return false;
  });
  jQuery('.close').click(function(){
    jQuery('.b-popap').fadeOut(700); return false;
  });
  jQuery('.b-popap').click(function(e){
    if (e.target != this)
      return;
    jQuery(".b-popap").fadeOut(700); return false;
  });

jQuery('.more').click(function(){
  jQuery('.text').show();
  jQuery('.more').hide();
  jQuery('.more1').show();
});
jQuery('.more1').click(function(){
  jQuery('.text').hide();
  jQuery('.more1').hide();
  jQuery('.more').show();
});

jQuery('.more2').click(function(){
  jQuery('.text2').show();
  jQuery('.more2').hide();
  jQuery('.more3').show();
});
jQuery('.more3').click(function(){
  jQuery('.text2').hide();
  jQuery('.more3').hide();
  jQuery('.more2').show();
});

	$('.bxslider').bxSlider({
     	controls: true,
     	pagerCustom: '.bx-pager'
     });
	$('.bxslider2').bxSlider({
		pager:false
		});
	$('.fancybox').fancybox();
	 var $j = jQuery.noConflict();
    var realSlider= $j("ul#bxslider").bxSlider({
      speed:1000,
      pager:false,
      nextText:'',
      prevText:'',
      infiniteLoop:false,
      hideControlOnEnd:true,
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        changeRealThumb(realThumbSlider,newIndex);
        
      }
      
    });

var realSlider3= $j("ul#bxslider3").bxSlider({
      speed:1000,
      pager:false,
      nextText:'',
      prevText:'',
      infiniteLoop:false,
      hideControlOnEnd:true,
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        changeRealThumb(realThumbSlider,newIndex);
        
      }
      
    });
    
    var realThumbSlider3=$j("ul#bxslider-pager3").bxSlider({
      minSlides: 4,
      mode: 'vertical',
      maxSlides: 4,
      slideWidth: 205,
      slideMargin: 3,
      moveSlides: 1,
      pager:false,
      speed:1000,
      infiniteLoop:false,
      hideControlOnEnd:true,
      nextText:'<span></span>',
      prevText:'<span></span>',
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        /*$j("#sliderThumbReal ul .active").removeClass("active");
        $slideElement.addClass("active"); */

      }
    });
    
    linkRealSliders3(realSlider3,realThumbSlider3);
    
    if($j("#bxslider-pager3 li").length<5){
      $j("#bxslider-pager3 .bx-next").hide();
    }


        var realThumbSlider=$j("ul#bxslider-pager").bxSlider({
      minSlides: 4,
      mode: 'vertical',
      maxSlides: 4,
      slideWidth: 205,
      slideMargin: 3,
      moveSlides: 1,
      pager:false,
      speed:1000,
      infiniteLoop:false,
      hideControlOnEnd:true,
      nextText:'<span></span>',
      prevText:'<span></span>',
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        /*$j("#sliderThumbReal ul .active").removeClass("active");
        $slideElement.addClass("active"); */

      }
    });
    
    linkRealSliders(realSlider,realThumbSlider);
    
    if($j("#bxslider-pager li").length<5){
      $j("#bxslider-pager .bx-next").hide();
    }

// sincronizza sliders realizzazioni
function linkRealSliders(bigS,thumbS){
  
  $j("ul#bxslider-pager").on("click","a",function(event){
    event.preventDefault();
    var newIndex=$j(this).parent().attr("data-slideIndex");
        bigS.goToSlide(newIndex);
  });
}

function linkRealSliders2(bigS,thumbS){
  
  $j("ul#bxslider-pager2").on("click","a",function(event){
    event.preventDefault();
    var newIndex=$j(this).parent().attr("data-slideIndex");
        bigS.goToSlide(newIndex);
  });
}

function linkRealSliders3(bigS,thumbS){
  
  $j("ul#bxslider-pager3").on("click","a",function(event){
    event.preventDefault();
    var newIndex=$j(this).parent().attr("data-slideIndex");
        bigS.goToSlide(newIndex);
  });
}

//slider!=$thumbSlider. slider is the realslider
function changeRealThumb(slider,newIndex){
  
  var $thumbS=$j("#bxslider-pager");
  $thumbS.find('.active').removeClass("active");
  $thumbS.find('li[data-slideIndex="'+newIndex+'"]').addClass("active");
  
  if(slider.getSlideCount()-newIndex>=4)slider.goToSlide(newIndex);
  else slider.goToSlide(slider.getSlideCount()-4);

}





var realSlider2= $j("ul#bxslider2").bxSlider({
      speed:1000,
      pager:false,
      nextText:'',
      prevText:'',
      infiniteLoop:false,
      hideControlOnEnd:true,
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        changeRealThumb(realThumbSlider,newIndex);
        
      }
      
    });
    
    var realThumbSlider2=$j("ul#bxslider-pager2").bxSlider({
      minSlides: 4,
      mode: 'vertical',
      maxSlides: 4,
      slideWidth: 205,
      slideMargin: 3,
      moveSlides: 1,
      pager:false,
      speed:1000,
      infiniteLoop:false,
      hideControlOnEnd:true,
      nextText:'<span></span>',
      prevText:'<span></span>',
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        /*$j("#sliderThumbReal ul .active").removeClass("active");
        $slideElement.addClass("active"); */

      }
    });
    
    linkRealSliders2(realSlider2,realThumbSlider2);
    
    if($j("#bxslider-pager2 li").length<5){
      $j("#bxslider-pager2 .bx-next").hide();
    }


   

jQuery('.tabs a').click(function() {



    var tabId = jQuery(this).attr('href');
    jQuery('.tabs a').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.tabs-content > div').hide();
    jQuery(tabId).show();

    return false;

  });
  jQuery('.tabs a').eq(1).click();


});