<?php
//Загрузка изображений на сервер, валидация.

session_start();
$path_folder = "upload/";  // путь к файлу
$maxsize = 1000000;
$filename = basename($_FILES[0]["name"]); // имя файла
$typefile = $_FILES[0]["type"];
$id_session = session_id(); // уникализированное имя директории для файлов юзера
$tmp_file = $_FILES[0]["tmp_name"];  // временный файл

$path_file = "../" . $path_folder. $id_session . $filename; // путь и имя будущего файла
$path_url = $path_folder . $id_session . $filename;          // url к будущему файлу

$answer =  array();  // ответ от сервера

$restype = array("image/jpeg","image/png", "image/gif"); // разрешенные типы файлов

if(!in_array($typefile,$restype) ) {
    $answer['status'] = 'error';
    $answer['text']	= "Тип файла не поддерживается";
}else{
	if(!is_uploaded_file($tmp_file)){
	$answer['text']	= "Нет файла";
	}
	else{
		$answer['text']	= "Есть файл";

		if($_FILES[0]["size"] > $maxsize){
			$answer['status'] = 'error';
			$answer['text']	= "Превышен размер файла";
		}
		else{
			if(!move_uploaded_file($tmp_file, $path_file)){
			 	$answer['status'] = 'error';
			}
			else{
				$answer['status'] = 'OK';
				$answer['filename'] = $filename;
	    		$answer['tmpfile'] = $tmp_file;
	    		$answer['path'] = $path_file;
	    		$answer['size'] = $_FILES[0]["size"];
	   			$answer['url'] = $path_url;	        
	   			$answer['typefile'] = $typefile;
				}
			}
	}

}
echo json_encode($answer);
?>