<?php
$file = 'scores.txt';
$data = file($file);

echo "<table>";
echo "<tr><th>Nom</th><th>Score</th></tr>";

foreach ($data as $line) {
  $fields = explode(",", $line);
  echo "<tr><td>" . $fields[0] . "</td><td>" . $fields[1] . "</td></tr>";
}

echo "</table>";
?>
