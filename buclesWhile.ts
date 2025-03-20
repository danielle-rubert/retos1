//Numero par

function hasEven(myNums: number[]): boolean {
    let i: number = 0;

    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true; 
        }
        i++; 
    }

    return false; 
}

console.log(hasEven([1, 3, 5, 7])); 
console.log(hasEven([1, 3, 4, 7])); 
console.log(hasEven([2, 9, 11, 15])); 

// Empieza por M

function startWithM(myNames: string[]): boolean {
    let i: number = 0;

    while (i < myNames.length) {
        if (!myNames[i].startsWith("M")) {
            return false;
        }
        i++; 
    }

    return true; 
}

console.log(startWithM(["Maria", "Miguel", "Marta"])); 
console.log(startWithM(["Mario", "Carlos", "Miriam"])); 
console.log(startWithM(["Marta", "Mauro"])); 

