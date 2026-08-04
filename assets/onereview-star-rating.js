document.querySelectorAll('.onereview-rating').forEach(function (starRating) {
    if(document.querySelector('.onereview-summary') !== null) {
        starRating.addEventListener('click', function () {
            document.querySelector('.onereview-summary').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});