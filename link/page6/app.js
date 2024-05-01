let num = false;
let result = "";

while (!num) {

  let randomNumber = Math.floor(Math.random() * 1000); 
  
  if (randomNumber >= 0 && result === result.split("").reverse().join("")) {
  
     num = true;
  
}

}
console.log(result);