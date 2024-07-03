// Créez votre fonction ici
// Pour créer la fonction JavaScript calculateAverage, nous allons suivre les étapes suivantes :

// 1. Définir la fonction calculateAverage qui prend un tableau de nombres en tant que paramètre.
// 2. Vérifier si le tableau est vide. Si oui, retourner le message "No numbers to calculate average".
// 3. Calculer la somme de tous les éléments du tableau.
// 4. Diviser la somme par le nombre d'éléments dans le tableau pour obtenir la moyenne.
// 5. Retourner la moyenne calculée.

/**
 * Fonction pour calculer la moyenne des nombres dans un tableau.
 *
 * @param {number[]} numbers - Tableau de nombres.
 * @returns {number|string} - La moyenne des nombres ou un message d'erreur si le tableau est vide.
 */
function calculateAverage(numbers) {
  if (!Array.isArray(numbers)) {
    // On vérifie si on a bien un tableau en paramètre
    return "No array numbers to calculate";
  }

  if (numbers.length === 0) {
    return "No numbers to calculate average";
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  let average = sum / numbers.length;
  return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No array numbers to calculate
console.log(calculateAverage([])); // No numbers to calculate average

export default calculateAverage;
