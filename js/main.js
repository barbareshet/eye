(function($){
    // var pageY = pageYOffset;
    // var pageX = pageXOffset;
   
    var $window = $(window);
    var $main = $('#main');
    var eye = $('#eye-in');
    $($main).mousemove(function(event){
        //console.log(event.pageX + " and " + event.pageY)    ;
        var pageY = pageYOffset/10;
        var pageX = pageXOffset/10;
        // console.log(eyeposx);
        $(eye).css({
            'top':event.pageY/10,
            'left': event.pageX/20
        });
    });
    
})(jQuery);