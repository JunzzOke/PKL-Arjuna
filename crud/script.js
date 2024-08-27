document.addEventListener('DOMContentLoaded', function() {
    const addNoteButton = document.getElementById('addNoteButton');
    const noteFormContainer = document.getElementById('noteFormContainer');
    const noteForm = document.getElementById('noteForm');
    const noteTitle = document.getElementById('noteTitle');
    const noteContent = document.getElementById('noteContent');
    const noteId = document.getElementById('noteId');
    
    // Mengambil elemen-elemen form Sign In dan Sign Up
    const signInButton = document.getElementById('signInButton');
    const signUpButton = document.getElementById('signUpButton');
    const signInForm = document.getElementById('signIn');
    const signUpForm = document.getElementById('signup');

    if (signInButton && signUpButton && signInForm && signUpForm) {
        signUpButton.addEventListener('click', function() {
            signInForm.style.display = 'none';
            signUpForm.style.display = 'block';
        });

        signInButton.addEventListener('click', function() {
            signInForm.style.display = 'block';
            signUpForm.style.display = 'none';
        });
    } else {
        console.error("Elemen form Sign In dan Sign Up tidak ditemukan.");
    }

    if (addNoteButton && noteFormContainer && noteForm && noteTitle && noteContent && noteId) {
        addNoteButton.addEventListener('click', function() {
            noteFormContainer.style.display = 'block';
            noteTitle.value = '';
            noteContent.value = '';
            noteId.value = '';
        });
    } else {
        console.error("Elemen form catatan tidak ditemukan.");
    }

    const editNoteButtons = document.querySelectorAll('.editNoteButton');
    editNoteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const title = this.parentElement.querySelector('h2').innerText;
            const content = this.parentElement.querySelector('p').innerText;

            noteFormContainer.style.display = 'block';
            noteTitle.value = title;
            noteContent.value = content;
            noteId.value = id;
        });
    });

    const deleteNoteButtons = document.querySelectorAll('.deleteNoteButton');
    deleteNoteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            if (confirm('Are you sure you want to delete this note?')) {
                window.location.href = `note_action.php?action=delete&id=${id}`;
            }
        });
    });
});
