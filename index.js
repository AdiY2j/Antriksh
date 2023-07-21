$(document).ready(function () {
    $('.dropdown-content a').click(function (e) {
        e.preventDefault();
        var urlPage = "http://127.0.0.1:5500/html" + $(this).attr('href');
        $.ajax({
            url: urlPage, success: function (result) {
            $(".main-content").html(result);
          }});
    });
});