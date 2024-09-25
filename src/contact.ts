// Ajout de la logique TypeScript pour la page Contact
const backButton = document.getElementById('backButton');
if (backButton) {
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}