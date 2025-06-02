document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const isExpanded = this.classList.contains('expanded');
            const index = parseInt(this.getAttribute('data-index'));

            cards.forEach(c => {
                c.classList.remove('expanded');
            });

            if (!isExpanded) {
                this.classList.add('expanded');
            }
        });
    });

    // Close expanded card when clicking outside
    document.addEventListener('click', function(event) {
        const isCard = event.target.closest('.card');
        if (!isCard && document.querySelector('.card.expanded')) {
            document.querySelector('.card.expanded').classList.remove('expanded');
        }
    });
});