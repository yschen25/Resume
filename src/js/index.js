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

        $('.radio').attr('disabled', false);
        $('.mobileBtn').addClass('disable');

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
        $('.mobileBtn').removeClass('disable');
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
    $('.tag').on('click', function (e) {
        if ($.browser.mobile) {
            e.preventDefault();

            $('.mobileMenu').animate({
                'left': '-1000px'
            }, 200);
            $('.mask').hide();
            $('.itemWrapper').removeClass('disable');

            var data = $(this).data('tag');
            var p1h = $('#page1').height();
            var p2h = $('#page2').height();
            var p3h = $('#page3').height();
            var p4h = $('#page4').height();
            var top = 0;
            switch (data) {
                case 'page1':
                    top = 0;
                    break;
                case 'page2':
                    top = p1h;
                    break;
                case 'page3':
                    top = p1h + p2h;
                    break;
                case 'page4':
                    top = p1h + p2h + p3h;
                    break;
                case 'page5':
                    top = p1h + p2h + p3h + p4h;
                    break;
            }

            $('.group').stop().animate({scrollTop:top}, 500, 'swing');
        }
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
    $('.mobile .text').on('click', function () {
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
        let response = "Please wait";
        switch (type) {
            case 'germany':
                response = 'At first, the reason I chose Germany is because Germany is a economic' +
                    'center with strong industry development country, but after I became an exchange' +
                    'student at Augsburg applied Science, lived in Germany for about half year, I deeply' +
                    'fall in love in this country. I love the gorgeous building and landscape, the' +
                    'convenience transportation like tram, but the most impressed me is people, all of' +
                    'them are very kind and nice, when I in a trouble,with bought ticket, when I went to the' +
                    'ikea or supermarket, there are always someone came to help me or talk to me, it' +
                    'made me feel warm in my heart, made me think it’s a good place to live.';
                break;
            case 'greeting':
                response = 'I am good, And you?';
                break;
            case 'job':
                response = 'I am a front-end developer work at Taiwan for three years, I have gained plenty of experiences in' +
                    'official website revise and optimization, websites designing, client customer communication, ' +
                    'Spearheaded the team when I was in developer training class, ' +
                    'my website also got the best web 2nd and best RWD 2nd.';
                break;
            case 'liquor':
                response = 'Yes, I like it. Especially for Glühwein, Radler and Cocktail';
                break;
            case 'from':
                response = 'I come from Taiwan where you can find convenience stores everywhere, ' +
                    'we also have night market a place to try out the various tasty snacks, not to mention the bubble tea!';
                break;
            case 'hire':
                response = 'I am shine at front-end & bake-end programing, designing and communicating.';
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