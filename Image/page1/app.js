let mablag = +prompt("Foydalanuvchi mablagini kiriting"); 
let ruchkaNarxi = 700;
let ruchkaMuddati = 4;
let sotibOlishishVaqt = 0;
let sotibOlinganRuchkalar = 0;

do {
    if (mablag >= ruchkaNarxi) {
        mablag -= ruchkaNarxi;
        sotibOlinganRuchkalar++;
        sotibOlishishVaqt += ruchkaMuddati;
    }
} while (mablag >= ruchkaNarxi && sotibOlishishVaqt < 100000);
document.write("Foydalanuvchi ", sotibOlinganRuchkalar, " ta ruchka sotib oldi va ", sotibOlishishVaqt, " kun ichida yetdi. ");