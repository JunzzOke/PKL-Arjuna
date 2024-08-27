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
        // Catatan ada, hapus dari database
        $deleteQuery = $conn->prepare("DELETE FROM notes WHERE id = ?");
        $deleteQuery->bind_param("i", $note_id);

        if ($deleteQuery->execute()) {
            header("Location: notes.php");
            exit();
        } else {
            echo "Error: " . $deleteQuery->error;
        }

        $deleteQuery->close();
    } else {
        echo "Catatan tidak ditemukan atau tidak milik Anda.";
    }

    $checkNoteQuery->close();
}

$conn->close();
?>
