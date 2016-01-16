<?php
// работаем с библиотекой для обработки изображений
use PHPImageWorkshop\ImageWorkshop;
require_once('PHPImageWorkshop/ImageWorkshop.php');


/*		$pinguLayer = ImageWorkshop::initFromPath(__DIR__.'\..\img\main\ITman.jpg');
		echo $pinguLayer->getWidth().'<br>' ;
		echo $pinguLayer->getHeight();*/

// Параметры
$result_filename = "result.png"; // имя результирующего файла (формат png)
$createFolders = true; // создавать директории при сохранении?
$backgroundColor = transparent; // transparent, only for PNG (otherwise it will be white if set null)
$imageQuality = 80; // useless for GIF, usefull for PNG and JPEG (0 to 100%)


//Входные параметры
$img_main_path = '/../img/main/ITman.jpg';
$img_watmark_path = "/../img/watmark/wm3.png";
$dirout = "/../img";

if(isset($_POST['posx'])) {
		echo $_POST['posx'];
		echo $_POST['posy'];
		echo $_POST['margx'];
		echo $_POST['margy'];
		echo $_POST['opacity'];
		echo $dirout;
	}

/*$posx = filter_input(INPUT_POST, 'coordx');
$posy = filter_input(INPUT_POST, 'coordy');
$padx = filter_input(INPUT_POST, 'marginx');
$pady = filter_input(INPUT_POST, 'marginy');
$opacity = filter_input(INPUT_POST, 'opacity') * 100;*/
$posx = filter_input(INPUT_POST, 'posx');
$posy = filter_input(INPUT_POST, 'posy');;
$margx = filter_input(INPUT_POST, 'margx');
$margy = filter_input(INPUT_POST, 'margy');
$opacity = filter_input(INPUT_POST, 'opacity') * 100;
//$mode = filter_input(INPUT_POST, 'mode'); // tile or not

// открываем картинки
$mainpic = ImageWorkshop::initFromPath(__DIR__.$img_main_path);
$wtmpic = ImageWorkshop::initFromPath(__DIR__.$img_watmark_path);

// параметры файлов
$main_width = $mainpic->getWidth();
$main_height = $mainpic->getHeight();
$wtm_width = $wtmpic->getWidth();
$wtm_height = $wtmpic->getHeight();

// прибавляем отступы к ватермарку
$wmpic_width += $margx;
$wmpic_height += $margy;

$wtmpic->opacity($opacity);

$mainpic->addLayerOnTop($wtmpic, $posx, $posy);


// Saving the result
$dirPath = __DIR__.$dirout;
$createFolders = true;
$backgroundColor = null; // transparent, only for PNG (otherwise it will be white if set null)
$imageQuality = 95; // useless for GIF, usefull for PNG and JPEG (0 to 100%)
  
$mainpic->save($dirPath, $result_filename, $createFolders, $backgroundColor, $imageQuality);


?>