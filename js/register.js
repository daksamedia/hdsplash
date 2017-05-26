// JavaScript Document

$('document').ready(function()
{ 
     /* validation */
	 $(".regisform").validate({
      rules:
	  {
			full_name: {
		    required: true,
			minlength: 3
			},
			username: {
		    required: true,
			minlength: 3
			},
			password: {
			required: true,
			minlength: 8,
			maxlength: 15
			},
			cpassword: {
			required: true,
			equalTo: '#password'
			},
			email: {
            required: true,
            },
            sex: {
            required: true
            },
            phone: {
            required: true
            },
            birthday: {
            required: true
            }
	   },
       messages:
	   {
            full_name: "please enter full name",
            username: "please enter user name",
            password:{
                      required: "please provide a password",
                      minlength: "password at least have 8 characters"
                     },
            email: "please enter a valid email address",
			cpassword:{
						required: "please retype your password",
						equalTo: "password doesn't match !"
					  },
			sex:"please choose your gender",
			phone:"please enter your valid phone number",
			birthday:"please enter your birthday date",
       },
	   submitHandler: submitForm	
       });  
	   /* validation */
	   
	   /* form submit */
	   function submitForm()
	   {		
				var data = $(".regisform").serialize();
				
				$.ajax({
				
				type : 'POST',
				url  : 'http://haagendazs.echoscript.net/api/auth/register',
				data : data,
				beforeSend: function()
				{	
					$(".loads").fadeIn();
					$(".regisform").fadeOut();
					//$("#btn-submit").html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; sending ...');
				},
				success :  function(response)
						   {
						   		var respon = jQuery.parseJSON(response);		
								if(respon.is_error===false){
									alert("You have been successfully registered");

									location.reload();
																				
								}
								/*else if(data=="registered")
								{
									
									$(".loads").html('Success! Please check your mail to validate');
								}*/	
								
								else{
										
									$(".loads").html('<div class="alert alert-danger"><span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+ respon.status_msg +' !</div>');
	
								}
						}
				});
				return false;
		}
	   /* form submit */
	   
	   
	 

});