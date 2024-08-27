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

// Ambil catatan berdasarkan user_id
$query = $conn->prepare("SELECT * FROM notes WHERE user_id = ?");
$query->bind_param("i", $user_id);
$query->execute();
$result = $query->get_result();
$notes = $result->fetch_all(MYSQLI_ASSOC);

$query->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Notes</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Your Notes</h1>
        <div class="notes">
            <?php foreach ($notes as $note): ?>
                <div class="note">
                    <h2><?php echo htmlspecialchars($note['title']); ?></h2>
                    <p><?php echo htmlspecialchars($note['content']); ?></p>
                    <a href="edit_note.php?id=<?php echo $note['id']; ?>" class="btn">Edit</a>
                    <a href="delete_note.php?id=<?php echo $note['id']; ?>" class="btn">Delete</a>
                </div>
            <?php endforeach; ?>
        </div>
        <a href="add_note.php" class="btn">Add Note</a>
        <br><br>
        <a href="homepage.php" class="btn">Back to Homepage</a>
    </div>
</body>
</html>
