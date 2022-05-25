$(function(){
    // 메인
    var slideGroup = $('.slideGroup');
    var mainbtn = $('.mainWrap>main>.texts>.btns>i');
    var wd = $(window).width();
    function left(){
        slideGroup.find('.image:last').fadeOut(700,function(){
            $(this).prependTo(slideGroup);
            $(this).fadeIn(0);
        });
    }
    var auto = setInterval(left,3000);

    // 컨텐츠 01
    var loc = [];
    for( var i = 0; i < $('body>div').length; i++){
        loc[i] = $('body>div').eq(i).offset().top;
    }

    // 컨텐츠 02
    var pagingLi = $('.content.cnt02 .imgView>.paging>li');
    var imgGroup = $('.content.cnt02 .imgView>.imgGroup');
    var txtGroup = $('.content.cnt02 .imgView>.txtGroup');
    var imgGroupLen = imgGroup.children().length;
    var i = 0;

    // 컨텐츠 02 artTop
    function cnt02Left(){
        i++;
        i = i%imgGroupLen;

        imgGroup.css({
            marginLeft : i * -100+'%'
        });
        pagingLi.removeClass('pag');
        pagingLi.eq(i).addClass('pag');

        txtGroup.css({
            marginLeft : i * -100+'%'
        })
    }

    function pag(){
        var ind = $(this).index();
        pagingLi.removeClass('pag');
        $(this).addClass('pag');

        imgGroup.css({
            marginLeft : ind *-100+'%'
        });

        i=ind;

        txtGroup.css({
            marginLeft : i * -100+'%'
        })
    }

    // 컨텐츠 02 artBtm
    var artBtmh3 = $('.content.cnt02 section>.artBtm>.artView>.artGroup>article>h3');
    var artBtmart = $('.content.cnt02 section>.artBtm>.artView>.artGroup>article');
    var artBtmimg = $('.content.cnt02 section>.artBtm>.artView>.artGroup>article>.image');

    // 컨텐츠 03
    var cnt03TopArtGroup = $('.content.cnt03>section>.artTop>.artGroup');
    var cnt03TopBtn = $('.content.cnt03>section>.artTop>.btns>i');
    var cnt03BtmArt = $('.content.cnt03>section>.artBtm>.inner>article');

    // 배너
    var ovrGrid = $('.bnrWrap>.ovrGrid');
    var bnrImg = $('.bnrWrap>.banner>.imgGroup>.image');



if(wd >= 420 && wd < 1024){
         
    // 메인

    clearInterval(auto);
    
    // 컨텐츠 01

      $(window).scroll(function(){
          var scl = $(this).scrollTop();
  
          if(scl >= 350){
              $('.content.cnt01>section>article>.image').css({
                  opacity : 1,
                  transform : 'translateX(0px)'
              })
              $('.content.cnt01>section>article>.texts').css({
                  opacity : 1,
                  transform : 'translateY(0px)'
              })
          }else if(scl <= 350){
              $('.content.cnt01>section>article>.image').css({
                  opacity : 0,
              })
              $('.content.cnt01>section>article>.texts').css({
                  opacity : 0,
                  transform : 'translateY(60px)'
              })
          }
      });

     // 컨텐츠 02

         // artTop    
         setInterval(cnt02Left,3000);
     
         pagingLi.click(pag);
     
         // artBtm
         artBtmart.each(function(a){
             artBtmh3.eq(a).hover(function(){
                 artBtmart.eq(a).toggleClass('show');
                 artBtmimg.eq(a).toggleClass('show');
             });
         });
     
         // 배너
             $(window).scroll(function(){
             var scl = $(this).scrollTop();
             if(scl >= 1800){
                 ovrGrid.eq(1).css({
                     opacity : 1,
                     transform : 'translateY(0px)'
                 });
                 bnrImg.eq(0).css({
                     opacity : 1,
                     transform : 'translateY(0px)'
                 });
             }else{
                 ovrGrid.eq(1).css({
                     opacity : 0,
                     transform : 'translateY(30px)'
                 });
                 bnrImg.eq(0).css({
                     opacity : 0,
                     transform : 'translateY(60px)'
                 });
             }
         }); 

     // 컨텐츠 03

        // artTop
        cnt03TopBtn.eq(1).css({
            opacity : 0,
            cursor : 'auto'
        });

        cnt03TopBtn.eq(0).click(function(){
            i++;
            if(i>=1){
                i=1
                cnt03TopBtn.eq(0).css({
                    opacity : 0,
                    cursor : 'auto'
                });
                cnt03TopBtn.eq(1).css({
                    opacity : 1,
                    cursor : 'pointer'
                });
            }
            cnt03TopArtGroup.css({
                marginLeft : i*-(100 / 3)+'%'
            });
        });

        cnt03TopBtn.eq(1).click(function(){
            i--;
            if(i<=0){
                i=0
                cnt03TopBtn.eq(1).css({
                    opacity : 0,
                    cursor : 'auto'
                });
                cnt03TopBtn.eq(0).css({
                    opacity : 1,
                    cursor : 'pointer'
                });
            }
            cnt03TopArtGroup.css({
                marginLeft : i*-(100 / 3)+'%'
            });
        });

        // artBtm
        cnt03BtmArt.eq(0).hover(function(){
            cnt03BtmArt.eq(0).find('.image').toggleClass('hov');
            cnt03BtmArt.eq(0).find('.texts').toggleClass('hov');
        });
    }
});
