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

if (isset($_GET['id'])) {
    $note_id = intval($_GET['id']);

    // Periksa apakah catatan milik pengguna yang sedang login
    $checkNoteQuery = $conn->prepare("SELECT * FROM notes WHERE id = ? AND user_id = ?");
    $checkNoteQuery->bind_param("ii", $note_id, $user_id);
    $checkNoteQuery->execute();
    $noteResult = $checkNoteQuery->get_result();

    if ($noteResult->num_rows > 0) {
        $note = $noteResult->fetch_assoc();
        $title = $note['title'];
        $content = $note['content'];
    } else {
        echo "Catatan tidak ditemukan atau tidak milik Anda.";
        exit();
    }

    $checkNoteQuery->close();
} else {
    echo "ID catatan tidak diberikan.";
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $content = $_POST['content'];

    // Update catatan
    $updateQuery = $conn->prepare("UPDATE notes SET title = ?, content = ?, updated_at = NOW() WHERE id = ? AND user_id = ?");
    $updateQuery->bind_param("ssii", $title, $content, $note_id, $user_id);

    if ($updateQuery->execute()) {
        header("Location: notes.php");
        exit();
    } else {
        echo "Error: " . $updateQuery->error;
    }

    $updateQuery->close();
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Note</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1 class="form-title">Edit Note</h1>
        <form method="post" action="">
            <div class="input-group">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" value="<?php echo htmlspecialchars($title); ?>" required>
            </div>
            <div class="input-group">
                <label for="content">Content</label>
                <textarea name="content" id="content" required><?php echo htmlspecialchars($content); ?></textarea>
            </div>
            <input type="submit" class="btn" value="Update Note">
        </form>
    </div>
</body>
</html>
