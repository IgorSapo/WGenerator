var Saveimg = (function(){

	var init = function(){
		_setUplisteners();
	},
		_setUplisteners = function(){
			$('#mainimage-realinput').on('change', _saveFile)
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
					url:"../app/php/upload.php",
					type:"POST",
					dataType: 'json',
					data:fd,
					processData: false, // не обрабатывать файлы
        			contentType: false, // не отправлять стрингреквест
        			success: function(data){
						    alert( "Прибыли данные: " + data );
						}
				})
				.done(function(answer){
					console.log(answer);
					console.log("выполнено");
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