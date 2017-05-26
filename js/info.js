$(document).load(function()
{ 	
	
});
$(document).ready(function()
{ 	
	// Get themes
	var sess_key = localStorage.hd_session_key;
	var urly="http://haagendazs.echoscript.net/api/theme?session_key="+ sess_key +"";
	$.getJSON(urly,function(dasa) {
	    //console.log(dasa.id);
	    if(dasa.payload[0]!= undefined){
		    $(".header").css("background",dasa.payload[0].header_bg_color);
		    $(".header").css("color",dasa.payload[0].header_text_color+" !important");
		    $(".header .logo-hd").attr("src",dasa.payload[0].logo_image)
		    $(".nav").css("background",dasa.payload[0].menu_bg_color);
		    $(".nav a").css("color",dasa.payload[0].menu_text_color);
		    $(".nav a, .points_menu").css("color",dasa.payload[0].menu_text_color);
		    $(".mainpage").css("background","-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 59%, rgba(0, 0, 0, 1) 100%), url("+ dasa.payload[0].home_bg_image +") no-repeat center")
			$(".mainpage").css("background-size","cover");
		}
	});	
	'use strict';
	if(localStorage.login_hd=="login"){

	  // Cart Basket
	  var goToCartIcon = function($addTocartBtn){
      var $cartIcon = $(".cart");
      var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
      $addTocartBtn.prepend($image);
      var position = $cartIcon.position();
      $image.animate({
        top: position.top,
        left: position.left+300
      }, 500 , "linear", function() {
        $image.remove();
      });
    }

    $('.addcart').myCart({
      currencySymbol: 'Rp.',
      classCartIcon: 'cart',
      classCartBadge: 'cart-count',
      classProductQuantity: 'cartqty',
      classProductRemove: 'my-product-remove',
      classCheckoutCart: 'my-cart-checkout',
      affixCartIcon: true,
      showCheckoutModal: true,
      
      clickOnAddToCart: function($addTocart){
        goToCartIcon($addTocart);
      },
      clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
        console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
      },
      checkoutCart: function(products, totalPrice, totalQuantity) {
        var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
        checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
        $.each(products, function(){
          checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
        });
        alert(checkoutString)
        console.log("checking out", products, totalPrice, totalQuantity);
      }
    });

    //LOGOUT INFO
    $("body").append('<div class="modal fade" id="logout-info" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">'+
	  '<div class="modal-dialog" role="document">'+
	    '<div class="modal-content">'+
	     ' <div class="modal-header">'+
	       ' <img src="img/modal-info.png" width="60" />'+
	        '<h3 class="modal-title" id="exampleModalLongTitle">Thank You</h3>'+
	       ' <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
	         ' <span aria-hidden="true">&times;</span>'+
	        '</button>-->	'+
	     '</div>'+
	      '<div class="modal-body">'+
	      	'<p>You has successfully logged out.</p>'+
	      '</div>'+
	      '<div class="clearfix"></div>'+
	      '<div class="modal-footer">'+
	        '<button type="button" class="col-xs-12 no-padding" data-dismiss="modal">Close</button>'+
	      '</div>'+
	    '</div>'+
	  '</div>'+
	'</div>');

		// Show All Components
		$(".ssm-toggle-nav .burger").fadeIn("fast");
		$(".header .title").fadeIn("slow");
		$(".header .cart").show("fast");
		$("img").css("background","none");
		$('.nav').slideAndSwipe();
		$(".loading").fadeOut( 300 );
		$(".mainpage, .shoppage, .newspage, .slidernews" ).fadeIn( 300 );
		$(".nav").fadeIn( 300 );

		

		//Set Language for Menu
		if(localStorage.hd_lang==="IDN"){
			$(".menu-hom p").html("Beranda");
			$(".menu-cat p").html("Katalog");
			$(".menu-gam p").html("Permainan");
			$(".menu-dir p").html("Daftar Gerai");
			$(".menu-ner p").html("Sekitarku &trade;");
			$(".menu-nws p").html("Berita & Promo");
			$(".logout").html("Keluar");
			$(".menu-set p").html("Pengaturan");
			/* $(".footer-nav span").each(function(index,value){
				$(this[0]).html("Syarat & Ketentuan");
				$(this[1]).html("xs");
				$(".footer-nav span").html("Syarat & Ketentuan");
				$(".footer-nav span").html("Syarat & Ketentuan");
			})*/
			
		}else{

			$(".menu-nws p").html("News & Promo");
		}
			
		// Logout
		$(".logout").click(function(){

				localStorage.login_hd="out";
				localStorage.hd_session_key="";
				$("#logout-info").modal("show");
				setTimeout(loggingout,300);
				var cabut ="https://haagendazs.echoscript.net/api/logout?session_key="+ sess_key +"";
				$.getJSON(cabut,function(data){
					if(data.is_error===false){
						//alert("Thank you for using Häagen Dazs Apps. We're happy for having you.");
						
						setTimeout(loggingout,300);
					}
				})
				
		});
		
		// Transition logout
		function loggingout(){
			$(".transition").slideUp("fast");
			$(".nav").hide();
			$(".logo-hd").fadeOut("fast")
			//$(".header").slideUp("fast");
			$("footer").fadeOut("fast");
			$(".ssm-toggle-nav .burger").fadeOut("fast");
			$(".header .title").fadeOut("fast");
			$(".header .cart").hide("fast");
			$("footer").hide();
			$(" .mainpage, .shoppage, .newspage, .slidernews").animate({
				//"marginTop":"-3300px",
				"opacity":"0",
				"left":"-=50px"
			},"fast", function() {
			  	$(".mainpage, .shoppage, .newspage, .slidernews").hide();
			  	//$(".transition").fadeOut( 900 );
			    window.location = "index.html";
			});
		}

		// Transitions
		$(".nav > .main-menu a, .name_menu").click(function(){
			var link = $(this).attr("data-href");
			$(".transition").slideUp("fast");
			$(".nav").hide();
			//$(".header").slideUp("fast");
			$("footer").fadeOut("fast");
			$(".ssm-toggle-nav .burger").fadeOut("fast");
			$(".header .title").fadeOut("fast");
			$(".header .cart").hide("fast");
			$("footer").hide();
			$(" .mainpage, .shoppage, .newspage, .slidernews").animate({
				//"marginTop":"-3300px",
				"opacity":"0",
				"left":"-=50px"
			},"fast", function() {
			  	$(".mainpage, .shoppage, .newspage, .slidernews").hide();
			  	//$(".transition").fadeOut( 900 );
			    window.location = link;
			});
			//window.location = link;
			
		});

		//SWIPE TO OPEN menu
		$.getScript("http://labs.rampinteractive.co.uk/touchSwipe/jquery.touchSwipe.min.js",function(){
			$( "body" ).swipe({
				 swipeRight:function(event, direction, distance, duration, fingerCount) {
				
					 $("a.ssm-toggle-nav").trigger("click");
					 
				 
				 }
			 });
			 
			$( ".ssm-overlay" ).swipe({
				swipeLeft:function(event, direction, distance, duration, fingerCount) {
				
					 $("a.ssm-toggle-nav").trigger("click");
					
				 
				 }
				
				
			});
		})
		
		
		/*

		"is_error": false,
  "status_code": null,
  "status_msg": null,
  "payload": {
    "customer_id": "1",
    "full_name": "Djati Satria Mandala Putera",
    "username": "djati",
    "email": "djati@echoscript.net",
    "biography": "",
    "default_address": "sdagasgasd",
    "default_phone": "3262362623",
    "join_time": "2015-09-18 23:06:40",
    "login_id": null,
    "login_type": "EMAIL",
    "avatar": "http://haagendazs.echoscript.net/cdn/customer/560667727cfea.png",
    "referral_id": null,
    "referral_incentive_used": "0",
    "point_balance": "651",
    "login_status": 1,
    "session_key": "58a07ff0a4b82"
  }

  		*/


		// Get user data
		var sess_key = localStorage.hd_session_key;
		var cust_id = localStorage.login_hd_id;
		var urlx="http://haagendazs.echoscript.net/api/customer?session_key="+ sess_key +"&customer_id="+cust_id+"";
		$.getJSON(urlx,function(daxa){
		if(daxa.is_error!=true){
			$(".name_menu, .username").html(""+daxa.payload[0].username+"");
			if(localStorage.hd_lang==="IDN"){
				$(".welcome").html("Halo, "+daxa.payload[0].full_name+"");
				$(".points_menu").html("Poin kamu : "+daxa.payload[0].point_balance+"");
				$(".userpoints, .poin").html(" "+daxa.payload[0].point_balance+" poin");
			}else{
				$(".welcome").html("Hello, "+daxa.payload[0].full_name+"");
				$(".points_menu").html("Your Points : "+daxa.payload[0].point_balance+"");
				$(".userpoints, .poin").html(" "+daxa.payload[0].point_balance+" points");
			}
			localStorage.hd_address = daxa.payload[0].default_address;
			localStorage.hd_subdist = daxa.payload[0].sub_district_id;
			localStorage.hd_name = daxa.payload[0].username;
			localStorage.hd_contact = ""+daxa.payload[0].default_phone+" / "+ daxa.payload[0].email+"";
			var pictprof = daxa.payload[0].avatar;
			if(pictprof==null || pictprof=="" || pictprof==undefined){
				//console.log("hahaaha");
				$(".avatar").css("background","url(https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg) white no-repeat center center")
				.css("background-size","100% 97%");			
			}else{
				$(".avatar").css("background","url("+pictprof+") white no-repeat center center").css("background-size","100% 120%");			
			}
			}else{

				localStorage.login_hd="";
	  	alert("Your session is out. Please re-login.");
	  	window.location = "index.html";
			}
		 });

		//LOGOUT

	}else{
		window.location = "index.html";
		
	}

});