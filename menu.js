$(document).ready(function(){
    $('.menu-ham').on("vclick", "p", function () {
        $('.menu').animate({left: '0px'}, 100)
    });
    $('.close-menu').click(function () {
        $('.menu').animate({left: '-650px'}, 100)
});
});