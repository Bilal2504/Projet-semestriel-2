// TypeScript pour gérer la soumission du formulaire et validation

// Récupérer les éléments du DOM
const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const usernameInput = document.getElementById('username') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;

// Fonction pour valider le formulaire
function validateForm(): boolean {
  let isValid = true;

  // Réinitialiser les erreurs précédentes
  usernameInput.style.borderColor = "";
  passwordInput.style.borderColor = "";

  // Vérifier si le champ du nom d'utilisateur est vide
  if (usernameInput.value.trim() === "") {
    alert("Le nom d'utilisateur est requis.");
    usernameInput.style.borderColor = "red";
    isValid = false;
  }

  // Vérifier si le champ du mot de passe est vide
  if (passwordInput.value.trim() === "") {
    alert("Le mot de passe est requis.");
    passwordInput.style.borderColor = "red";
    isValid = false;
  }

  return isValid;
}

// Gérer la soumission du formulaire
loginForm.addEventListener('submit', (event: Event) => {
  // Empêcher l'envoi par défaut
  event.preventDefault();

  // Si le formulaire est valide, envoyer les données
  if (validateForm()) {
    // Ici, vous pouvez ajouter la logique pour envoyer les données au serveur
    console.log("Formulaire soumis avec succès!");
  }
});