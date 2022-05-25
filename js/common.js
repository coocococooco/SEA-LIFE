$(function(){
    var wd = $(window).width();

    $('.hdr').load('./inc/header.html',function(){
         // 변수 선언
         var mnTopWrap = $('.mnTopWrap');
         var mnTop = $('.mnTop');
         var hdrWrap = $('.hdrWrap');
         var hdrLi = $('.hdrWrap>header>.nav>li>h4');
         var hdrh1 = $('.hdrWrap>header>a>h1');
         var navWrap =$('.navWrap');
         var nav = $('.navGroup>.nav');
            
         if(wd >= 1024){
            hdrWrap.hover(function(){
                mnTopWrap.addClass('bg');
                mnTop.addClass('on');
                hdrWrap.addClass('bg');
                hdrh1.addClass('on');
                hdrLi.addClass('tgle');
                navWrap.addClass('show');
            });

            hdrLi.eq(0).hover(function(){
                hdrLi.eq(0).toggleClass('blue');
                nav.eq(0).css('display','flex');
                nav.eq(1).css('display','none');
                nav.eq(2).css('display','none');
            });

            hdrLi.eq(1).hover(function(){
                hdrLi.eq(1).toggleClass('blue');
                nav.eq(1).css('display','flex');
                nav.eq(0).css('display','none');
                nav.eq(2).css('display','none');
            });

            hdrLi.eq(2).hover(function(){
                hdrLi.eq(2).toggleClass('blue');
                nav.eq(2).css('display','flex');
                nav.eq(0).css('display','none');
                nav.eq(1).css('display','none');
            });

            navWrap.mouseleave(function(){
               mnTopWrap.removeClass('bg');
               mnTop.removeClass('on');
               hdrWrap.removeClass('bg');
               hdrh1.removeClass('on');
               hdrLi.removeClass('tgle');
               navWrap.removeClass('show');
            });
         
            $(window).scroll(function(){
                var scl = $(this).scrollTop();
                if(scl >= 1){
                    mnTopWrap.addClass('fix');
                    hdrWrap.addClass('fix');
                    navWrap.addClass('fix');
                }else{
                    mnTopWrap.removeClass('fix');
                    hdrWrap.removeClass('fix');
                    navWrap.removeClass('fix');
                }
            });
            
         }else if(wd >= 420 && wd < 1024){

            // 헤더 픽스

            $(window).scroll(function(){
                var scl = $(this).scrollTop();
                if(scl >= 1){
                    mnTopWrap.addClass('fix');
                    hdrWrap.addClass('fix');
                    navWrap.addClass('fix');
                }else{
                    mnTopWrap.removeClass('fix');
                    hdrWrap.removeClass('fix');
                    navWrap.removeClass('fix');
                }
             });

             // 라이트박스
             lightBoxAco.removeClass('acoShow');

             var lightBoxAco = $('.lightBox>.inner>.aco>li');
     
             lightBoxAco.even().click(function(a){
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
                 if(scl >= 530){
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

              // 라이트박스

              var lightBoxAco = $('.lightBox>.inner>.aco>li');
      
              lightBoxAco.even().click(function(a){
                  lightBoxAco.removeClass('acoShow');
                  $(this).addClass('acoShow');
              });
         }
    });
       
});