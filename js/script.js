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

else if(userChoice == 2){
    // VAR DECLARATION
    var letters =   ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"
    ,"R","S","T","U","V","W","X","Y","Z"];
    // GENERATING THE FIRST CHAR OF THE PASSWORD
    let userLength = prompt("inserisci la lunghezza della password")
    let userFirstChar = parseInt(Math.random()*52);
    let userComplexPassword = letters[userFirstChar];
    // GENERATING THE REST OF THE PASSWORD
    for (let i = 0; i < (userLength - 1); i++){
        let userRandomnumber = Math.random()
        let userNumber = parseInt(userRandomnumber * 52);
        userChar = letters[userNumber];
        userComplexPassword = userComplexPassword + userChar;
    }
    // PRINTING THE PASSWORD
    document.getElementById("password").innerHTML = "la tua password è: " + userComplexPassword;
    }
else{
    // userChoice IS NOT VALID
    alert("il numero inserito non è valido")
    location.reload()
}