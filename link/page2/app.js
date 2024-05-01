let a;
let b;

do {
     a = +prompt("A sonni kiriting");
     b = +prompt("B sonni kiriting");

     if(a < b) {
          document.write(b);
     }
     else if(a > b) {
          document.write(a);
     }
} while (a == b && a == b);