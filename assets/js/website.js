/**
 * Scripts de inicio
 */
style = "color:blue;font-size:2.1em;";
style2 = "color:green; font-weight:bold;font-size:1.1em;";
console.groupCollapsed("Creditos do desenvolvedor:");
console.info("%c-------------------------------------------------------------", style);
// console.info("%cEste é mais um site desenvolvido pela...", style2);
// console.info("%chttp://www.site.com.br",style);
console.info("%cTodos os direitos reservados © 2017", style);
console.info("%c-------------------------------------------------------------", style);
console.info("");
console.groupEnd();

$(function () {

    $('body').on('click', '.carousel-control', function () {
        setTimeout(function () {
            var item = $('.carousel-inner').find('div.item.active').attr('id');
        }, 500);
    });

    $('body').on('click', '.menu-btn, .menu-bar a.btn-menu', function () {
        if ($('.menu-bar').hasClass('close-menu')) {
            $('.menu-bar').removeClass('close-menu');
        } else {
            $('.menu-bar').addClass('close-menu');
        }
    });

});