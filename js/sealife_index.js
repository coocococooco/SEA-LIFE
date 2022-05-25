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
    };
    var auto = setInterval(left,3000);

    // 컨텐츠 01
    var loc = [];
    for( var i = 0; i < $('body>div').length; i++){
        loc[i] = $('body>div').eq(i).offset().top;
    };

    // 컨텐츠 02
    var pagingLi = $('.content.cnt02 .imgView>.paging>li');
    var imgGroup = $('.content.cnt02 .imgView>.imgGroup');
    var txtGroup = $('.content.cnt02 .imgView>.txtGroup');
    var cnt02RightBtn = $('.content.cnt02 .imgView>.btns>i');
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
        });
    };

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
        });
   
        clearInterval(pagAuto);
    };

    // 컨텐츠 02 artBtm
    var artBtmart = $('.content.cnt02 section>.artBtm>.artView>.artGroup>article');
    var artBtmimg = $('.content.cnt02 section>.artBtm>.artView>.artGroup>article>.image');

    // 컨텐츠 03
    var cnt03TopArtGroup = $('.content.cnt03>section>.artTop>.artGroup');
    var cnt03TopBtn = $('.content.cnt03>section>.artTop>.btns>i');
    var cnt03BtmArt = $('.content.cnt03>section>.artBtm>.inner>article');

    // 배너
    var ovrGrid = $('.bnrWrap>.ovrGrid');
    var bnrImg = $('.bnrWrap>.banner>.imgGroup>.image');


    if(wd >= 1024){
        // 메인
        mainbtn.eq(1).click(function(){
            clearInterval(auto);
        });
        mainbtn.eq(0).click(function(){
            auto = setInterval(left,3000);
        });

        // 컨텐츠 01

        $(window).scroll(function(){
            var scl = $(this).scrollTop();
    
            if(scl >= 580){
                $('.content.cnt01>section>article>.image').css({
                    opacity : 1,
                    transform : 'translateX(0px)'
                });
                $('.content.cnt01>section>article>.texts').css({
                    opacity : 1,
                    transform : 'translateY(0px)'
                });
            }else if(scl <= 580){
                $('.content.cnt01>section>article>.image').css({
                    opacity : 0,
                });
                $('.content.cnt01>section>article>.texts').css({
                    opacity : 0,
                    transform : 'translateY(60px)'
                });
            }
        });
    
        // 컨텐츠 02
    
        // artTop

        var pagAuto = setInterval(cnt02Left,3000);
       
        pagingLi.click(pag);
    
        // 배너
    
            $(window).scroll(function(){
            var scl = $(this).scrollTop();
    
            if(scl >= 2500){
                ovrGrid.eq(1).css({
                    opacity : 1,
                    transform : 'translateY(0px)'
                });
                ovrGrid.eq(2).css({
                    opacity : 1,
                    transform : 'translateY(0px)'
                });
                bnrImg.eq(0).css({
                    opacity : 1,
                    transform : 'translateY(0px)'
                });
                bnrImg.eq(1).css({
                    opacity : 1,
                    transform : 'translateY(0px)'
                });
            }else{
                ovrGrid.eq(1).css({
                    opacity : 0,
                    transform : 'translateY(60px)'
                });
                ovrGrid.eq(2).css({
                    opacity : 0,
                    transform : 'translateY(-60px)'
                });
                bnrImg.eq(0).css({
                    opacity : 0,
                    transform : 'translateY(-60px)'
                });
                bnrImg.eq(1).css({
                    opacity : 0,
                    transform : 'translateY(60px)'
                });
            }
        });
    
    }else if(wd >= 420 && wd < 1024){
         
        // 메인

        clearInterval(auto);
        
        // 컨텐츠 01
    
          $(window).scroll(function(){
              var scl = $(this).scrollTop();
      
              if(scl >= 350){
                  $('.content.cnt01>section>article>.image').css({
                      opacity : 1,
                      transform : 'translateX(0px)'
                  });
                  $('.content.cnt01>section>article>.texts').css({
                      opacity : 1,
                      transform : 'translateY(0px)'
                  });
              }else if(scl <= 350){
                  $('.content.cnt01>section>article>.image').css({
                      opacity : 0,
                  });
                  $('.content.cnt01>section>article>.texts').css({
                      opacity : 0,
                      transform : 'translateY(60px)'
                  });
              }
          });

         // 컨텐츠 02
    
             // artTop    
             var pagAuto = setInterval(cnt02Left,3000);
         
             pagingLi.click(pag);

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

    }else{
         // 메인

         clearInterval(auto);

        //  컨텐츠 02 
        
        // artTopRight
        
        imgGroup.find('.image:first').appendTo(imgGroup);

        cnt02RightBtn.eq(0).click(function(){
            i++;
            i = i%imgGroupLen;
            imgGroup.find('.image:first').appendTo(imgGroup);
            txtGroup.css({
                marginLeft : i * -100+'%'
            });
        });
        cnt02RightBtn.eq(1).click(function(){
            i--;
            i=(imgGroupLen+i)%imgGroupLen;
            imgGroup.find('.image:last').prependTo(imgGroup);
            txtGroup.css({
                marginLeft : i * -100+'%'
            });
        });

    // 컨텐츠 03

       // artTop
            cnt03TopBtn.eq(1).css({
                opacity : 0,
                cursor : 'auto'
            });

            cnt03TopBtn.eq(0).click(function(){
                i++;
                if(i>=2){
                    i=2
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
                    marginLeft : i*-(100 / 2)+'%'
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
                    marginLeft : i*-(100 / 2)+'%'
                });
            });
    }

});