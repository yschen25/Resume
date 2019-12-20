$(function () {

    // Scroll
    $(window).bind('mousewheel', function (e) {

        // Show the backToTop btn
        // $('.backToTop').show();
        // if( $("input[name=tag]:checked").val() === 'tag1'){
        //     $('.backToTop').hide();
        // }

        if (e.originalEvent.wheelDelta / 120 > 0) {
            console.log('scroll up');
            moveToPreviousPage();
        } else {
            console.log('scroll down');
            moveToNextPage();
        }
    });

    // Change page when click specific keys
    $(window).on("keydown", function (e) {

        if (e.keyCode === 39 || e.keyCode === 40) {
            console.log('Right/Down arrow key');
            moveToNextPage();
        }

        if (e.keyCode === 37 || e.keyCode === 38) {
            console.log('Left/Up arrow key');
            moveToPreviousPage();
        }
    });

    function moveToNextPage() {
        let tag = $("input[name=tag]:checked").val();
        let nextTag = $('#' + tag).next();
        $(nextTag).click();
    }

    function moveToPreviousPage() {
        let tag = $("input[name=tag]:checked").val();
        let nextTag = $('#' + tag).prev();
        $(nextTag).click();
    }

    // ================= Mobile =================

    // Menu
    $('.close').on('click', function () {

        $('.mobileMenu').animate({
            'left' : '-300px'
        }, 200)
    });

    // Switch project item
    $('.right_arrow').on('click', function () {
        let num = $(this).closest('.page').data('number');
        let num1 = num * 2 -1;
        let num2 = num * 2;

        $('.item' + num1).fadeOut().hide();
        $('.right_arrow' + num).fadeOut().hide();

        $('.item' + num2).fadeIn().show();
        $('.left_arrow' + num).fadeIn().show();
    });

    $('.left_arrow').on('click', function () {
        let num = $(this).closest('.page').data('number');
        let num1 = num * 2 -1;
        let num2 = num * 2;

        $('.item' + num2).fadeOut().hide();
        $('.left_arrow' + num).fadeOut().hide();

        $('.item' + num1).fadeIn().show();
        $('.right_arrow' + num).fadeIn().show();
    });

    // To the top
    $('.backToTop').on('click', function () {
        $('#tag1').click();
        $('.backToTop').animate(
            {
                'opacity' : '0',
                'bottom'  : '-50px'
            }, 1000
        );
    });

});