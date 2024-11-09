const tauxInteret = 0.03;
let solde = 1000;
let depot = 200;
let retrait = 150;
let nouveauDepot = 500;
let nouveauRetrait = 800;
let historiqueOperations = [];

solde = solde + depot;
historiqueOperations.push("Dépôt de " + depot + "€");
console.log(solde + "€" + " est le nouveau solde après le dépôt.");

if (solde > retrait) {
  solde = solde - retrait;
  historiqueOperations.push("Retrait de " + retrait + "€");
  console.log("Vous avez reiré " + retrait + "€." + " Nouveau solde : " + solde + "€");
} else {
  console.log("Soldes insuffisant pour effectuer le retrait.");
}

solde = solde * (1 + tauxInteret);
console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : " + solde + "€");

solde = solde = solde + nouveauDepot;
historiqueOperations.push("Dépôt de " + nouveauDepot + "€");
console.log(solde + "€" + "est le nouveau solde après le dépôt;");

if (solde > nouveauRetrait) {
  solde = solde - nouveauRetrait;
  historiqueOperations.push("Retrait de " + nouveauRetrait + "€");
  console.log("Vous avez reiré " + nouveauRetrait + "€." + " Nouveau solde : " + solde + "€");
} else {
  console.log("Soldes insuffisant pour effectuer le retrait.");
}

solde = solde * (1 + tauxInteret);
console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : " + solde + "€");
console.log(historiqueOperations);
