//Numeros impares

function oddNumbers(num: number): void {
    for (let i = 1; i <= num; i += 2) {
        console.log(i);
    }
}

oddNumbers(10); 
oddNumbers(7);  

//Arcoíris

function isRainbow(colors: string[]): void {
    const rainbowColors: string[] = ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"];

    for (let color of colors) {
        if (rainbowColors.includes(color.toLowerCase())) {
            console.log(`${color} está en el arcoíris 🌈`);
        } else {
            console.log(`${color} NO está en el arcoíris ❌`);
        }
    }
}

isRainbow(["Rojo", "Negro", "Azul", "Blanco", "Violeta"]);

//Suma caracteres

function add(myWords: string[]): number {
    let totalChars: number = 0;

    for (let word of myWords) {
        totalChars += word.length;
    }

    return totalChars;
}

console.log(add(["hola", "mundo"])); 
console.log(add(["amo", "los", "gatos"])); 


