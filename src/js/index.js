$(function () {

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
            flag = false
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

    $('.imgWrapper').hover(function () {
        $('.avatar').attr('src', 'img/avatar3.png')
    }, function(){
        $('.avatar').attr('src', 'img/avatar.png')
    });


    // About Me
    $('.text').on('click', function () {
        let text = $(this).text();
        let type = $(this).data('type');
        $('.chatList').append('<li class="userInput"><span>' + text + ' </span></li>');

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
            $('.chatList').append('<li><span>' + response + '</span></li>');
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

    // Education language chart
    Highcharts.chart('language-radar-diagram', {
        chart: {
            polar: true,
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Languages'
        },
        pane: {
            startAngle: 0,
            endAngle: 360
        },
        xAxis: {
            type: 'category',
            tickInterval: 1,
            categories: ['English', 'German', 'Mandarin'],
            min: 0,
            max: 3,
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                formatter: function () {
                    return this.value
                }
            },
        },
        tooltip: {
            shared: true,
            useHTML: true,
            headerFormat: '<div class="newTip"><b>{point.key}</b>' + '<br/>',
            pointFormat: '{point.y} / 5.0',
            footerFormat: '</div>',
            valueDecimals: 1
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            min: 0,
            max: 5,
            tickInterval: 1,
            minorTickInterval: 0.5,
            showLastLabel: 'true',
            labels: {
                x: 5,
                style: {
                    color: '#000',
                    textShadow: '1px 1px 0px #fff',
                    display: "inline-block"
                }
            },

        },
        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 1,

            },
            column: {
                pointPadding: 0,
                groupPadding: 0
            }
        },
        series: [{
            type: 'area',
            name: 'Languages',
            data: [4.5, 1.5, 5],
            pointPlacement: "on"
        }]
    });

    // Education ability chart
    Highcharts.chart('ability-radar-diagram', {
        chart: {
            polar: true,
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Ability'
        },
        pane: {
            startAngle: 0,
            endAngle: 360
        },
        xAxis: {
            type: 'category',
            tickInterval: 1,
            categories: ['Creativity', 'Concentration', 'Perseverance', 'Imagination'],
            min: 0,
            max: 4,
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                formatter: function () {
                    return this.value
                }
            },
        },
        tooltip: {
            shared: true,
            useHTML: true,
            headerFormat: '<div class="newTip"><b>{point.key}</b>' + '<br/>',
            pointFormat: '{point.y} / 5.0',
            footerFormat: '</div>',
            valueDecimals: 1
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            min: 0,
            max: 5,
            tickInterval: 1,
            minorTickInterval: 0.5,
            showLastLabel: 'true',
            labels: {
                x: 5,
                style: {
                    color: '#000',
                    textShadow: '1px 1px 0px #fff',
                    display: "inline-block"
                }
            },

        },
        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 1,
            },
            column: {
                pointPadding: 0,
                groupPadding: 0
            }
        },
        series: [{
            type: 'area',
            name: 'Ability',
            data: [4.5, 1.5, 5, 3.5],
            pointPlacement: "on"
        }]
    });

    $('rect.highcharts-background[fill="#ffffff"]').attr("fill", "#fff");

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