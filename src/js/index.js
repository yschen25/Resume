$(function () {

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

        // Add menu color when click
        $('.tag').bind('click', function () {
            $('.tag').removeClass('menuColor');
            $(this).addClass('menuColor');
        });

        // Change page when scroll
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

            if (e.keyCode === 37 || e.keyCode === 38) {
                // Prevent radio focus event
                e.preventDefault();
                moveToPreviousPage();
                addColorOnMenu();
            }

            if (e.keyCode === 39 || e.keyCode === 40) {
                e.preventDefault();
                moveToNextPage();
                addColorOnMenu();
            }
        });
    } else {
        $('.group').addClass('mobile');

        // Mobile menu
        $('.tag').on('click', function (e) {
            e.preventDefault();

            $('.mobileMenu').animate({
                'left': '-1000px'
            }, 200);

            $('.mask').hide();
            $('.itemWrapper').removeClass('disable');

            let data = $(this).data('tag');
            let p1h = $('.page1').height() + 1;
            let p2h = $('.page2').height() + 1;
            let p3h = $('.page3').height() + 1;
            let p4h = $('.page4').height() + 1;
            let top = 0;
            switch (data) {
                case 'page1':
                    top;
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

            $('.group').stop().animate({scrollTop: top}, 500, 'swing');
            $('.tag').removeClass('menuColor');
            $(this).addClass('menuColor');
        });
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
            console.log("123");
            return;
        }

        let nextTag = $('#tag' + tag).next();
        $(nextTag).click();
    }

    // Change menu's color when change page
    function addColorOnMenu() {
        let tag = parseInt($("input[name=tag]:checked").val().slice(3, 5));

        $('.tag').removeClass('menuColor');
        $('.tag' + tag).addClass('menuColor');
    }

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

        let height = $('.chatList').height();
        $('.chatRoom').animate({scrollTop: height + 'px'}, 700);

        let response = transferType(type);

        $('.inputSending').addClass('act');
        $('.plane').addClass("act").addClass("sending");
        setTimeout(function () {
            $('.inputSending').removeClass('act');
            $('.plane').removeClass("act").removeClass("sending");
        }, 500);

        setTimeout(function () {
            $('.chatList').append('<li class="content"><span>' + response + '</span></li>');
            $('.text').removeClass('disable');

            $('.chatRoom').animate({scrollTop: height + 'px'}, 700);

        }, 1000);
    });

    function transferType(type) {
        let response = "Please wait";
        switch (type) {
            case 'england':
                response = 'UK is a major economic and technology center, there are plenty of opportunities, ' +
                    'and home to some of the world’s biggest and most dynamic companies. ' +
                    'I have been to United Kingdom before,' +
                    ' people has beautiful accent and good taste in fashion, they are are nicely. ' +
                    'it’s a country make my want to stay, there also many impressed landscape such as London eye, ' +
                    'stonehenge, And the afternoon tea is wonderful!';
                break;
            case 'greeting':
                response = 'I am good, and you?';
                break;
            case 'job':
                response = 'I have 3 years experiences in front-end, back-end and design web, ' +
                    'have spearheaded building a new web from the old one for two times, can get into' +
                    ' job soon and get started quickly. I also have excellent communication skills by ' +
                    'Soho and business trip experience. My supervisors always notes that he impressed ' +
                    'my strong logic and enthusiasm for the job. I have been to an exchange student in Germany, ' +
                    'used to work under pressures and have great adaptability.Proficient in HTML5, CSS3, SCSS, ' +
                    'JavaScript.js, jQuery, React.js, ES6, RWD, Photoshop, Illustrator, Webpack, NPM and I also write PHP, ' +
                    'MySQL, knowing how to use Git.';
                break;
            case 'liquor':
                response = 'Yes, I like it. Especially for Glühwein, Radler and Cocktail.';
                break;
            case 'from':
                response = 'I come from Taiwan where you can find convenience stores everywhere, ' +
                    'we also have night market a place to try out the various tasty snacks, not to mention the bubble tea!';
                break;
            case 'hire':
                response = 'I am shine in front-end & bake-end programing, designing and communicating.';
                break;
            default:
                response = "The line is busy, please wait.";
                break;
        }
        return response;
    }

    // Projects
    let projectPage = 1;
    $('.topArrow').on('click', function () {

        if (projectPage === 2) {
            $('.item1, .item2, .item3').animate({
                'margin-top': '0px'
            }, 700);

            $('.topArrow').hide();
            $('.downArrow').delay(300).fadeIn();

            projectPage = 1;
        }

        if (projectPage === 3) {

            $('.item4, .item5, .item6').animate({
                'margin-top': '0px'
            }, 700);

            projectPage = 2;

            $('.downArrow').delay(300).fadeIn();
        }

        if (projectPage === 4) {

            $('.item7, .item8, .item9').animate({
                'margin-top': '0px'
            }, 700);

            projectPage = 3;

            $('.downArrow').delay(300).fadeIn();
        }
    });

    $('.downArrow').on('click', function () {

        if (projectPage === 1) {
            $('.item1, .item2, .item3').animate({
                'margin-top': '-1500px'
            }, 700);

            $('.topArrow').delay(300).fadeIn();
            projectPage = 2;
            return;
        }

        if (projectPage === 2) {
            $('.item4, .item5, .item6').animate({
                'margin-top': '-1500px'
            }, 700);

            $('.topArrow').delay(300).fadeIn();

            projectPage = 3;
            return;
        }

        if (projectPage === 3) {
            $('.item7, .item8, .item9').animate({
                'margin-top': '-1500px'
            }, 700);

            $('.downArrow').hide();
            $('.topArrow').delay(300).fadeIn();

            projectPage = 4;
        }
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