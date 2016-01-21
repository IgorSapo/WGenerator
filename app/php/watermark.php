<?php
namespace abeautifulsite;
use Exception;
require 'simpleimage/SimpleImage.php';

$answer =  array();  // ответ от сервера
//Входные параметры
$img_main_path =__DIR__."/../".$_POST['imgSessionName']; 
//$img_watmark_path = "/img/upload/548.jpg";
$img_watmark_path =__DIR__."/../".$_POST['wmImgSessionName'];
$dirout = "/loadimg/";
$posx = $_POST['wmposX']; 
$posy = $_POST['wmposY']; 
$wmpadx = $_POST['wmpaddingX']; 
$wmpady = $_POST['wmpaddingY']; 
$mode = $_POST['watermark-mode']; 
$opacity = $_POST['opacity'];

$result_filename = "result.jpg";



$imageSize = getimagesize($img_main_path);
$watermarkSize = getimagesize($img_watmark_path);
	$imagewidth = $imageSize[0];
	$imageheight = $imageSize[1];
	$wtwidth = $watermarkSize[0];
	$wtheight = $watermarkSize[1];


if($mode ==="single"){
	$img = new SimpleImage($img_main_path);
			$img->overlay($img_watmark_path, 'top left', $opacity, $posx, $posy);
			$img->save('../loadimg/'.$result_filename);
}else{
		$pozX = $posx;
		$pozY = $posy;
		$marX = $wmpadx;
		$marY = $wmpady;
		$widMain = $imagewidth;
		$heigMain = $imageheight;
		$widWat = $wtwidth;
		$heigWat = $wtheight;
  		$img = new SimpleImage($img_main_path);
  		$newPozX = $pozX;
  		while ($newPozX < $widMain) {
  			$newPozY = $pozY;
  			while ($newPozY < $heigMain) {
  				$img->overlay($img_watmark_path, 'top left', $opacity, $newPozX, $newPozY);
  				$newPozY += $heigWat + $marX;
  			}
  			$newPozX += $widWat + $marY;
  		}
  		$img->save('../loadimg/'.$result_filename);

}

$uploadpath = "../loadimg/result.jpg";
exit($uploadpath);


/*$answer['1'] = $$img_watmark_path;
$answer['2'] = $imageheight;
$answer['3'] = $wtwidth;
$answer['4'] = $wtheight;
$answer['pathimg'] = $img_main_path;



header("Content-Type: application/json");
echo json_encode($answer);*/

?>