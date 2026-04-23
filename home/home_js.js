$(document).ready(function() {
    console.log("Pagina selezione progetti pronta.");

    // Effetto comparsa all'avvio
    $('.year-card').css({
        'opacity': '0',
        'transform': 'translateY(20px)'
    }).each(function(i) {
        $(this).delay(i * 200).animate({
            'opacity': '1',
            'transform': 'translateY(0)'
        }, 600);
    });
});