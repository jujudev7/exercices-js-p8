// Fonction pour ajouter du texte au champ d'affichage
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Fonction pour effacer le champ d'affichage
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Fonction pour calculer le résultat de l'expression
function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erreur";
  }
}

// appendToDisplay(value) : Cette fonction est appelée lorsque l'utilisateur clique sur un bouton de la calculatrice (chiffre ou opération). Elle ajoute le value correspondant (par exemple, '1', '2', '+', etc.) au champ d'affichage.

// clearDisplay() : Cette fonction est appelée lorsque l'utilisateur clique sur le bouton 'C'. Elle efface le contenu du champ d'affichage.

// calculateResult() : Cette fonction est appelée lorsque l'utilisateur clique sur le bouton '='. Elle évalue l'expression arithmétique présente dans le champ d'affichage et affiche le résultat. En cas d'erreur (par exemple, une expression mal formée), elle affiche 'Erreur'.

// La fonction eval() permet d'évaluer ou d'exécuter du code JavaScript représenté sous forme d'une chaîne de caractères.
