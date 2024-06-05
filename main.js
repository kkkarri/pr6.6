function showRecipientForm() {
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name === '' || subject === '' || message === '') {
        alert('Будь ласка, заповніть всі поля.');
        return;
    }

    document.getElementById('initialForm').style.display = 'none';
    document.getElementById('recipientForm').style.display = 'block';
}

document.getElementById('recipientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const recipientEmail = document.getElementById('recipientEmail').value;
    const finalSubject = document.getElementById('finalSubject').value;
    const message = document.getElementById('message').value;

    if (recipientEmail === '' || finalSubject === '') {
        alert('Будь ласка, заповніть всі поля.');
        return;
    }

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;

    document.getElementById('initialForm').reset();
    document.getElementById('recipientForm').reset();
    document.getElementById('recipientForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
});

function resetForms() {
    document.getElementById('initialForm').style.display = 'block';
    document.getElementById('recipientForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'none';
}
