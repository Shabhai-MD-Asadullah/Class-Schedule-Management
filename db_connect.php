<?php
$host = "localhost";
$user = "root";     // default XAMPP user
$pass = "";         // default XAMPP password
$db   = "teachers"; // your database name

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>
