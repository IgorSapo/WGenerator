<?php

//parse_str($_POST['opacity'], $searcharray);

$answer =  array();  // ответ от сервера

$answer['status'] = 'OK';

// работаем с библиотекой для обработки изображений
use PHPImageWorkshop\ImageWorkshop;
require_once('PHPImageWorkshop/ImageWorkshop.php');

// Параметры
$result_filename = "result.png"; // имя результирующего файла (формат png)
$createFolders = true; // создавать директории при сохранении?
$backgroundColor = transparent; // transparent, only for PNG (otherwise it will be white if set null)
$imageQuality = 80; // useless for GIF, usefull for PNG and JPEG (0 to 100%)


//Входные параметры
$img_main_path = $_POST['imgSessionName']; 
//$img_watmark_path = "/img/upload/548.jpg";
$img_watmark_path = $_POST['wmImgSessionName'];
$dirout = "/loadimg/";
$posx = $_POST['wmposX']; 
$posy = $_POST['wmposY']; 
$padx = $_POST['wmpaddingX']; 
$pady = $_POST['wmpaddingY']; 
$mode = $_POST['watermark-mode']; 
$opacity = $_POST['opacity'] * 100;



//Валидация



// открываем картинки
$mainpic = ImageWorkshop::initFromPath((dirname(__DIR__))."/".$img_main_path);
$wtmpic = ImageWorkshop::initFromPath((dirname(__DIR__))."/".$img_watmark_path);

// параметры файлов
/*$main_width = $mainpic->getWidth();
$main_height = $mainpic->getHeight();
$wtm_width = $wtmpic->getWidth();
$wtm_height = $wtmpic->getHeight();*/

// прибавляем отступы к ватермарку
$wmpic_width += $margx;
$wmpic_height += $margy;

$wtmpic->opacity($opacity);
//$mainpic->addLayerOnTop($wtmpic, 60, 600);
$mainpic->addLayerOnTop($wtmpic, $posx, $posy);


// Saving the result
$dirPath = (dirname(__DIR__))."/".$dirout;
$createFolders = true;
$backgroundColor = null; // transparent, only for PNG (otherwise it will be white if set null)
$imageQuality = 95; // useless for GIF, usefull for PNG and JPEG (0 to 100%)
  
$mainpic->save($dirPath, $result_filename, $createFolders, $backgroundColor, $imageQuality);
$uploadpath = "../loadimg/result.png";
// выводим переменные
$answer['pathimg'] = $img_main_path;
$answer['pasx'] = $posx;
$answer['pasy'] = $posy;
$answer['padx'] = $padx;
$answer['pady'] = $pady;
$answer['mode'] = $mode;
$answer['syspath'] = $wtm_width;
//$answer['upladpath'] = $uploadpath;
exit($uploadpath);

?>