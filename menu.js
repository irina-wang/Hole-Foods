$(document).ready(function(){
    $('.menu-ham').click(function () {
        $('.menu').animate({left: '0px'}, 100)
    });
    $('.close-menu').click(function () {
        $('.menu').animate({left: '-100%'}, 100)
});
});