$(document).ready(function (){

    var banner = {
        padre: $('#banner'),
        numerosSliders: $('#banner').children('.slide').length,
        posicion: 1
    };

    banner.padre.children('.slide').first().css({
        'left': 0
    });

    var altoBanner = function () {
        var alto = banner.padre.children('.slide').outerHeight();

        banner.padre.css({
            'height': alto + 'px'
        });

        console.log(alto);
    };

    altoBanner();

    $(window).resize(function () {
       altoBanner();
    });

    //---------------------------------------
    //--------- Banner
    //---------------------------------------

    //--------- Botton siguiente
    $('#banner-next').on('click', function (e) {
        e.preventDefault();

        if(banner.posicion < banner.numerosSliders){

            $('#banner .active').animate({
                'left': '-100%'
            });

            banner.padre.children().not('active').css({
                'left' : '100%'
            });

            $('#banner .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            banner.posicion = banner.posicion + 1;
        }
        else{

            $('#banner .active').animate({
                'left': '-100%'
            });

            banner.padre.children().not('active').css({
                'left' : '100%'
            });

            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').first().addClass('active').animate({
                'left' : '0'
            });

            banner.posicion = 1;
        }

    });

    //--------- Botton anterior
    $('#banner-prev').on('click', function (e) {
        e.preventDefault();

        if(banner.posicion > 1 ){

            $('#banner .active').animate({
                'left': '100%'
            });

            banner.padre.children().not('active').css({
                'left' : '-100%'
            });

            $('#banner .active').removeClass('active').prev().addClass('active').animate({
                'left': '0'
            });

            banner.posicion = banner.posicion - 1;
        }
        else{

            $('#banner .active').animate({
                'left': '100%'
            });

            banner.padre.children().not('active').css({
                'left' : '-100%'
            });

            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').last().addClass('active').animate({
                'left' : '0'
            });

            banner.posicion = banner.numerosSliders;
        }

    });



});
