<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirmpassword = $_POST['confirmpassword'];

    // validation
    if (empty($username) || empty($password) || empty($confirmpassword)) {
        echo "<script>alert('All fields are required.'); window.history.back();</script>";
        exit;
    }

    if ($password !== $confirmpassword) {
        echo "<script>alert('Passwords do not match. Please try again.'); window.history.back();</script>";
        exit;
    }

    // hash the password for security
    $hashed = password_hash($password, PASSWORD_DEFAULT);

    // IMPORTANT: Match your exact column names here
    $sql = "INSERT INTO signup (TeacherName, Password) VALUES ('$username', '$hashed')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>
            alert('Welcome $username Sir, You are successfully signed up.');
            window.location.href = 'Teacher_dashboard.html';
        </script>";
        exit;
    } else {
        echo '<script>alert("Error inserting data: ' . mysqli_error($conn) . '"); window.history.back();</script>';
    }
}
?>
