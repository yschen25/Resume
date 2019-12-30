$(function () {

    // Change menu's color when change page
    $('.tag').on('click', function () {
        $('.tag').removeClass('menuColor');
        $(this).addClass('menuColor');
    });

    // Scroll
    $(window).bind('mousewheel', function (e) {

        if (e.originalEvent.wheelDelta / 120 > 0) {
            console.log('scroll up');

            moveToPreviousPage();
            addColorOnMenu();
        } else {
            console.log('scroll down');

            moveToNextPage();
            addColorOnMenu();
        }
    });

    // Change page when click specific keys
    $(window).on("keydown", function (e) {

        if (e.keyCode === 39 || e.keyCode === 40) {
            console.log('Right/Down arrow key');

            moveToNextPage();
            addColorOnMenu();
        }

        if (e.keyCode === 37 || e.keyCode === 38) {
            console.log('Left/Up arrow key');

            moveToPreviousPage();
            addColorOnMenu();
        }
    });

    function moveToPreviousPage() {
        let tag = $("input[name=tag]:checked").val();

        console.log('tag', tag);

        if(tag === '1'){
            return;
        }

        let nextTag = $('#' + tag).prev();
        $(nextTag).click();
    }

    function moveToNextPage() {
        let tag = $("input[name=tag]:checked").val();

        if(tag === '11'){
            return;
        }

        console.log('tag2', tag);

        let nextTag = $('#' + tag).next();
        $(nextTag).click();
    }

    function addColorOnMenu(){
        let tag = parseInt($("input[name=tag]:checked").val().slice(3, 5));

        $('.tag').removeClass('menuColor');
        if (tag === 10 || tag === 9 || tag === 8) {
            $('.tag7').addClass('menuColor');
        } else {
            $('.tag' + tag).addClass('menuColor');
        }
    }

    // ================= Mobile =================

    // Show the menu
    $('.mobileMenuBtn').on('click', function () {

        $('.mobileMenu').animate({
            'left': '0px'
        }, 300);

        $('.mask').show();
        $('.itemWrapper').addClass('disable');
    });

    // Hide the menu
    $('.close, .mask').on('click', function () {

        $('.mobileMenu').animate({
            'left': '-1000px'
        }, 200);

        $('.mask').hide();
        $('.itemWrapper').removeClass('disable');
    });

    // Switch project item
    $('.right_arrow').on('click', function () {
        let num = $(this).closest('.page').data('number');
        let num1 = num * 2 - 1;
        let num2 = num * 2;

        $('.item' + num1).fadeOut().hide();
        $('.right_arrow' + num).fadeOut().hide();

        $('.item' + num2).fadeIn().show();
        $('.left_arrow' + num).fadeIn().show();
    });

    $('.left_arrow').on('click', function () {
        let num = $(this).closest('.page').data('number');
        let num1 = num * 2 - 1;
        let num2 = num * 2;

        $('.item' + num2).fadeOut().hide();
        $('.left_arrow' + num).fadeOut().hide();

        $('.item' + num1).fadeIn().show();
        $('.right_arrow' + num).fadeIn().show();
    });

    // To the top
    $('.backToTop').on('click', function () {
        $('#tag1').click();
        // $('.backToTop').animate(
        //     {
        //         'opacity': '0',
        //         'bottom': '-50px'
        //     }, 1000
        // );
    });

});