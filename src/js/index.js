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

        $('.tag').on('click', function (e) {
            e.preventDefault();

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

            $('html, body').animate({scrollTop: top}, 500, 'swing');
            $('.tag').removeClass('menuColor');
            $(this).addClass('menuColor');
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

            $('html, body').animate({scrollTop: top}, 500, 'swing');
            $('.tag').removeClass('menuColor');
            $(this).addClass('menuColor');
        });
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
            case 'intro':
                response = 'I am committed to front-end, back-end and website design, with a total of 3 years of professional experience. And I have spearheaded revising website to make it online, ' +
                    'hold courses training, write technical documents and review code to enhance efficiency of work, revised ' +
                    'webpack config of official website to reduce the bundle time to half, and import ESLint, SonarLint and using ' +
                    'Git Pre-commit to maintain the quantity of code and avoid the debt.';
                break;
            case 'abroad':
                response = 'I am eager to take challenges like how to work abroad, how to communicate with people in a foreign language, ' +
                    'I think what makes life sparkles because there are plenty of challenges are waiting for me and I have chance to make progress, ' +
                    'I wish I can say "What a ride!" In the end of my life.';
                break;
            case 'swot':
                response = 'I am extremely proactive, I spearheaded revised website actively. ' +
                    'held git training courses and wrote technical documents to reduce problem occurs on the work,  ' +
                    'revised webpack config of official website to reduce the bundle time to half, and import ESLint, ' +
                    'SonarLint and using Git Pre-commit to maintain the quantity of code and avoid the debt.';
                break;
            case 'disagreement':
                response = 'I will listen to the opposite opinion first, try to understand the reason why he think at that way, ' +
                    'the I explain to he my opinion and reason. once company ask us to use phpstorm instead of sublime, so I ask ' +
                    'the promoter to demonstrate how to use phpstorm, it convince me, then I became a phpstorm promoter, too, ' +
                    'finally make whole depart start to use phpstorm.';
                break;
            case 'stress':
                response = 'I\'m very skilled at balancing multiple projects and meeting deadlines. once I have to let new official ' +
                    'web online, write campaign pages and maintain old web, that’s tons of pressures. However, Rather than focusing on ' +
                    'feeling stressed, I focus on the task first. I created a schedule that I split each things into small assignments, ' +
                    'then finish them by their priority.';
                break;
            case 'visa':
                response = 'Yes, I have Tier 5 visa.';
                break;
            default:
                response = "The line is busy, please wait.";
                break;
        }
        return response;
    }

    // Back to top
    $('.backToTop').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 500, 'swing');
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