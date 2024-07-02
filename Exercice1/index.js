//votre code ici
function pairNumbers(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result.join(",");
}

// Exemples d'utilisation
console.log(pairNumbers(1, 10)); // Affiche: 2,4,6,8,10
console.log(pairNumbers(3, 15)); // Affiche: 4,6,8,10,12,14
console.log(pairNumbers(2, 2)); // Affiche: 2
console.log(pairNumbers(2, 1)); // Affiche: (chaîne vide)
console.log(pairNumbers(0, 100)); // Affiche: 0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100

export default pairNumbers;
