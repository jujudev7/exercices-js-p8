// Créez votre fonction ici

// Pour créer la fonction JavaScript calculate, nous allons suivre les étapes suivantes:

// 1. Définir la fonction calculate qui prend 3 paramètres : 2 nombres (num1 et num2) et 1 opérateur (operator).
// 2. Utiliser une structure de contrôle (switch ou if-else) pour déterminer l'opération à effectuer en fonction de l'opérateur.
// 3. Effectuer l'opération correspondante et retourner le résultat.
// 4. Gérer les cas d'erreur tels que la division par zéro.

/**
 * Fonction pour effectuer une opération mathématique basique entre deux nombres.
 *
 * @param {number} num1 - Le premier nombre entier.
 * @param {number} num2 - Le deuxième nombre entier.
 * @param {string} operator - L'opérateur ('+', '-', '*', '/').
 * @returns {number|string} - Le résultat de l'opération ou un message d'erreur.
 */
function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error : Division by zero is not allowed";
      }
      return num1 / num2;
    default:
      return "Error : Invalid operator";
  }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, "+")); // Affiche 8
console.log(calculate(10, 4, "-")); // Affiche 6
console.log(calculate(7, 2, "*")); // Affiche 14
console.log(calculate(12, 3, "/")); // Affiche 4
console.log(calculate(8, 0, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"

export default calculate;
