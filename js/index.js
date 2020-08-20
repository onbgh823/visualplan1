(function($){

    // $('.tabTit').find('a').on('click', function(){
    //     $()
    // })

    // $('.tabTit a').on('click', function(e){
    //     e.preventDefault()
    //     var index = $(this).parent().index()
    //     $(this).parent().addClass('on')
    //     .siblings().removeClass('on')
    //     $('.tabCont > div')
    //     .eq(index)
    //     // .css({display:"block"})
    //     .fadeIn(100)
    //     .siblings()
    //     // .css({display:"none"})
    //     .fadeOut(100)
    // })

    

    //parents 조상중 누구, parent juste 부모
    // 나를 제외한  나의 나머지 형제를 지목한다 siblings()
    // $(this).parent().addClass('on')
    // $(this).parent().siblings().removeClass('on')
    // $('.tabCont > div').eq(index).css({
    //     display:"block"
    // })
    // $('.tabCont > div').eq(index).siblings().css({
    //     display:"none"
    // })

//each method
    $('.tabTit li').each(function(i){
        $(this).find('a').on('click', function(e){
            e.preventDefault()
            $(this).parent().addClass('on')
            .siblings().removeClass('on')
            $('.tabCont > div').eq(i).fadeIn(100)
            .siblings().fadeOut(100)
        })
    })

})(jQuery)
