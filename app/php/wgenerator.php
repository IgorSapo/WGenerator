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
$wmpadx = $_POST['wmpaddingX']; 
$wmpady = $_POST['wmpaddingY']; 
$mode = $_POST['watermark-mode']; 
$opacity = $_POST['opacity'] * 100;
<<<<<<< HEAD
=======

>>>>>>> 87a6330d6d36d3a872549d053a4e1b4579c5b33e


// открываем картинки
$mainpic = ImageWorkshop::initFromPath((dirname(__DIR__))."/".$img_main_path);
$wtmpic = ImageWorkshop::initFromPath((dirname(__DIR__))."/".$img_watmark_path);

// параметры файлов
$main_width = $mainpic->getWidth();
$main_height = $mainpic->getHeight();
$wtm_width = $wtmpic->getWidth();
$wtm_height = $wtmpic->getHeight();


<<<<<<< HEAD
// прибавляем отступы к ватермарку
/*$wmpic_width += $margx;
$wmpic_height += $margy;*/

$wtmpic->opacity($opacity);
//$mainpic->addLayerOnTop($wtmpic, 60, 600);
=======

$wtmpic->opacity($opacity);
>>>>>>> 87a6330d6d36d3a872549d053a4e1b4579c5b33e
$mainpic->addLayerOnTop($wtmpic, $posx, $posy);

/*-----------------------накладываем сетку---------------------------*/
if($mode == "multiple"){
    // прибавляем отступы к ватермарку
    $wtm_width += $wmpadx;
    $wtm_height += $wmpady;

    /*if($posx >= 0){
            $laywidth = $posx-$main_width;
            $colwtmx = ceil($laywidth/$wtm_width);
    }
    if($posy >= 0){
            $layheight = $posy-$main_width;
            $colwtmy = ceil($layheight/$wtm_height);
    }*/

    // создаём прозрачный слой для замощения
    $layer = ImageWorkshop::initVirginLayer($wtm_width, $wtm_height);
        // создаём прозрачный слой высотой в 1 вотермарк
    $row = ImageWorkshop::initVirginLayer($wtm_width, $wtm_height);
    // наложение
       /* $tile_x = 0;
        $tile_y = 0;
        $x=0;
        $y=0;

        while ($x++<$colwtmx) {
            $row->addLayer(1, $wtmpic, $tile_x, 0, "LT");
            $row->mergeAll();
            $tile_x += $wmpic_width;
        }

        while ($y++<$colwtmy) {
            $layer->addLayer(1, $row, 0, $tile_y, "LT");
            $layer->mergeAll();
            $tile_y += $wmpic_height;
        }*/
    $layer->addLayer(1, $wtmpic, 0, 0);

    $mainpic = clone($layer);
}


/*-----------------------конце сетки---------------------------*/

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
$answer['mode'] = $mode;
$answer['syspath'] = $wtm_width;
//$answer['upladpath'] = $uploadpath;
exit($uploadpath);
<<<<<<< HEAD
=======
//exit($answer);

>>>>>>> 87a6330d6d36d3a872549d053a4e1b4579c5b33e
?>