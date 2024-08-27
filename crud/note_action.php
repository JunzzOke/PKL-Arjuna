<?php
session_start();
include("connect.php");

if (!isset($_SESSION['email'])) {
    header("Location: index.php");
    exit();
}

$email = $_SESSION['email'];

if (isset($_POST['title']) && isset($_POST['content'])) {
    $title = $_POST['title'];
    $content = $_POST['content'];

    if (isset($_POST['note_id']) && !empty($_POST['note_id'])) {
        // Edit note
        $note_id = $_POST['note_id'];
        $query = $conn->prepare("UPDATE notes SET title = ?, content = ? WHERE id = ? AND user_email = ?");
        $query->bind_param("ssis", $title, $content, $note_id, $email);
    } else {
        // Add new note
        $query = $conn->prepare("INSERT INTO notes (title, content, user_email) VALUES (?, ?, ?)");
        $query->bind_param("sss", $title, $content, $email);
    }

    if ($query->execute()) {
        header("Location: notes.php");
        exit();
    } else {
        echo "Error: " . $conn->error;
    }

    $query->close();
} elseif (isset($_GET['action']) && $_GET['action'] === 'delete' && isset($_GET['id'])) {
    // Delete note
    $note_id = $_GET['id'];
    $query = $conn->prepare("DELETE FROM notes WHERE id = ? AND user_email = ?");
    $query->bind_param("is", $note_id, $email);

    if ($query->execute()) {
        header("Location: notes.php");
        exit();
    } else {
        echo "Error: " . $conn->error;
    }

    $query->close();
}

$conn->close();
?>
