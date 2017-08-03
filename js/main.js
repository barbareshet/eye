(function($){
    var pageY = pageYOffset;
    var pageX = pageXOffset;
   
    var $window = $(window);
    var $main = $('#main');
    $($main).mousemove(function(event){
        console.log(pageX + " and " + pageY)    ;
    });
    
})(jQuery);