$(document).ready(function() {

    $("#imageupload-realinput").on('change', function(event) {
        event.preventDefault();

        if (!this.files[0]) {
            console.log("Не выбран файл для загрузки");
            return;
        };

        var
            input = this,    // текущий инпут
            imgID = this.dataset['img'],  // id изображения, соответствующего инпуту
            realinputID = this.dataset['realinput'], // id  инпута, соответствующего текщему
            data = new FormData();  // данные для запроса


        preloader.start();

        // сформировать данные для запроса
        data.append(0, this.files[0]);
        data.append('uploadDir', app.UPLOAD_DIR);
        data.append('maxSize', app.FILE_MAX_SIZE);
        data.append('maxWidth', app[imgID].container.width);
        data.append('maxHeight', app[imgID].container.height);

        // выполнить ajax-запрос
        $.ajax({
            url: app.URL_UPLOAD_REQUEST,
            type: 'POST',
            dataType: 'json',
            data: data,
            processData: false, // не обрабатывать файлы
            contentType: false  // установить в false, т.к. jQuery отправит серверу query string request
        })

        .done( function(answer) {
            if (answer.status === 'OK') {

            // изменить текст фэйкового инпута на имя сохраненного файла
            $('#'+realinputID).text(answer.filename);

            // сохраняем данные картинки в общих переменных
            app[imgID].url = answer.url;
            app[imgID].filename = answer.filename;
            app[imgID].width = answer.width;
            app[imgID].height = answer.height;
    $( "#slider-range" ).slider({
        range: "min",
        min: 0,
        max: 1,
        step: 0.01,
        value: 0.5,
        slide: function(event, ui){
            $( "#opacityvalue" ).val( ui.value );
            $(".preview-wmarea").css('opacity', ui.value);
            // _changeWmOpacity();
        }
      // slide: function( event, ui ) {
      //   // $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      //   $( "#minprice" ).val( ui.values[ 0 ] + " руб." );
      //   $( "#maxprice" ).val( ui.values[ 1 ] + " руб." );
      // }
    });
    // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //   " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    // $( "#minprice" ).val( $( "#slider-range" ).slider( "values", 0 ) + " руб.");
    // $( "#maxprice" ).val( $( "#slider-range" ).slider( "values", 1 ) + " руб.");

    $( ".incremental-input" ).spinner ({
        min: 0
    });

    $( "#draggable" ).draggable({
        containment: $(".preview-mainarea")
    });

    // var $inputFile = $('#imageupload-realinput');
    
    // $inputFile.on('change', function(){
    //         var filepath = $inputFile.val(),
    //         $input = $('#imageupload-fakeinput');
        
    //         filepath = filepath.replace(/c:\\fakepath\\/gmi, "");
    //         $input.val(filepath);
    //         $input.focus();
    //         $inputFile.focus();
    // });

    var $inputFile = $('.imageupload-realinput');
    $inputFile.on('change', function(){
        var filepath = $inputFile.val(),
        $input = $inputFile.siblings(".imageupload-fakeinput")

        filepath = filepath.replace(/c:\\fakepath\\/gmi, "");
        $input.val(filepath);
    });

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

