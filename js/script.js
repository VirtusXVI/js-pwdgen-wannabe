let userChoice = prompt("vuoi generare una password semplice(1) o una complessa(2)?")
if(userChoice == 1){
// BASIC PASSWORD GENERATOR
// VAR DECLARATION
const userName = prompt("Iserisci il tuo nome: ");
const userLastname = prompt("Iserisci il tuo cognome: ");
const userFavcolor = prompt("Iserisci il tuo colore preferito: ");
let userPassword = 0;
// EXECUTING ACTIONS
userPassword = userName + userLastname + userFavcolor + "21";
document.getElementById("password").innerHTML = userPassword;
}


// COMPLEX PASSWORD GENERATOR
// VAR DECLARATION

else if(userChoice == 2){
    let userComplexPassword = String(parseInt(Math.random(10)*10));
let i = 0;
for (i = 0; i < 10; i++) {
    let userRandomnumber = Math.random(10)
    let userNumber = parseInt(userRandomnumber * 10);
    userComplexPassword = userComplexPassword + String(userNumber);
}
document.getElementById("password").innerHTML = "la tua password è: " + userComplexPassword;
}
else{
    alert("il numero inserito non è valido")
}