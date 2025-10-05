<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // check user
    $sql = "SELECT * FROM signup WHERE TeacherName='$username' LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if ($row = mysqli_fetch_assoc($result)) {
        // password check
        if (password_verify($password, $row['Password'])) {
            echo "<script>
                alert('Welcome $username Sir, You are successfully logged in.');
                window.location.href = 'Teacher_dashboard.html';
            </script>";
        } else {
            echo "<script>
                alert('Incorrect password. Please try again.');
                window.location.href = 'index.html#teacherlogin';
            </script>";
        }
    } else {
        echo "<script>
            alert('You are not registered. Please sign up first.');
            window.location.href = 'index.html#teachersignup';
        </script>";
    }
}
?>
