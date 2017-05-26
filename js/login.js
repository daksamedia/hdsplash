/*
Author: Pradeep Khodke
URL: http://www.codingcage.com/
*/

$(document).ready(function()
{ 	
	//$("#slidemenu").load("menu.php");
	var logged_in;
     /* validation */
	 $(".loginform").validate({
      rules:
	  {
			password: {
			required: true,
			},
			email: {
            required: true,
            email: true
            },
	   },
       messages:
	   {
            password:{
                      required: "please enter your password"
                     },
            user_email: "please enter your email address",
       },
	   submitHandler: submitForm	
       });  
	   /* validation */
	   

	  
	   /* login submit */
	  	function submitForm()
		{		
			var data = $(".loginform").serialize();
				
			$.ajax({
				
			type : 'POST',
			//url  : 'engine/login_process.php',
			url  : 'http://haagendazs.echoscript.net/api/auth/login',
			//crossDomain: true,
			//headers: {
             // 'Access-Control-Allow-Origin': '*'
                    //'Content-Type':'application/x-www-form-urlencoded'
          	//},
			data : data,
			//dataType : 'jsonp',
			beforeSend: function()
			{	
				$(".loads").fadeIn();
				$(".loginform").fadeOut();
			},
			success :  function(response)
			   {
			   		var respon = jQuery.parseJSON(response);
					if(respon.is_error===false){
						localStorage.login_hd_id = respon.payload.customer_id;
						$(".loads").html('You are signing in...');
						setTimeout('window.location.href = "home.html"; ',4000);
						localStorage.login_hd="login";
						localStorage.hd_session_key = respon.payload.session_key;
						//alert(respon.payload.session_keys)
						//setTimeout('$(".form-signing").fadeOut(500, function(){ $(".login-info").load("afterlogin.php"); }); ',5000);
						//$(".form-signing").fadeOut();
						//var urlx="afterlogin.php";

						/* $.getJSON(urlx,function(daxa){
						  //console.log(data);
							
							  var newRow =
							  "<div>"
							  +"<p>"+daxa.user_name+"</p>"
							  +"<p><a href='"+daxa.user_email+"'>Visit</a></p>"
							  +"</div>" ;
							  $(newRow).appendTo(".login-info");
							  
							  
							  var gantimenu=
							  "<form class='navbar-form navbar-right' role='form'><h3>Hi, <strong>"+daxa.user_name+"</strong>!</h3>"
								+"</form>"
								+"<!-- START MENU -->  "   
								+"<ul class='nav navbar-nav'>"
								+"<li><a href='index.html'>Home</a></li>"
								+ "<li><a href='choose.html'>Choose Salad</a></li>"
								+ "<li><a href='menu.html'>Order Only</a></li>"
								+ "<li><a href='faq.html'>F.A.Q</a></li>"
								+"<li><a href='about.html'>About Slera</a></li>"
								+ "<li><a href='setting.html'>Setting</a></li>"
								+ "<li><a href='logout.php'>Logout</a></li>"
								+"</ul>";
							
							$("#slidemenu").html(gantimenu);
						 });
						//$("#slidemenu").load("menu.php");
						$(".title-page").html("Welcome!");
						*/
		
					}else{
									
						$(".loads").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+respon.status_msg+' !</div>');
						$(".loginform").fadeIn();
					
					}
			  }
			});
				return false;
		}
	  
});