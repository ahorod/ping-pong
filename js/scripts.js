
$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
        event.preventDefault();
        var number = $("#input").val();
        var result = pingPong(number);
        $("#game").text(result);

    });
});
