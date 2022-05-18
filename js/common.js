$(function(){
    $('.hdr').load('./inc/header.html',function(){
         // 변수 선언
         var mnTopWrap = $('.mnTopWrap');
         var mnTop = $('.mnTop');
         var hdrWrap = $('.hdrWrap');
         var hdr = $('.hdrWrap>header');
         var hdrLi = $('.hdrWrap>header>.nav>li>h4');
         var hdrh1 = $('.hdrWrap>header>h1');
         var navWrap =$('.navWrap');
         var nav = $('.navGroup>.nav');
         var mainWrap = $('.mainWrap');
            
         hdrWrap.hover(function(){
             hdrLi.addClass('tgle');
             mnTopWrap.addClass('bg');
             mnTop.addClass('on');
             hdrWrap.addClass('bg');
             hdrh1.addClass('on');
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
                     var now = $(this).scrollTop();
                     if(now >= 1){
                         mnTopWrap.addClass('fix');
                         hdrWrap.addClass('fix');
                         navWrap.addClass('fix');
                     }else{
                         mnTopWrap.removeClass('fix');
                         hdrWrap.removeClass('fix');
                         navWrap.removeClass('fix');
                     }
                 });
           });
       
});