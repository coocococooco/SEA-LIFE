$(function(){
    $('.tab').load('./inc/tab.html',function(){
        var tabBtn = $('.tabWrap>.tab>.tabBtns>.tabBtn');
        tabBtn.click(function(){
            tabBtn.removeClass('on');
            $(this).toggleClass('on');
        });
    });
    var wd = $(window).width();
    var cnt02artBtn = $('.content.cnt02>section>.artGroup>article>.texts');
    var cnt02artGroup = $('.content.cnt02>section>.artGroup');
    var cnt02SildeBtn = $('.content.cnt02>section>.btns>i');
    var cnt02art = $('.content.cnt02>section>.artGroup>article');
    var cnt03artBtn = $('.content.cnt03>section>.artGroup>article>.texts');
    var cnt03art = $('.content.cnt03>section>.artGroup>article');
    var cnt03artGroup = $('.content.cnt03>section>.artGroup');
    var cnt03SildeBtn = $('.content.cnt03>section>.btns>i');
    cnt02art.removeClass('show');
    cnt03art.removeClass('show');
    if(wd >= 420 && wd < 1024){
        cnt02artBtn.each(function(a){
            cnt02artBtn.eq(a).click(function(){
                cnt02art.eq(a).toggleClass('show');
            });
        });
        cnt03artBtn.each(function(z){
            cnt03artBtn.eq(z).click(function(){
                cnt03art.eq(z).toggleClass('show');
            });
        });
        cnt02SildeBtn.eq(1).css({
            opacity : 0,
            cursor : 'auto'
        });
        var i = 0;
        cnt02SildeBtn.eq(0).click(function(){
            i++;
            if(i>=4){
                i = 4
                cnt02SildeBtn.eq(0).css({
                    opacity : 0,
                    cursor : 'auto'
                });
                cnt02SildeBtn.eq(1).css({
                    opacity : 1,
                    cursor : 'pointer'
                });
            }
            cnt02artGroup.css({
                marginLeft : i*-(100 / 2)+'%'
            });
        });
        cnt02SildeBtn.eq(1).click(function(){
            i--;
            if(i<=0){
                i = 0
                cnt02SildeBtn.eq(1).css({
                    opacity : 0,
                    cursor : 'auto'
                });
                cnt02SildeBtn.eq(0).css({
                    opacity : 1,
                    cursor : 'pointer'
                });
            }
            cnt02artGroup.css({
                marginLeft : i*-(100 / 2)+'%'
            });
        });
        var j = 0;
        cnt03SildeBtn.eq(1).css({
            opacity : 0,
            cursor : 'auto'
        });
        cnt03SildeBtn.eq(0).click(function(){
            j++;
            if(j>=4){
                j = 4
                cnt03SildeBtn.eq(0).css({
                    opacity : 0,
                    cursor : 'auto'
                });
                cnt03SildeBtn.eq(1).css({
                    opacity : 1,
                    cursor : 'pointer'
                });
            }
            cnt03artGroup.css({
                marginLeft : j*-(100 / 2)+'%'
            });
        });
        cnt03SildeBtn.eq(1).click(function(){
            j--;
            if(j<=0){
                j = 0
                cnt03SildeBtn.eq(1).css({
                    opacity : 0,
                    cursor : 'auto'
                });
                cnt03SildeBtn.eq(0).css({
                    opacity : 1,
                    cursor : 'pointer'
                });
            }
            cnt03artGroup.css({
                marginLeft : j*-(100 / 2)+'%'
            });
        });
    }else{
        cnt02artBtn.each(function(a){
            cnt02artBtn.eq(a).click(function(){
                cnt02art.eq(a).toggleClass('show');
            });
        });
        cnt03artBtn.each(function(z){
            cnt03artBtn.eq(z).click(function(){
                cnt03art.eq(z).toggleClass('show');
            });
        });
        var i = 0;
        cnt02SildeBtn.eq(1).css({
            opacity : 0,
            cursor : 'auto'
        });
        cnt02SildeBtn.eq(0).click(function(){
            i++;
            if(i>=5){
                i = 5
                cnt02SildeBtn.eq(0).css({
                    opacity : 0,
                    cursor : 'auto'
                });
                cnt02SildeBtn.eq(1).css({
                    opacity : 1,
                    cursor : 'pointer'
                });
            }
            cnt02artGroup.css({
                marginLeft : i*-(100 / 1)+'%'
            });
        });
        cnt02SildeBtn.eq(1).click(function(){
            i--;
            if(i<=0){
                i = 0
                cnt02SildeBtn.eq(1).css({
                    opacity : 0,
                    cursor : 'auto'
                });
                cnt02SildeBtn.eq(0).css({
                    opacity : 1,
                    cursor : 'pointer'
                });
            }
            cnt02artGroup.css({
                marginLeft : i*-(100 / 1)+'%'
            });
        });
        var j = 0;
        cnt03SildeBtn.eq(1).css({
            opacity : 0,
            cursor : 'auto'
        });
        cnt03SildeBtn.eq(0).click(function(){
            j++;
            if(j>=5){
                j = 5
                cnt03SildeBtn.eq(0).css({
                    opacity : 0,
                    cursor : 'auto'
                });
                cnt03SildeBtn.eq(1).css({
                    opacity : 1,
                    cursor : 'pointer'
                });
            }
            cnt03artGroup.css({
                marginLeft : j*-(100 / 1)+'%'
            });
        });
        cnt03SildeBtn.eq(1).click(function(){
            j--;
            if(j<=0){
                j = 0
                cnt03SildeBtn.eq(1).css({
                    opacity : 0,
                    cursor : 'auto'
                });
                cnt03SildeBtn.eq(0).css({
                    opacity : 1,
                    cursor : 'pointer'
                });
            }
            cnt03artGroup.css({
                marginLeft : j*-(100 / 1)+'%'
            });
        });
    }
});