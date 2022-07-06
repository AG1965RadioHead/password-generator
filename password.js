const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
 "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
 "=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
let numberOfSymbols = 12

function generateSymbol() {
  let count = Math.floor(Math.random() * characters.length)
  return characters[count]
}

function generatePassword() {
  let randomPassword = ""
  for (let i = 0; i < numberOfSymbols; i++) {
    randomPassword += generateSymbol()
  }
  return randomPassword
}

const generatedPasswordOne = generatePassword()
const generatedPasswordTwo = generatePassword()
 
function generatePasswords() {
  firstPassword.textContent = generatedPasswordOne
  secondPassword.textContent = generatedPasswordTwo
}


 







