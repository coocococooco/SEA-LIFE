$(function(){
    var wd = $(window).width();
    $('.hdr').load('./inc/header.html',function(){
         // 변수 선언
         var hdrWrap = $('.hdrWrap');
         var hdrLi = $('.hdrWrap>header>.nav>li>h4>a');
         var hdrh1 = $('.hdrWrap>header>h1>a');
         var navWrap =$('.navWrap');
         var nav = $('.navGroup>.nav');
         var lightBoxAco = $('.lightBox>.inner>.aco>li');          
         if(wd >= 1024){
            hdrWrap.mousemove(function(){
                hdrWrap.addClass('bg');
                hdrLi.addClass('tgle');
                hdrh1.addClass('on');
                navWrap.addClass('show');
            });
            hdrLi.eq(0).mousemove(function(){
                nav.eq(0).css('display','flex');
                nav.eq(1).css('display','none');
                nav.eq(2).css('display','none');
            });
            hdrLi.eq(1).mousemove(function(){
                nav.eq(1).css('display','flex');
                nav.eq(0).css('display','none');
                nav.eq(2).css('display','none');
            });
            hdrLi.eq(2).mousemove(function(){
                nav.eq(2).css('display','flex');
                nav.eq(0).css('display','none');
                nav.eq(1).css('display','none');
            });
            navWrap.mouseleave(function(){
               hdrWrap.removeClass('bg');
               hdrLi.removeClass('tgle');
               hdrh1.removeClass('on');
               navWrap.removeClass('show');
            });       
            $(window).scroll(function(){
                var scl = $(this).scrollTop();
                if(scl >= 1){
                    hdrWrap.addClass('fix');
                    navWrap.addClass('fix');
                }else{
                    hdrWrap.removeClass('fix');
                    navWrap.removeClass('fix');
                }
            });           
         }else if(wd >= 420 && wd < 1024){
            // 헤더 픽스
            $(window).scroll(function(){
                var scl = $(this).scrollTop();
                if(scl >= 1){
                    hdrWrap.addClass('fix');
                    navWrap.addClass('fix');
                }else{
                    hdrWrap.removeClass('fix');
                    navWrap.removeClass('fix');
                }
             });
             // 라이트박스   
             lightBoxAco.removeClass('acoShow');
             lightBoxAco.even().click(function(){
                 lightBoxAco.removeClass('acoShow');
                 $(this).addClass('acoShow');
             });
         }else{
            // 헤더 픽스
            $(window).scroll(function(){
                var scl = $(this).scrollTop();
                if(scl >= 1){
                    hdrWrap.addClass('fix');
                    navWrap.addClass('fix');
                }else{
                    hdrWrap.removeClass('fix');
                    navWrap.removeClass('fix');
                }
             });
             // 라이트박스  
             lightBoxAco.removeClass('acoShow');
             lightBoxAco.even().click(function(){
                 lightBoxAco.removeClass('acoShow');
                 $(this).addClass('acoShow');
             });
         }
    });
    $('.ftr').load('./inc/footer.html',function(){});
    $('.toTop').load('./inc/toTop.html',function(){
         // 변수 선언 
         var toTop = $('.toTop');
         var toTopBtm = $('.toTop>.btm');
         toTop.fadeOut(0);
         if(wd >= 1024){
             $(window).scroll(function(){
                 var scl = $(this).scrollTop();
                 if(scl >= 450){
                     toTop.fadeIn(300);
                 }else{
                     toTop.fadeOut(300);
                 };
             });
             toTopBtm.click(function(){
                 $('html,body').stop().animate({
                     scrollTop : 0
                 });
             });
         }else{
             toTop.fadeOut(0);
         }
    });      
});