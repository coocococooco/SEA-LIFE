$(function(){
    // 변수선언

    var slideGroup = $('.slideGroup');
    var mainbtn = $('.mainWrap>main>.texts>.btns>i')

    // 메인

    function left(){
        slideGroup.find('.image:last').fadeOut(700,function(){
            $(this).prependTo(slideGroup);
            $(this).fadeIn(0);
        });
    }
    function right(){
        slideGroup.find('.image:first').fadeOut(0,function(){
            $(this).appendTo(slideGroup);
            $(this).fadeIn(700);
        });
    }

    var auto = setInterval(left,3000);

    mainbtn.eq(1).click(function(){
        clearInterval(auto)
    });
    mainbtn.eq(0).click(function(){
        auto = setInterval(left,3000);
    });

    // 컨텐츠 01

    var loc = [];
    for( var i = 0; i < $('body>div').length; i++){
        loc[i] = $('body>div').eq(i).offset().top;
        // console.log(loc);
    }
    $(window).scroll(function(){
        var scl = $(this).scrollTop();

        if(scl >= 580){
            $('.content.cnt01>section>article>.image').css({
                opacity : 1,
                transform : 'translateX(0px)'
            })
            $('.content.cnt01>section>article>.texts').css({
                opacity : 1,
                transform : 'translateY(0px)'
            })
        }else if(scl <= 580){
            $('.content.cnt01>section>article>.image').css({
                opacity : 0,
                transform : 'translateX(60px)'
            })
            $('.content.cnt01>section>article.a2>.image').css({
                opacity : 0,
                transform : 'translateX(-60px)'
            })
            $('.content.cnt01>section>article>.texts').css({
                opacity : 0,
                transform : 'translateY(60px)'
            })
        }
    });

    // 컨텐츠 02

    var paging = $('.content.cnt02 .imgView>.paging');
    var pagingLi = $('.content.cnt02 .imgView>.paging>li');
    var imgGroup = $('.content.cnt02 .imgView>.imgGroup');
    var txtGroup = $('.content.cnt02 .imgView>.txtGroup');
    var imgGroupLen = imgGroup.children().length;
    var txtGroupLen = txtGroup.children().length;
    var pagLenghth = $('.content.cnt02 .imgView>.paging>li').length;
    var i = 0;
    
    // artTop
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

    setInterval(cnt02Left,3000);
   
    pagingLi.click(pag);

    // artBtm
    var artBtmh3 = $('.content.cnt02 section>.artBtm>.artView>.artGroup>article>h3');
    var artBtmart = $('.content.cnt02 section>.artBtm>.artView>.artGroup>article');
    var artBtmimg = $('.content.cnt02 section>.artBtm>.artView>.artGroup>article>.image');
    var artBtmLen = artBtmimg.length;
   
    artBtmart.each(function(a){
        artBtmh3.eq(a).hover(function(){
            artBtmart.eq(a).toggleClass('show');
            artBtmimg.eq(a).toggleClass('show');
        });
    });


    // 배너


    var ovrGrid = $('.bnrWrap>.ovrGrid');
    var bnrImg = $('.bnrWrap>.banner>.imgGroup>.image');
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

    // 컨텐츠 03

    var cntBtmArt = $('.content.cnt03>section>.artBtm>.inner>article');

    cntBtmArt.eq(0).hover(function(){
        cntBtmArt.eq(0).find('.image').toggleClass('hov');
        cntBtmArt.eq(0).find('.texts').toggleClass('hov');
    });
});