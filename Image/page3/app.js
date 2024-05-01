let FirstName;

do {
    FirstName = prompt("Istalgan harfni kiriting:");
    LastName = FirstName.toLowerCase(); 

    if (LastName.length !== 1 || !/[a-z]/.test(LastName)) {
        document.write("Alifbodagi bitta harf kiriting.");
    } else {
        let boshlangichHarf = 'a';
        let alifbo = 'abcdefghijklmnopqrstuvwxyz';
        let index = alifbo.indexOf(LastName);

        if (index !== -1) {
            let qolganHarflar = alifbo.slice(index + 1);
            document.write("Keyingi : " + qolganHarflar);
        } else {
            document.write("Alifbodagi bitta harf kiriting.");
        }
    }
} while (LastName.length !== 1 || !/[a-z]/.test(LastName));