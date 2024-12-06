// Fonction pour faire défiler jusqu'à une section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  // Ajout d'un message de bienvenue interactif
  window.onload = () => {
    console.log("Bienvenue sur Corps Humain et Océan !");
  };
  