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
				fakeinputID = this.dataset['fakeinput'], //fakeinput
				fd = new FormData;

				
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
					console.log(answer.url);
					console.log("выполнено");
					var urlimg = answer.url

					$('.preview-mainimage_image').attr('src',urlimg);
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