$(document).ready(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('p').fadeOut('fast');
        $('p').delay(1000);
        $('p').fadeIn('slow');
    });
    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('p').fadeOut('slow');
        $('p').delay(1000);
        $('p').fadeIn('fast');
    });
});