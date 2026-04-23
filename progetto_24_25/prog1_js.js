$(document).ready(function() {
    
    // GESTIONE SLIDER PER OGNI SEZIONE
    $('.activity-section').each(function() {
        let current = 0;
        const section = $(this);
        const images = section.find('.slide-img');
        const total = images.length;

        // Mostra i tasti solo se ci sono più immagini
        if (total > 1) {
            section.find('.next-btn').click(function() {
                images.eq(current).removeClass('active');
                current = (current + 1) % total;
                images.eq(current).addClass('active');
            });

            section.find('.prev-btn').click(function() {
                images.eq(current).removeClass('active');
                current = (current - 1 + total) % total;
                images.eq(current).addClass('active');
            });
        }
    });

    // ANIMAZIONE RISALITA FLUIDA OTTIMIZZATA
    $('#scroll-to-top').on('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});