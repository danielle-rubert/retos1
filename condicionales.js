// Signo zodiacal
function zodiac(day, month) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
        return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
        return "Tauro";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
        return "Géminis";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
        return "Cáncer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
        return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
        return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
        return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
        return "Escorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
        return "Sagitario";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
        return "Capricornio";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
        return "Acuario";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
        return "Piscis";
    return "Fecha inválida";
}
console.log(zodiac(15, 5));
console.log(zodiac(30, 8));
console.log(zodiac(10, 12));
console.log(zodiac(29, 2));
// País y continente
function continent(country) {
    const continents = {
        "América": ["Argentina", "Brasil", "Estados Unidos", "México", "Canadá"],
        "Europa": ["España", "Francia", "Alemania", "Italia", "Reino Unido"],
        "África": ["Nigeria", "Sudáfrica", "Egipto", "Marruecos", "Kenia"],
        "Asia": ["China", "Japón", "India", "Corea del Sur", "Tailandia"],
        "Oceanía": ["Australia", "Nueva Zelanda", "Fiyi", "Samoa", "Papúa Nueva Guinea"]
    };
    for (const [continentName, countries] of Object.keys(continents)) {
        if (countries.includes(country)) {
            console.log(`${country} está en ${continentName}`);
            return;
        }
    }
    console.log("País no encontrado en la base de datos");
}
continent("España");
continent("México");
continent("Japón");
continent("Chile");
// Numeros pares e impares
function isEven(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    }
    else {
        console.log("El número es impar");
    }
}
isEven(8);
isEven(15);
isEven(0);
isEven(-3);
