// VAR DECLARATION
const userName = prompt("Iserisci il tuo nome: ");
const userLastname = prompt("Iserisci il tuo cognome: ");
const userFavcolor = prompt("Iserisci il tuo colore preferito: ");
let userPassword = 0;
// EXECUTING ACTIONS
userPassword = userName + userLastname + userFavcolor + "21";
document.getElementById("password").innerHTML = userPassword;