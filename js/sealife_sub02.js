$(function(){
    $('.tab').load('./inc/tab.html',function(){
        var tabBtn = $('.tabWrap>.tab>.tabBtns>.tabBtn');
        tabBtn.click(function(){
            tabBtn.removeClass('on');
            $(this).toggleClass('on');
        });
    });
    // 컨텐츠 01 artBtm
    var cnt01Btn = $('.content.cnt01>section>.artBtm>.btns>i');
    var cnt01artGroup = $('.content.cnt01>section>.artBtm>.artView>.artGroup');
    var wd = $(window).width();
    // 컨텐츠 02 artBtm
    var cnt02Btm = $('.content.cnt02>section>.artBtm>.inner>.artGroup>article');
    function cnt02Btmbtn(){
        $(this).toggleClass('show');
    };
    if(wd >= 1024){
        cnt01artGroup.find('article:eq(4)').prependTo(cnt01artGroup);
        cnt01artGroup.css({marginLeft : -(100 / 3)+'%'});
        cnt01Btn.eq(1).click(function(){
            cnt01artGroup.stop().animate({
                marginLeft : 0
            },500,function(){
                cnt01artGroup.find('article:eq(4)').prependTo(cnt01artGroup);
                cnt01artGroup.css({
                    marginLeft : -(100 / 3)+'%'
                });
            });
        });
        cnt01Btn.eq(0).click(function(){
            cnt01artGroup.stop().animate({
                marginLeft : -(100 / 1.5)+'%'
            },500,function(){
                cnt01artGroup.find('article:eq(0)').appendTo(cnt01artGroup);
                cnt01artGroup.css({
                    marginLeft : -(100 / 3)+'%'
                });
            });
        });
        cnt02Btm.click(cnt02Btmbtn);
    }else if(wd >= 420 && wd < 1024){
        
        cnt01artGroup.find('article:eq(4)').prependTo(cnt01artGroup);
        cnt01artGroup.css({marginLeft : -(100 / 1.23)+'%'});
    
        cnt01Btn.eq(1).click(function(){
            cnt01artGroup.stop().animate({
                marginLeft : -(100 / 3.4)+'%'
            },500,function(){
                cnt01artGroup.find('article:eq(4)').prependTo(cnt01artGroup);
                cnt01artGroup.css({
                    marginLeft : -(100 / 1.23)+'%'
                });
            });
        });
        cnt01Btn.eq(0).click(function(){
            cnt01artGroup.stop().animate({
                marginLeft : -(100 /  0.75)+'%'
            },500,function(){
                cnt01artGroup.find('article:eq(0)').appendTo(cnt01artGroup);
                cnt01artGroup.css({
                    marginLeft : -(100 / 1.23)+'%'
                });
            });
        });
        cnt02Btm.click(cnt02Btmbtn);
    }else{    
        cnt01artGroup.find('article:eq(4)').prependTo(cnt01artGroup);
        cnt01artGroup.css({marginLeft : -(100 / 0.5)+'%'});

        cnt01Btn.eq(1).click(function(){
            cnt01artGroup.stop().animate({
                marginLeft : -(100 / 1)+'%'
            },500,function(){
                cnt01artGroup.find('article:eq(4)').prependTo(cnt01artGroup);
                cnt01artGroup.css({
                    marginLeft : -(100 / 0.5)+'%'
                });
            });
        });
        cnt01Btn.eq(0).click(function(){
            cnt01artGroup.stop().animate({
                marginLeft : -(100 / 0.335)+'%'
            },500,function(){
                cnt01artGroup.find('article:eq(0)').appendTo(cnt01artGroup);
                cnt01artGroup.css({
                    marginLeft : -(100 / 0.5)+'%'
                });
            });
        });
        cnt01artGroup.swiperight(function(){
            cnt01artGroup.stop().animate({
                marginLeft : -(100 / 1)+'%'
            },500,function(){
                cnt01artGroup.find('article:eq(4)').prependTo(cnt01artGroup);
                cnt01artGroup.css({
                    marginLeft : -(100 / 0.5)+'%'
                });
            });
        });
        cnt01artGroup.swipeleft(function(){
            cnt01artGroup.stop().animate({
                marginLeft : -(100 / 0.335)+'%'
            },500,function(){
                cnt01artGroup.find('article:eq(0)').appendTo(cnt01artGroup);
                cnt01artGroup.css({
                    marginLeft : -(100 / 0.5)+'%'
                });
            });
        });
        cnt02Btm.click(cnt02Btmbtn);
    }
});