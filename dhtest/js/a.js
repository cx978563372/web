
       
    $('.img').hover(function() {
        $('.img-content',this).stop().animate({"top": "120px" ,"opacity": "1"});
    },function(){
        $('.img-content',this).stop().animate({"top": "250px" ,"opacity": "0"});
    });


    $('.ewm').hover(function() {
            $('#ewmimg',this).stop().animate({"top": "40px" ,"left": "-50px","height": "126px","width": "126px","opacity": "1"});
        },function(){
            $('#ewmimg',this).stop().animate({"top": "5px" ,"left": "2px","height": "20px","width": "20px","opacity": "0"});
        }
        
  );
   
