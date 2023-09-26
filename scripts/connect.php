<?php
$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=module_11_bios", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $sql = "ADD `webshopContent` SET `ID`='$id',`name`='$name',`price`='$price',`inch`='$inch',`resolution`='$res',`screenType`='$screen',`sound`='$sound',`hertz`='$hertz' WHERE ID = $id";

  // Prepare statement
  $stmt = $conn->prepare($sql);

  // execute the query
  $stmt->execute();

} catch (PDOException $e) {
}