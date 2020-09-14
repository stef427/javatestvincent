// // declaration de variables
// let prenom = prompt("Veuillez entrer votre prénom");
// console.log(prenom);

// // conditions
// let age = Number(prompt("veuillez entrer votre âge"));
// console.log(age);
// if (age >= 18) {
//     console.log("tu as " + age + " ans, tu es  majeur ");
// } else {
//     console.log("tu as " + age + " ans, tu es mineur ");
// }

// exo impot
// let sexe = prompt("veuillez entrez votre genre");
// let age = prompt("quel est votre âge");

// if ((age >= 20) && (sexe == "homme")) {
//     console.log("tu paies tes impots")

// } else if (sexe == "femme" && age >= 18 && age <= 35) {
//     console.log("tu paies tes impots")
// } else {
//     console.log("tu paies pas d'impot")
// }

// let sexe = prompt("veuillez entrez votre genre");
// let age = prompt("quel est votre âge");

// version courte
// let sexe = prompt("veuillez entrez votre genre");
// let age = prompt("quel est votre âge");
// if ((age >= 20 && sexe == "homme") || ((age >= 18 && age <= 35) && sexe == "femme")) {
//     console.log("tu paies tes impots")

// } else {
//     console.log("tu paies pas d'impot")
// }
// exo assurance
let age = Number(prompt("Veuillez saisir votre âge:"));
let permis = Number(prompt("Depuis combien de temps avez vous le permis?"));
let accident = Number(prompt("combien d'accidents avez vous eu ?"));
let fidelite = Number(prompt("combien de temps etes vous inscrit ?"));
let tarif;
if (age >= 25 && permis > 2 && accident == 0) {
    tarif = "vert";
    console.log("vous devrez payer le tarif " + tarif);
} else if ((((age <= 25 && permis >= 2) || (age >= 25 && permis < 2)) && accident == 0) || (age > 25 && accident == 1 && permis > 2)) {
    tarif = "Orange";
    console.log("vous devrez payer le tarif " + tarif);
} else if ((age <= 25 && permis < 2 && accidents == 0) || (((age < 25 && permis > 2) || (age >= 25 && permis < 2)) && accident == 1) || (age < 25 && permis > 2 && accident == 2)) {
    tarif = "Rouge";
    console.log("vous devrez payer le tarif " + tarif);
} else {
    console.log("vous ne pouvez pas etre assuré ici ");
}