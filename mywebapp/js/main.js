$(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/mywebapp/indexHandler.php',
            data: $('form').serialize(),
            success: function (response) {
                console.log(response);
                alert('form was submitted');
            }
        });
    });
});