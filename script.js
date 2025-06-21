document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    { texte: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", auteur: "Christian D. Larson", image: "img/photo1.jpg" },
    { texte: "The only way to do great work is to love what you do.", auteur: "Steve Jobs", image: "img/photo2.webp" },
    { texte: "Success is not final, failure is not fatal: It is the courage to continue that counts.", auteur: "Winston S. Churchill", image: "img/photo3.jpg" },
    { texte: "The future belongs to those who believe in the beauty of their dreams.", auteur: "Eleanor Roosevelt", image: "img/photo4.jpg" },
    { texte: "Don't watch the clock; do what it does. Keep going.", auteur: "Sam Levenson", image: "img/photo5.jpg" }
  ];

  let index = 0;

  // Fonction pour afficher le message à l'index courant
  function afficherMessage() {
    const box1 = document.querySelector(".box1"); // sélection de l'élément
    document.getElementById("monTexte").textContent = messages[index].texte;
    document.getElementById("auteur").textContent = messages[index].auteur;
    // Changer l'image de fond
    box1.style.backgroundImage = `url(${messages[index].image})`;
  }

  // Avancer (flèche droite)
  document.getElementById("angle-right").addEventListener("click", () => {
    index = (index + 1) % messages.length;
    afficherMessage();
  });

  // Reculer (flèche gauche)
  document.getElementById("angle-left").addEventListener("click", () => {
    index = (index - 1 + messages.length) % messages.length; // Pour revenir en arrière
    afficherMessage();
  });

  // Afficher le premier message au chargement
  afficherMessage();

});