$(function () {
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
});