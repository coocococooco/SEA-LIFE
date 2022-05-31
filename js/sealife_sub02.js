$(function(){
    $('.tab').load('./inc/tab.html',function(){
        var tabBtn = $('.tabWrap>.tab>.tabBtns>.tabBtn');
        tabBtn.click(function(){
            tabBtn.removeClass('on');
            $(this).toggleClass('on');
        });
    });
});