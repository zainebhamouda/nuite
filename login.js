// Login.js - Gestion de la connexion

// Utilisateurs prédéfinis (pour une vraie application, utiliser une base de données)
const users = [
    { username: "admin", password: "1234" },
    { username: "user", password: "password" },
  ];
  
  // Fonction pour gérer la connexion
  function handleLogin(event) {
    event.preventDefault(); // Empêche le rechargement de la page
  
    // Récupérer les valeurs saisies
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
  
    // Vérifier si les informations correspondent à un utilisateur
    const user = users.find(
      (user) => user.username === usernameInput && user.password === passwordInput
    );
  
    if (user) {
      // Connexion réussie
      alert("Connexion réussie !");
      // Redirection vers une autre page (dashboard ou autre)
      window.location.href = "dashboard.html";
    } else {
      // Échec de la connexion
      alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
  }
  
  // Associer la fonction au formulaire
  document.getElementById("login-form").addEventListener("submit", handleLogin);
  