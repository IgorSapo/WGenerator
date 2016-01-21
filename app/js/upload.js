var Saveimg = (function(){

	var init = function(){
		_setUplisteners();
	},
		_setUplisteners = function(){
			$('.imageupload-realinput').on('change', _saveFile)
		},

		_saveFile = function(event){

			event.preventDefault();

			if (!this.files[0]) {
	            console.log("Не выбран файл для загрузки");
	            return;
	        };

			var inptfile = this,
				imgID = this.dataset['img'], // id изображения
				fd = new FormData;
				imgClass = this.getAttribute('data-imgclass');
				console.log(imgClass);

				
			fd.append(0, this.files[0]);
			//fd.append('img', $inptfile.prop('files')[0]);

				$.ajax({
					url:"php/upload.php",
					type:"POST",
					dataType: 'json',
					data:fd,
					processData: false, // не обрабатывать файлы
        			contentType: false // не отправлять стрингреквест
				})
				.done(function(answer){
					console.log(answer);
					if(answer.status ==="OK"){
						console.log("выполнено");
						var urlimg = answer.url

						if (imgClass == "mainimage") {
							$('.preview-mainimage_image').attr('src',urlimg);
							$('#imgSessionName').val(urlimg);
						} 

						else if (imgClass == "watermark") {
							$('.preview-watermark_image').attr('src',urlimg);
							$('#wmImgSessionName').val(urlimg);
						}
					}else if(answer.text ==="Превышен размер файла"){
						console.log('Превышен размер файла');
					}else if(answer.text ==="Тип файла не поддерживается"){
						console.log('Тип файла не поддерживается');
					}
				})
				.fail(function(answer){
					console.log(answer);
					console.log("ошибка");
				});


		};
		return{
			init:init
		}

})();


$(document).ready(function(){
	Saveimg.init();
});