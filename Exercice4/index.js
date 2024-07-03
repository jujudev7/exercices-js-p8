document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const messageParagraph = document.getElementById("message");

  button.addEventListener("click", () => {
    messageParagraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
  });
});

// La méthode document.addEventListener('DOMContentLoaded', callback) est utilisée pour exécuter une fonction spécifique (callback) lorsque le DOM est complètement chargé et analysé, mais avant que toutes les ressources (images, feuilles de style, etc.) soient complètement chargées.

// Utilité :
// Assurer que le DOM est prêt : Cela garantit que tous les éléments du DOM sont disponibles pour être manipulés. Vous pouvez être sûr que les éléments comme les boutons, les paragraphes, etc., existent dans le DOM avant d'essayer d'y accéder ou d'y ajouter des écouteurs d'événements.
// Éviter les erreurs de référence : Si vous essayez d'accéder à des éléments du DOM avant qu'ils ne soient complètement chargés, vous obtiendrez des erreurs de référence car ces éléments n'existent pas encore dans le DOM.

// Dans cet exemple, le code à l'intérieur de la fonction de rappel ne sera exécuté qu'une fois que le DOM est entièrement chargé, garantissant ainsi que les éléments button et messageParagraph existent.

// export default {};
// L'instruction export default {}; est utilisée en JavaScript (ES6) pour exporter une valeur par défaut à partir d'un module. Cela permet à d'autres fichiers de ce module d'importer cette valeur sans avoir à connaître le nom de l'export.

// Utilité :
// Compatibilité des modules : Dans ce cas particulier, l'instruction export default {}; peut ne pas être nécessaire, mais elle est souvent utilisée pour s'assurer que le fichier est traité comme un module ES6. Cela peut être utile pour éviter des erreurs dans certains environnements de construction (build environments) ou configurations de l'application.
