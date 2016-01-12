$(document).ready(function() {

    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 25000,
      step: 100,
      values: [ 1000, 13000 ],
      slide: function( event, ui ) {
        // $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $( "#minprice" ).val( ui.values[ 0 ] + " руб." );
        $( "#maxprice" ).val( ui.values[ 1 ] + " руб." );
      }
    });
    // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //   " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    $( "#minprice" ).val( $( "#slider-range" ).slider( "values", 0 ) + " руб.");
    $( "#maxprice" ).val( $( "#slider-range" ).slider( "values", 1 ) + " руб.");

    $('.product-slider__min-image').on('click', function(){
    var $this = $(this),
        imgPath = $this.attr('src'),
        mainImage = $this.closest('.image_gallery').find('.product-slider__main-image');

    mainImage.attr('src', imgPath);
    $this.closest('.product-slider__min-image-item')
        .addClass('product-slider__min-image-item_active')
        .siblings()
        .removeClass('product-slider__min-image-item_active')
    });

    $(function(){
      $(".disclaimer-text").children().addClass("dontsplit");
      $(".disclaimer-text").columnize({columns: 2});
    });

    setTimeout(function() {
      $('select').styler();
    }, 100);
    // $(function() {
    //   $('select').styler();
    // });

    (function(){
    $('.view-switch-radio').on('change', function (e) {
        // e.preventDefault();

        var $this = $(this),
            view = $this.data('view'),
            sortItem = $this.closest('.sort__item');

        $('.list-wrapper').removeClass('detailed_list tile simple_list')
            .addClass(view);

        sortItem.addClass('active')
            .siblings()
            .removeClass('active')
    });
})();

(function(){
    $('.reset_checkboxes').on('click', function (e) {
        var $this = $(this),
        formToClear = $this.closest('.accordion-section-content');
        formToClear.find('input[type="checkbox"]').removeAttr('checked');
    });
})();

})