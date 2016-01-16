$(document).ready(function() {

    // var mainImageRealWidth = $("preview-mainarea_image").naturalHeight;
    // console.log($(this).prop('naturalHeight'));
    // console.log(mainImageRealWidth);

// $(function () {
//     $('#fileupload').fileupload({
//         dataType: 'json',
//         done: function (e, data) {
//             $.each(data.result.files, function (index, file) {
//                 $('<p/>').text(file.name).appendTo(document.body);
//             });
//         }
//     });
// });


// $(function () {
// $('#imageupload-realinput').fileupload({

//         url: 'server/php/',

//         add: function(e, data) {

//             console.log('add');
//             data.submit();

//         },

//         done: function(e, data) {
              
//               var img = $('<img></img>'),
//                   uploadImg = data.result.files[0];

//               img.attr('src', uploadImg.url);
//               img.appendTo('.previewarea');
//         }
//     });
// });




var mainImageRealWidth = $(".preview-mainimage_image").prop('naturalWidth');
    mainImageRealHeight = $(".preview-mainimage_image").prop('naturalHeight');
    mainImageScreenWidth = $(".preview-mainimage_image").prop('clientWidth');
    mainImageScreenHeight = $(".preview-mainimage_image").prop('clientHeight');
    wmRealWidth = $(".preview-watermark_image").prop('naturalWidth');
    wmRealHeight = $(".preview-watermark_image").prop('naturalHeight');

    test = "5";
    console.log("Initial value is " + test);

    scale = (mainImageScreenWidth / mainImageRealWidth).toFixed(4);

    countWidth = Math.round(mainImageRealWidth / wmRealWidth) + 1;
    countHeight = Math.round(mainImageRealHeight / wmRealHeight) + 1;
    cloneQuantity = (countWidth * countHeight) - 1;
    //console.log(cloneQuantity);
    // console.log(mainImageRealWidth);
    // console.log(mainImageRealHeight);


    // console.log(canvasRealWidth);
    // console.log(canvasRealHeight);

    var getScreenDimension = function(realDimension) {
        return Math.round(realDimension * scale);
    }

    var getRealDimension = function(screenDimension) {
        return Math.round(screenDimension / scale);
    }

    canvasRealWidth = mainImageRealWidth + (wmRealWidth * 2) ;
    canvasRealHeight = mainImageRealHeight + (wmRealHeight * 2);
    canvasScreenWidth = getScreenDimension(canvasRealWidth);
    canvasScreenHeight = getScreenDimension(canvasRealHeight);

    $(".wmCanvasWidth-input_hidden").val(canvasRealWidth);
    $(".wmCanvasHeight-input_hidden").val(canvasRealHeight);

    numberOfClones = (Math.round((canvasRealWidth * canvasRealHeight) / (wmRealWidth * wmRealWidth)))*2;
    console.log(numberOfClones);

    containmentScreenWidth = (mainImageScreenWidth + (canvasScreenWidth * 1.9));
    containmentScreenHeight = (mainImageScreenHeight + (canvasScreenHeight * 1.9));
// console.log(containmentScreenWidth);
// console.log(containmentScreenHeight);
    
    containmentScreenLeft = -0.5 * (containmentScreenWidth - mainImageScreenWidth);
    containmentScreenTop = -0.5 * (containmentScreenHeight - mainImageScreenHeight);
console.log(containmentScreenLeft);
console.log(containmentScreenTop);

$(".position-control_multiple").css ('display', 'none');




    //canvasScreenWidth = 

    // var populateWm = function(cloneQuantity) {

    // };
    // var depopulateWm = null;



// $(".preview-wmarea").css('width', canvasScreenWidth);
// $(".preview-wmarea").css('height', canvasScreenHeight);


            // console.log(i);
            // console.log(cloneQuantity);
            // clone = $(".preview-watermark_image").clone();
            // console.log(clone);
            // $(".preview-wmarea").append(clone);
            
            // .removeClass('preview-watermark_image')
            // .addClass('preview-watermark_image_clone')
            // .appendTo($(".preview-wmarea"))
        






    defaultWmPaddingX = 0;
    defaultWmPaddingY = 0;
    defaultWmX = 0;
    defaultWmY = 0;

    currentWmPaddingX = 0;
    currentWmPaddingY = 0;
    currentWmX = 0;
    currentWmY = 0;



    wmScreenWidth = getScreenDimension(wmRealWidth);
    wmScreenHeight = getScreenDimension(wmRealHeight);


    $(".preview-watermark_image").css ({
        width: wmScreenWidth,
        height: wmScreenHeight
    });










$(".incremental-ipnut_wmpaddingX").val(defaultWmPaddingX);
$(".incremental-ipnut_wmpaddingY").val(defaultWmPaddingY);
$(".incremental-ipnut_wmposX").val(defaultWmX);
$(".incremental-ipnut_wmposY").val(defaultWmY);


// console.log($(".preview-watermark_image").css("margin-right"));
// console.log($(".preview-watermark_image").css("margin-bottom"));


var leftTop = {
        screenX: 0,
        screenY: 0,
        realX: 0,
        realY: 0
};

var leftCenter = {
        screenX: 0,
        screenY: 0.5 * (mainImageScreenHeight - wmScreenHeight),
        realX: 0,
        realY: getRealDimension(0.5 * (mainImageScreenHeight - wmScreenHeight))
};

var leftBottom = {
        screenX: 0,
        screenY: mainImageScreenHeight - wmScreenHeight,
        realX: 0,
        realY: getRealDimension(mainImageScreenHeight - wmScreenHeight)
};

var centerTop = {
        screenX: 0.5 * (mainImageScreenWidth - wmScreenWidth),
        screenY: 0,
        realX: getRealDimension(0.5 * (mainImageScreenWidth - wmScreenWidth)),
        realY: 0
};

var centerCenter = {
        screenX: 0.5 * (mainImageScreenWidth - wmScreenWidth),
        screenY: 0.5 * (mainImageScreenHeight - wmScreenHeight),
        realX: getRealDimension(0.5 * (mainImageScreenWidth - wmScreenWidth)),
        realY: getRealDimension(0.5 * (mainImageScreenHeight - wmScreenHeight))
};

var centerBottom = {
        screenX: 0.5 * (mainImageScreenWidth - wmScreenWidth),
        screenY: mainImageScreenHeight - wmScreenHeight,
        realX: getRealDimension(0.5 * (mainImageScreenWidth - wmScreenWidth)),
        realY: getRealDimension(mainImageScreenHeight - wmScreenHeight)
};

var rightTop = {
        screenX: mainImageScreenWidth - wmScreenWidth,
        screenY: 0,
        realX: getRealDimension(mainImageScreenWidth - wmScreenWidth),
        realY: 0
};

var rightCenter = {
        screenX: mainImageScreenWidth - wmScreenWidth,
        screenY: 0.5 * (mainImageScreenHeight - wmScreenHeight),
        realX: getRealDimension(mainImageScreenWidth - wmScreenWidth),
        realY: getRealDimension(0.5 * (mainImageScreenHeight - wmScreenHeight))
};

var rightBottom = {
        screenX: mainImageScreenWidth - wmScreenWidth,
        screenY: mainImageScreenHeight - wmScreenHeight,
        realX: getRealDimension(mainImageScreenWidth - wmScreenWidth),
        realY: getRealDimension(mainImageScreenHeight - wmScreenHeight)
};

function setFixedCoordinates(fixedPosition) {
    console.log(fixedPosition);
    $(".preview-wmarea").css({
        left: fixedPosition.screenX + "px",
        top: fixedPosition.screenY + "px"
    }),
    $(".incremental-ipnut_wmposX").val(fixedPosition.realX),
    $(".incremental-ipnut_wmposY").val(fixedPosition.realY) 
};

$(".left-top").on('click', function() {
    setFixedCoordinates(leftTop)
});

$(".left-center").on('click', function() {
    setFixedCoordinates(leftCenter)
    // $(".preview-wmarea").css({
    //     left: leftCenter.screenX + "px",
    //     top: leftCenter.screenY + "px"
    // }),
    // $(".incremental-ipnut_wmposX").val(leftCenter.realX),
    // $(".incremental-ipnut_wmposY").val(leftCenter.realY)    
    /* Act on the event */
});

$(".left-bottom").on('click', function() {
    setFixedCoordinates(leftBottom)
});

$(".center-top").on('click', function() {
    setFixedCoordinates(centerTop)
});

$(".center-center").on('click', function() {
    setFixedCoordinates(centerCenter)
});

$(".center-bottom").on('click', function() {
    setFixedCoordinates(centerBottom)
});

$(".right-top").on('click', function() {
    setFixedCoordinates(rightTop)
});

$(".right-center").on('click', function() {
    setFixedCoordinates(rightCenter)
});

$(".right-bottom").on('click', function() {
    setFixedCoordinates(rightBottom)
});

$(".matrix-item").on('click', function() {
    $this = $(this),
    $this.addClass('matrix-item_active'),
    $this.siblings().removeClass('matrix-item_active')
    /* Act on the event */
});

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

    $( ".incremental-input" ).spinner({
        // min: 0
    });

    $(".incremental-ipnut_wmposX").on('spin', function(event, ui) {
        var currentVal = (Math.round(ui.value*scale)) + 'px';
        $(".preview-wmarea").css('left', currentVal);
        $(".matrix-item").removeClass('matrix-item_active')
    });

    $(".incremental-ipnut_wmposY").on('spin', function(event, ui) {
        var currentVal = (Math.round(ui.value * scale)) + 'px';
        $(".preview-wmarea").css('top', currentVal);
        $(".matrix-item").removeClass('matrix-item_active')
    });

    $(".incremental-ipnut_wmpaddingX").on('spin', function(event, ui) {
        // var currentWmPaddingX = parseInt($(".preview-watermark_image").css("margin-right"));
        // increasedWmPaddingX = (currentWmPaddingX + 1) + "px";
        // console.log(increasedWmPaddingX);
        // $(".preview-watermark_image").css("margin-right","increasedWmPaddingX")

        var currentVal = (Math.round(ui.value*scale)) + 'px';
        $(".preview-watermark_image").css('margin-right', currentVal);
        currentWmPaddingX = currentVal;
        $(".horpadding").css('width', ui.value)


        // $(".matrix-item").removeClass('matrix-item_active')
    });

    $(".incremental-ipnut_wmpaddingY").on('spin', function(event, ui) {
        // var currentVal = (Math.round(ui.value*scale)) + 'px';
        //$(".preview-wmarea").css('left', currentVal);
        //$(".matrix-item").removeClass('matrix-item_active')

        var currentVal = (Math.round(ui.value*scale)) + 'px';
        $(".preview-watermark_image").css('margin-bottom', currentVal);
        currentWmPaddingY = currentVal;
        $(".verpadding").css('height', ui.value)

    });

    



    $( "#draggable" ).draggable({
        containment: $(".preview-mainarea_containment"),
        drag: function() {
            // console.log(parseInt($(".preview-wmarea").css("top"))),
            // console.log(parseInt($(".preview-wmarea").css("left")))
            visualX = parseInt($(".preview-wmarea").css("left")),
            coordX = Math.round(visualX / scale),
            visualY = parseInt($(".preview-wmarea").css("top")),
            coordY = Math.round(visualY / scale),

            $(".incremental-ipnut_wmposX").val(coordX),
            $(".incremental-ipnut_wmposY").val(coordY),
            $(".matrix-item").removeClass('matrix-item_active')
        }
    });




$(".mode-switch-label_multiple").on('click', function() {
    $(".position-control_multiple").css ('display', 'flex');
    $(".position-control_single").css ('display', 'none');
    $(".preview-wmarea").css('width', canvasScreenWidth);
    $(".preview-wmarea").css('height', canvasScreenHeight);

    for (var i = 0; i < numberOfClones; i++) {
        $(".preview-watermark_image").clone().first().appendTo($(".preview-wmarea"))
    };

    $(".preview-mainarea_containment").css('width', containmentScreenWidth + "px");
    $(".preview-mainarea_containment").css('height', containmentScreenHeight + "px");
    $(".preview-mainarea_containment").css('left', containmentScreenLeft + 'px');
    $(".preview-mainarea_containment").css('top', containmentScreenTop + 'px');

    test = "Multiple";
    console.log("Test was changed to" + test);
});




$(".mode-switch-label_single").on('click', function() {
    $(".position-control_multiple").css ('display', 'none');
    $(".position-control_single").css ('display', 'flex');

    $(".preview-wmarea").css({
        'width': "auto",
        'height': "auto",
        'left': 0,
        'top': 0,
    });

    $('.preview-watermark_image').not(':first').remove();
    $('.preview-mainarea_containment').css({
        "width": "100%",
        "height": "100%",
        "left": 0,
        "top": 0
    })

    test = "Single";
    console.log("Test was changed to" + test);
});


    var ajaxSubmit = function (submittedForm) { // Sumbit _valid_ form via ajax
        console.log("Вызвана функция сабмита через ajax");
        var str = $(submittedForm).serialize();
        var urlPhp = $(submittedForm).attr("action");
        console.log(urlPhp);
        $.ajax ({
                type: "POST",
                cache: false,
                url: urlPhp,
                data: str,
                success: function(serverResponse) {
                    console.log(serverResponse);
                }
            });
        $(submittedForm)[0].reset();
    };

    $(".button_submit").on('click', function(event) {
        event.preventDefault();
        console.log("Submit prevented");
        var str = $(".wmsettings").serialize();
        var urlPhp = $(".wmsettings").attr("action");
        $.ajax ({
                type: "POST",
                cache: false,
                url: urlPhp,
                data: str //,
                // success: function(serverResponse) {
                //     console.log(serverResponse);
                // }
            });
        console.log(str);
        /* Act on the event */
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

    // var $inputFile = $('#imageupload-realinput');
    // $inputFile.on('change', function(){
    //     var filepath = $inputFile.val(),
    //     $input = $inputFile.siblings("#imageupload-fakeinput")

    //     filepath = filepath.replace(/c:\\fakepath\\/gmi, "");
    //     $input.val(filepath);
    // });

    // var $inputFile = $('#imageupload-realinput');
    $('.imageupload-realinput').on('change', function(){
        $this = $(this);
        console.log($this);
        var filepath = $this.val(),
        $input = $this.parent().find(".imageupload-fakeinput");
        console.log($this.parent());
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