// // // declaration de variables
// // let prenom = prompt("Veuillez entrer votre prénom");
// // console.log(prenom);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // conditions
// // let age = Number(prompt("veuillez entrer votre âge"));
// // console.log(age);
// // if (age >= 18) {
// //     console.log("tu as " + age + " ans, tu es  majeur ");
// // } else {
// //     console.log("tu as " + age + " ans, tu es mineur ");
// // }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // exo impot
// // let sexe = prompt("veuillez entrez votre genre");
// // let age = prompt("quel est votre âge");

// // if ((age >= 20) && (sexe == "homme")) {
// //     console.log("tu paies tes impots")

// // } else if (sexe == "femme" && age >= 18 && age <= 35) {
// //     console.log("tu paies tes impots")
// // } else {
// //     console.log("tu paies pas d'impot")
// // }

// // let sexe = prompt("veuillez entrez votre genre");
// // let age = prompt("quel est votre âge");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // version courte
// // let sexe = prompt("veuillez entrez votre genre");
// // let age = prompt("quel est votre âge");
// // if ((age >= 20 && sexe == "homme") || ((age >= 18 && age <= 35) && sexe == "femme")) {
// //     console.log("tu paies tes impots")

// // } else {
// //     console.log("tu paies pas d'impot")
// // }
// // exo assurance
// // techniquement pas completement bon 
// let age = Number(prompt("Veuillez saisir votre âge:"));
// let permis = Number(prompt("Depuis combien de temps avez vous le permis?"));
// let accident = Number(prompt("combien d'accidents avez vous eu ?"));
// let fidelite = Number(prompt("combien de temps etes vous inscrit ?"));
// let tarif;
// let compteur = 0;

// if (age >= 25) { compteur++ }
// if (permis > 2) { compteur++ }
// if (fidélite >= 5) { compteur++ }
// compteur -= accidents;

// if (compteur == 3) {
//     tarif = "Bleu";
//     console.log(tarif);
// } else if (compteur == 2) {
//     tarif = "Vert";
//     console.log(tarif);
// } else if (compteur == 1) {
//     tarif = "Orange";
//     console.log(tarif);
// } else if (compteur == 0) {
//     tarif = "Rouge";
//     console.log(tarif);
// } else if (compteur < 0) {
//     console.log("Vous ne pouvez être assuré ici.");
// }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // solution sans fidelite

// // if (age >= 25 && permis > 2 && accident == 0) {
// //     tarif = "vert";
// //     console.log("vous devrez payer le tarif " + tarif);
// // } else if ((age >= 25 && permis >= 2 && accidents == 1) || (((age < 25 && permis >= 2)(age >= 25 && permis < 2)) && accidents == 0)) {
// //     tarif = "Orange";
// //     console.log("vous devrez payer le tarif " + tarif);
// // } else if ((age <= 25 && permis < 2 && accidents == 0) || (((age < 25 && permis > 2) || (age >= 25 && permis < 2)) && accident == 1) || (age < 25 && permis > 2 && accident == 2)) {
// //     tarif = "Rouge";
// //     console.log("vous devrez payer le tarif " + tarif);
// // } else {
// //     console.log("vous ne pouvez pas etre assuré ici ");
// // }
// // version DANY 
// var age = prompt("Âge du souscripteur"),
//     permis = prompt("Ancienneté du permis"),
//     accident = prompt("Nombre d'accident du souscripteur"),
//     anciennete = prompt("Ancienneté du souscripteur"),
//     formule = ["rouge", "orange", "vert", "bleue"],
//     note = 0;

// if (age >= 25) {
//     note++;
// }
// if (permis >= 2) {
//     note++;
// }
// note -= accident;
// if (note >= 0) {
//     if (anciennete >= 5) {
//         note++;
//     }
//     console.log("Vous pouvez souscrire à la formule " + formule[note]);
// } else {
//     console.log("Vous ne pouvez pas souscrire chez nous");
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//les boucles

// le while est utilisé quand on ne sait pas combien de fois on va répété l'action mais on va la repété au moins une fois.


// let depart = Number(prompt("Veuillez entrer un nombre de départ"));

// for (let i = 1; i <= 10; i++) {
//     let suite = depart + i;
//     console.log(suite);
// }

// for (let i = depart + 1; i <= depart + 10; i++) {
//     console.log(i);
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// version 1 boucle while ennoncé discord
// let nombre = depart;
// while (nombre < depart + 10) {
//     nombre++;
//     console.log(nombre);
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//deuxieme vesion.

// let nombre = depart + 1;
// while (nombre <= depart + 10) {
//     console.log(nombre);
//     nombre++;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//table de multiplication
// let table = Number(prompt("veuillez entrer une table"))
// for (let i = 1; i <= 10; i++) {
//     console.log(table * i) //(table + "*" + i + "=" + table * i)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercice 1+2+3+4ect...

// let nombre = Number(prompt("Veuillez entrer un nombre."))
// let addition = 0


// for (let i = 1; i <= nombre; i++) {
//     addition = addition + i;
//     console.log(addition)
// }
/////////////////////////////////////////////////////////////////////////////////////////////////
//meme qu'au dessus sauf que multi
// let nombre = Number(prompt("veuillez entrez un nombre"))
// let multi = 1

// for (let i = 1; i <= nombre; i++) {
//     multi = multi * i;
//     console.log(multi)
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//addition des deux au dessus
// let nombre = Number(prompt("veuillez entrer un nombre"))
// let addition = 0
// let multi = 1

// for (let i = 1; i <= nombre; i++) {
//     addition = addition + i;
//     multi = multi * i;
// }
// console.log("resultat de l addition" + addition)

// console.log("resultat de  la mutliplication est" + multi)
// console.log("resultat du tout" + (multi + addition))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//plus grand saisi plus petit saisi
// let nombre = Number(prompt("entrez un nombre!!"))
// let grand = 0;
// let petit = 0;

// for (let i = 1; i <= nombre; i++) {
//     let choix = Number(prompt("entrez un nombre"));
//     if (choix >= grand || i == 1) {
//         grand = choix;
//     }
//     if (choix <= petit || i == 1) {
//         petit = choix;
//     }

//     console.log(grand + "est plus grand que nombre");
//     console.log(petit + "est plus grand que nombre");

// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//recherche  de chiffre//


// let nombre = Number(prompt("entrez un nombre!!"));
// let win = false;

// while (win == false) {
//     let choix = Number(prompt("veuillez entrer un nombre."));
//     if (choix > nombre) {
//         console.log("c est  plus petit");
//     }
//     if (choix < nombre) {
//         console.log("cest plus grand");
//     }
//     if (choix == nombre) {
//         win = true;
//         console.log("bravo!!");
//     }
// }
//////////////////////////////////////////////////////////////////////////////

//tableau

// let tab1 = [1, 56, "voiture"];
// console.log(tab1);
// tab1.pop(); //pop pour enlever la dernière valeur ici voiture //
// console.log(tab1);
// tab2 = tab1.pop(); //                                                        //                         
// console.log(tab2); //ici on affiche le que le tab 1 c est a dire la voiture .//
// tab1.push("banane");
// console.log(tab1);

// tab3 = tab1.push("banane"); /// 
// console.log(tab3); /////recupére l'index de tab1 //

// tab3 = tab1.shift(); ///
// console.log(tab1); //enlève la première valeur//

// tab1.unshift("577"); //ajoute une valeur au début du tableau .//

// tab1[0] = "?";
// console.log(tab1); //change la valeur de l'index choisi ici index0 au lieu de 1 se sera ?

// console.log(tab1.length); //nombre d'elements dans le tableau .

// tab1.splice(0, 1, "cake", "fraise"); //insérer des données (index d'insertion ,nombre d'éléments à rajouter )
// console.log(tab1);
// tab1.concat(tab2);
// console.log(tab1);
// // concaténation ==>concaténé c'est fusionné [1,banane,fruit ] + [pomme,prune ,voiture ] ===>[1 1,banane,fruit,pomme,prune ,voiture]

let tab4 = ["emile", 89];
let tab5 = ["louis", 66];
let tab6 = tab4.concat(tab5); //concatenation de tableau
console.log(tab6);
let tab7 = ["hello", "world", "!!!"]; //////
console.log(tab7.toString()); //////pour que les éléments apparraissent tels quel avec les virgules .

let users = {
    id: 0,
    nom: "Dupont", ////objets surtout utilisé pour la base de données ///
    prenom: "Roger"
};
console.log(users.prenom);