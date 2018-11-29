$(document).ready(function(){
    // $(window).on('scroll',function(){
    //     var positionTop = $(window).scrollTop();
    //     console.log(positionTop);
    // })
    $('.main-panel').on('scroll',function(){
        var positionTop = $(".main-panel").scrollTop();
        console.log(positionTop);
        // if( positionTop>0 && positionTop<300){
        //     $('.cardPtit').addClass('animated rotateInDownRight');
        //     $('.cardCyber').addClass('animated rotateInDownLeft');
        // }
        if(positionTop >200){
            $('.project1').addClass('animated slideInLeft');
            $('.project2').addClass('animated slideInUp');
            $('.project3').addClass('animated slideInRight');
        }
        // if(positionTop < 400){
        //     $('.cardContact').addClass('animated slideInDown');
        // }
        if(positionTop >= 400){
            $('.cardMap').addClass('animated slideInUp');
        }
        // $('.cardAvatar').addClass('animated slideInRight');
    })
    // $('.content').css({
    //     'background':'green'
    // })
})