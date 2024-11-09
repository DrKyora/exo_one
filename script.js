const tauxInteret = 0.03;
const historiqueOperations = [];
let solde = 1000;
let depot = 200;
let retrait = 150;

console.log(`Solde initial : ${solde}€`);

solde = addMoney(solde, depot);
solde = removeMoney(solde, retrait);
solde = interet(solde, tauxInteret);

depot = 500;
retrait = 800;

solde = addMoney(solde, depot);
solde = removeMoney(solde, retrait);
solde = interet(solde, tauxInteret);
operationsHistorique(historiqueOperations);

resetSolde();
console.log(`Votre solde actuel est de ${solde}€`);
operationsHistorique(historiqueOperations);

function addMoney(solde, depot) {
  solde = solde + depot;
  historiqueOperations.push(
    `Dépôt de ${depot}€ fait le ${new Date().toLocaleDateString()} à ${new Date().toLocaleTimeString()}`
  );
  console.log(`${solde}€ est le nouveau solde après un dépôt de ${depot}€`);
  return solde;
}
function removeMoney(solde, retrait) {
  if (solde > retrait) {
    solde = solde - retrait;
    historiqueOperations.push(
      `Retrait de ${retrait}€ fait le ${new Date().toLocaleDateString()} à ${new Date().toLocaleTimeString()}`
    );
    console.log(`${solde}€ est le nouveau solde après un retrait de ${retrait}€`);
    return solde;
  } else {
    return console.log("Soldes insuffisant pour effectuer le retrait.");
  }
}
function interet(solde, tauxInteret) {
  solde = solde * (1 + tauxInteret);
  //toFixed(2) limiter chiffres après la virgule à 2
  //parseFloat pour reconvertir en nombre après toFixed
  solde = parseFloat(solde.toFixed(2));
  console.log(`${solde}€ est le nouveau solde après l'ajout des intérêts.`);
  return solde;
}
function operationsHistorique(historiqueOperations) {
  if (historiqueOperations.length === 0) {
    console.log("Historique des opérations : ");
    return console.log("Aucune opération n'a été effectuée.");
  } else {
    console.log("Historique des opérations : ");
    for (let i = 0; i < historiqueOperations.length; i++) {
      console.log(historiqueOperations[i]);
    }
  }
}
function resetSolde() {
  solde = 1000;
  historiqueOperations = [];
}
