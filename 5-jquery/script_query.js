$(document).ready(function(){
    $('#azul').click(function(){
        $('p')
            .css("color", "blue")
            .fadeOut('fast')
            .delay(1000)
            .fadeIn('slow')
            .addClass('green');
    });
    $('#vermelho').click(function(){
        $('p')
            .css("color", "red")
            .fadeOut('slow')
            .delay(1000)
            .fadeIn('fast');
        $('#mensagem')
            .css({color:'red', border:'1px solid red', backgroundColor:'#F08080'})
            .text("Cor alterada com sucesso")
            .fadeOut(3000)
        $('button').removeClass('red');
    });
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
    });
    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
    });
});