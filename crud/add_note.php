<?php
session_start();
include("connect.php");

if (!isset($_SESSION['email'])) {
    header("Location: index.php");
    exit();
}

// Ambil user_id berdasarkan email pengguna yang sedang login
$email = $_SESSION['email'];
$query = $conn->prepare("SELECT id FROM users WHERE email = ?");
$query->bind_param("s", $email);
$query->execute();
$result = $query->get_result();
$user = $result->fetch_assoc();
$user_id = $user['id'];

$query->close();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $created_at = date('Y-m-d H:i:s');
    $updated_at = $created_at;

    $query = $conn->prepare("INSERT INTO notes (user_id, title, content, created_at, updated_at) VALUES (?, ?, ?, ?, ?)");
    $query->bind_param("issss", $user_id, $title, $content, $created_at, $updated_at);

    if ($query->execute()) {
        header("Location: notes.php");
        exit();
    } else {
        echo "Error: " . $query->error;
    }

    $query->close();
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Note</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Add a New Note</h1>
        <form method="POST">
            <div class="input-group">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" required>
            </div>
            <div class="input-group">
                <label for="content">Content</label>
                <textarea id="content" name="content" required></textarea>
            </div>
            <input type="submit" class="btn" value="Add Note">
        </form>
        <br>
        <a href="notes.php" class="btn">Back to Notes</a>
    </div>
</body>
</html>
