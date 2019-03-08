(function($) {
    $('.article .date').first().replaceWith("<span class='date'>Latest post</span>");
    $('.article .date').first().addClass('latest');
})(jQuery);
