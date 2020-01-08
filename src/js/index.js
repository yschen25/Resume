$(function () {

    $('.loading').hide();

    // Loading
    loading();

    // Show loading page when refresh
    $('body').bind('beforeunload',function(){
        loading();
    });

    function loading() {
        setTimeout(function () {
            $('.loading').hide();
        }, 3000);
    }

    var flag = true;
    $('.page').scroll(function () {
        if (!flag) return;
        var height = $(this).height();
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(this).prop('scrollHeight');
        console.log(scrollTop);
        if (height + scrollTop === scrollHeight) {
            flag = false;
            $(this).animate({scrollTop: scrollTop - 5}, 100, 'swing', function () {
                flag = true;
            });
            moveToNextPage();
            addColorOnMenu();
        }
        if (scrollTop === 0) {
            flag = false;
            $(this).animate({scrollTop: 5}, 100, 'swing', function () {
                flag = true;
            });
            moveToPreviousPage();
            addColorOnMenu();
        }
    });

    // Change menu's color when change page
    $('.tag').on('click', function () {
        $('.tag').removeClass('menuColor');
        $(this).addClass('menuColor');
    });

    // Scroll
    // $(window).bind('mousewheel', function (e) {
    //
    //     if (e.originalEvent.wheelDelta / 120 > 0) {
    //         console.log('scroll up');
    //
    //         moveToPreviousPage();
    //         addColorOnMenu();
    //     } else {
    //         console.log('scroll down');
    //
    //         moveToNextPage();
    //         addColorOnMenu();
    //     }
    // });

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

        if (tag === 7) {
            tag = tag - 3;
        }

        let prevTag = $('#tag' + tag).prev();

        console.log('prevTag', prevTag);

        $(prevTag).click();
    }

    function moveToNextPage() {
        let tag = parseInt($("input[name=tag]:checked").val().slice(3, 5));

        console.log('down', tag);

        // Last page
        if (tag === 10) {
            return;
        }

        // Lead to autobiography
        if (tag === 4) {
            tag = tag + 2;
        }

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

    // About Me - contact info
    $('.imgWrapper').hover(function () {
        $('.avatar').attr('src', 'img/avatar3.png')
    }, function(){
        $('.avatar').attr('src', 'img/avatar.png')
    });

    // About Me - mobile
    $('.text').on('click', function () {
        $('.text').addClass('disable');

        let text = $(this).text();
        let type = $(this).data('type');
        $('.chatList').append('<li class="userInput"><span>' + text + ' </span></li>');

        let inputHeight = 0;
        $('.content').each(function(){
            inputHeight = inputHeight + $(this).height() + 50;
        });

        let RspHeight = 0;
        $('.userInput').each(function(){
            RspHeight = RspHeight + $(this).height() + 50;
        });

        if(inputHeight > 200){
            $('.chatRoom').animate({ scrollTop: `${inputHeight + RspHeight}px` }, 700);
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
            $('.content').each(function(){
                inputHeight = inputHeight + $(this).height() + 50;
            });

            if(inputHeight > 200) {
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