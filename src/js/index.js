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
        let tag = parseInt($("input[name=tag]:checked").val().slice(3, 5));

        console.log('up', tag);

        if (tag === 1) {
            return;
        }

        if(tag === 7){
            tag = tag - 3;
        }

        let prevTag = $('#tag' + tag).prev();

        console.log('prevTag', prevTag);

        $(prevTag).click();
    }

    function moveToNextPage() {
        let tag = parseInt($("input[name=tag]:checked").val().slice(3, 5));

        // Last page
        if (tag === 11) {
            return;
        }

        // Lead to autobiography
        if (tag === 3) {
            tag = tag + 3;
        }

        console.log('down', tag);

        let nextTag = $('#tag' + tag).next();

        console.log('nextTag', nextTag);

        $(nextTag).click();
    }

    function addColorOnMenu() {
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
});