<?php
//Загрузка изображений на сервер, валидация.

session_start();
$path_folder = "img/";  // путь к файлу

$filename = basename($_FILES[0]["name"]); // имя файла
$id_session = session_id(); // уникализированное имя директории для файлов юзера
$tmp_file = $_FILES[0]["tmp_name"];  // временный файл

$path_file = "../" . $path_folder. $id_session . $filename; // путь и имя будущего файла
$path_url = $path_folder . $id_session . $filename;          // url к будущему файлу

$answer =  array();  // ответ от сервера

if(!is_uploaded_file($tmp_file)){
	$answer['text']	= "Нет файла";
}
else{
	$answer['text']	= "Есть файл";
}

//$imageFileType = pathinfo($path_file, PATHINFO_EXTENSION;
if(!move_uploaded_file($tmp_file, $path_file)){
	 	$answer['status'] = 'error';
}
else{
	   $answer['status'] = 'OK';
        
}

		$answer['filename'] = $filename;
        $answer['tmpfile'] = $tmp_file;
        $answer['path'] = $path_file;
        $answer['url'] = $path_url;

//$imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);
echo json_encode($answer);
?>