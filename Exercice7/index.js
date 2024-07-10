function convertToBinary() {
  // Récupération de la valeur saisie par l'utilisateur
  var decimalValue = document.getElementById("decimalInput").value;

  // Validation de l'entrée pour s'assurer qu'il s'agit d'un nombre entier
  if (isNaN(decimalValue) || decimalValue === "") {
    alert("Veuillez entrer un nombre décimal valide");
    return;
  }

  // Conversion de la valeur saisie en nombre entier
  var decimalNumber = parseInt(decimalValue, 10);

  // Conversion du nombre décimal en binaire
  var binaryResult = decimalNumber.toString(2);

  // Affichage du résultat binaire
  document.getElementById("binaryResult").textContent =
    "Représentation binaire : " + binaryResult;
}

// 1. Récupération de la valeur saisie : On récupère la valeur saisie par l'utilisateur dans le champ d'entrée avec document.getElementById("decimalInput").value.

// 2. Validation de l'entrée : On vérifie si la valeur saisie est un nombre valide avec isNaN(decimalValue) et si elle n'est pas vide. Si l'entrée est invalide, on affiche une alerte et on arrête l'exécution de la fonction.

// 3. Conversion en nombre entier : On convertit la valeur saisie en un entier avec parseInt(decimalValue, 10).

// * La fonction parseInt() en JavaScript est utilisée pour analyser une chaîne de caractères et la convertir en un entier selon la base spécifiée. Elle prend deux arguments :
// - La chaîne à analyser (dans notre cas, decimalValue).
// - La base (ou radix), qui est optionnelle mais fortement recommandée pour éviter des erreurs inattendues.

// ** La base est un entier entre 2 et 36 qui représente la base des systèmes de numération mathématique. La base 10 est le système décimal, la base 2 est le système binaire, la base 16 est le système hexadécimal, etc.

// 4. Conversion en binaire : On utilise la méthode toString(2) pour convertir le nombre décimal en une chaîne représentant sa valeur en binaire.

// 5. Affichage du résultat : On affiche le résultat dans l'élément avec l'ID binaryResult.
