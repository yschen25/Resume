$(function () {

    $('.loading').hide();

    // Loading
    loading();

    // Show loading page when refresh
    $('body').bind('beforeunload', function () {
        loading();
    });

    function loading() {
        setTimeout(function () {
            $('.loading').hide();
        }, 3000);
    }

    // Desktop
    if (!$.browser.mobile) {

        // Scroll
        $(window).bind('mousewheel', function (e) {

            if (e.originalEvent.wheelDelta / 120 > 0) {

                moveToPreviousPage();
                addColorOnMenu();
            } else {

                moveToNextPage();
                addColorOnMenu();
            }
        });

        // Change page when click specific keys
        $(window).on("keydown", function (e) {

            if (e.keyCode === 39 || e.keyCode === 40) {

                moveToNextPage();
                addColorOnMenu();
            }

            if (e.keyCode === 37 || e.keyCode === 38) {

                moveToPreviousPage();
                addColorOnMenu();
            }
        });
    } else {
        $('.group').addClass('mobile');

        // Mobile menu
        $('.radio').attr('disabled', true);
    }

    function moveToPreviousPage() {
        let tag = parseInt($("input[name=tag]:checked").val().slice(3, 5));

        // First page
        if (tag === 1) {
            return;
        }

        let prevTag = $('#tag' + tag).prev();
        $(prevTag).click();
    }

    function moveToNextPage() {
        let tag = parseInt($("input[name=tag]:checked").val().slice(3, 5));

        // Last page
        if (tag === 5) {
            return;
        }

        let nextTag = $('#tag' + tag).next();
        $(nextTag).click();
    }

    function addColorOnMenu() {
        let tag = parseInt($("input[name=tag]:checked").val().slice(3, 5));

        $('.tag').removeClass('menuColor');
        $('.tag' + tag).addClass('menuColor');
    }

    // Change menu's color when change page
    $('.tag').on('click', function () {
        $('.tag').removeClass('menuColor');
        $(this).addClass('menuColor');
    });

    // About Me - contact info
    $('.imgWrapper').hover(function () {
        $('.avatar').attr('src', 'img/avatar3.png')
    }, function () {
        $('.avatar').attr('src', 'img/avatar.png')
    });

    // About Me - mobile
    $('.text').on('click', function () {
        $('.text').addClass('disable');

        let text = $(this).text();
        let type = $(this).data('type');
        $('.chatList').append('<li class="userInput"><span>' + text + ' </span></li>');

        let inputHeight = 0;
        $('.content').each(function () {
            inputHeight = inputHeight + $(this).height() + 50;
        });

        let RspHeight = 0;
        $('.userInput').each(function () {
            RspHeight = RspHeight + $(this).height() + 50;
        });

        if (inputHeight > 200) {
            $('.chatRoom').animate({scrollTop: `${inputHeight + RspHeight}px`}, 700);
        }

        let response = transferType(type);

        $('.plane').addClass("act");
        $('.inputSending').addClass('act');
        $('.plane').addClass("sending");
        setTimeout(function () {
            $('.inputSending').removeClass('act');
            $('.plane').removeClass("sending");
            $('.plane').removeClass("act");
        }, 500);

        setTimeout(function () {
            $('.chatList').append('<li class="content"><span>' + response + '</span></li>');
            $('.text').removeClass('disable');

            let inputHeight = 0;
            $('.content').each(function () {
                inputHeight = inputHeight + $(this).height() + 50;
            });

            if (inputHeight > 200) {
                $('.chatRoom').animate({scrollTop: `${inputHeight}px`}, 700);
            }

        }, 1000);

    });

    function transferType(type) {
        console.log(type);

        let response = "Please wait";
        switch (type) {
            case 'germany':
                response = 'At first, the reason I chose Germany is because Germany is a economic\n' +
                    'center with strong industry development country, but after I became an exchange\n' +
                    'student at Augsburg applied Science, lived in Germany for about half year, I deeply\n' +
                    'fall in love in this country. I love the gorgeous building and landscape, the\n' +
                    'convenience transportation like tram, but the most impressed me is people, all of\n' +
                    'them are very kind and nice, when I in a trouble,with bought ticket, when I went to the\n' +
                    'ikea or supermarket, there are always someone came to help me or talk to me, it\n' +
                    'made me feel warm in my heart, made me think it’s a good place to live.';
                break;
            case 'from':
                response = 'I come from poo poo planet.';
                break;
            default:
                response = "The line is busy, please wait.";
                break;
        }
        return response;
    }

    // Projects
    $('.topArrow').on('click', function () {

        $('.item1, .item2, .item3').animate({
            'margin-top': '0px'
        }, 1000);

        $('.topArrow').hide();
        $('.downArrow').delay(900).fadeIn();
    });

    $('.downArrow').on('click', function () {

        $('.item1, .item2, .item3').animate({
            'margin-top': '-1500px'
        }, 700);

        $('.downArrow').hide();
        $('.topArrow').delay(300).fadeIn();
    });

    // Back to top
    $('.backToTop').on('click', function () {
        $('#tag1').click();
    });

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