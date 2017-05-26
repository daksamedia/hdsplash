$(document).ready(function(){
 
 /* Data Insert Starts Here */
 $(document).on('submit', '#emp-SaveForm', function() {
	
    $.post("order.php", $(this).serialize())
        .done(function(data){
   $("#display").fadeOut();
   $("#display").fadeIn('slow', function(){
     $("#display").html('<div class="alert alert-info">'+data+'</div>');
        $("#emp-SaveForm")[0].reset();
       }); 
   });   
      return false;
    });
});