$(function () {

    // Scroll
    $(window).bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            console.log('scroll up');
            moveToPreviousPage();
        } else {
            console.log('scroll down');
            moveToNextPage();
        }
    });

    $(window).on("keydown", function (e) {

        console.log("123");

        // Change page when click right arrow and down arrow
        if (e.keyCode === 39 || e.keyCode === 40) {
            console.log('Right/Down arrow key');
            moveToNextPage();
        }

        // Change page when click left arrow and up arrow
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


    $(window).bind('mousewheel', function (e) {
        let num = $('.bbb').data('number');
        // let num = document.getElementById("aaa").getAttribute("data-number");
        let num1 = num * 2 -1;
        let num2 = num * 2;

        console.log('num', num);
        $('.right_arrow' + num).show();

        $('.right_arrow' + num).on('click', function () {

            $('.item' + num1).fadeOut().hide();
            $('.right_arrow' + num).fadeOut().hide();

            $('.item' + num2).fadeIn().show();
            $('.left_arrow' + num).fadeIn().show();
        });

        $('.left_arrow' + num).on('click', function () {

            $('.item' + num2).fadeOut().hide();
            $('.left_arrow' + num).fadeOut().hide();

            $('.item' + num1).fadeIn().show();
            $('.right_arrow' + num).fadeIn().show();
        });
    });

    // Project1
    // $('.right_arrow1').on('click', function(){
    //     $('.item1').fadeOut().hide();
    //     $(this).fadeOut().hide();
    //
    //     $('.item2').fadeIn().show();
    //     $('.left_arrow1').fadeIn().show();
    // });
    //
    // $('.left_arrow1').on('click', function(){
    //     $('.item2').fadeOut().hide();
    //     $('.left_arrow1').fadeOut().hide();
    //
    //     $('.item1').fadeIn().show();
    //     $('.right_arrow1').fadeIn().show();
    // });
    //
    // // Project2
    // $('.right_arrow2').on('click', function(){
    //     $('.item3').fadeOut().hide();
    //     $(this).fadeOut().hide();
    //
    //     $('.item4').fadeIn().show();
    //     $('.left_arrow2').fadeIn().show();
    // });
    //
    // $('.left_arrow2').on('click', function(){
    //     $('.item4').fadeOut().hide();
    //     $('.left_arrow2').fadeOut().hide();
    //
    //     $('.item3').fadeIn().show();
    //     $('.right_arrow2').fadeIn().show();
    // });
    //
    // // Project2
    // $('.right_arrow3').on('click', function(){
    //     $('.item5').fadeOut().hide();
    //     $(this).fadeOut().hide();
    //
    //     $('.item6').fadeIn().show();
    //     $('.left_arrow3').fadeIn().show();
    // });
    //
    // $('.left_arrow3').on('click', function(){
    //     $('.item6').fadeOut().hide();
    //     $('.left_arrow3').fadeOut().hide();
    //
    //     $('.item5').fadeIn().show();
    //     $('.right_arrow3').fadeIn().show();
    // });

});