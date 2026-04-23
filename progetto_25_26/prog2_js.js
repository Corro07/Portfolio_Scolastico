$(document).ready(function() {
    
    
    $('#scroll-to-top').on('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Effetto di apparizione per le sezioni
    $('.activity-section').hide().fadeIn(1500);
});