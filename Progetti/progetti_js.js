$(document).ready(function() {
    console.log("Sistema di selezione progetti pronto.");

    // Feedback visivo immediato al click solo per i link validi
    $('.year-card:not(.work-in-progress)').on('click', function() {
        $(this).css('opacity', '0.7');
    });

    // Opzionale: impedisce il click se per caso è un tag <a>
    $('.work-in-progress').on('click', function(e) {
        e.preventDefault();
    });
});