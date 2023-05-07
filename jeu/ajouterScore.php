<?php
$nom = $_POST['monNom'];
$score = $_POST['monScore'];
$data = $nom . "," . $score . "\n";
$file = 'scores.txt';
file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
?>
