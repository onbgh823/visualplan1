(function($){
    
$('.depth1 > li').hover(
    function(){
        $(this).find('.depth2').stop().slideDown(700)
    },
    function(){
        $(this).find('.depth2').stop().slideUp(500)
    }
)


})(jQuery)
//에니메이션이 이상하다 css 트랜지션의심해봐야
/* .nav .depth1 > li:hover .depth2 {display: block; } 주석처리해야함              */