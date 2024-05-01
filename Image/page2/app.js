let son = +prompt("Son kiriting");
let random = Math.floor(Math.random() * 10);
do {
     if (son % random == 0) {
          document.write("To'g'ri topdiz " + random);
     }
     else {
          document.write("Afsuski topaolmadiz " + random);
     }

} while (son == random);