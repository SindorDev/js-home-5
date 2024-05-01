let Location;
let num = 0;

do {
     Location = prompt("Restaurantning manzilini kiriting:");
     num = +prompt("necha marta bordiz:");
     
     if(location == "Evos") {
          num++
     }
     else if(location == "Oq tepa") {
          num += 2
     }
} while ((location == "Evos" && num < 5) || (location == "Oq tepa" && num < 10));

document.write("foydalanuvchi ", num, " marta ", Location ,  " bordi");