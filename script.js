const passwordBox = document.getElementById("password");
let lengthA = 10;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+:;><?";

const allChars = upperCase + lowerCase + number + symbol ;

function createPassword(){
    let Password = "";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lengthA > Password.length){
        Password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = Password; 
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}
