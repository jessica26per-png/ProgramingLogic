function ordenarNumeros() {
    const num1 = parseInt(prompt("Ingresa un numerito :) "));
    const num2 = parseInt(prompt("Ingresa un segundo numerito :)"));
    const num3 = parseInt(prompt("Ingresa un tercer numerito :)"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Fallaste!! :c ingresa otro numerito porfitas :)");
        return; 
    }

    if (num1 === num2 && num2 === num3) {
        console.log("**************************");
        console.log("¡Eres mago, los 3 numeros son iguales!");
        console.log("---------------------------------------");
        console.log(`Orden de Mayor a Menor: ${num1}, ${num2}, ${num3}`);
        console.log(`Orden de Menor a Mayor: ${num1}, ${num2}, ${num3}`);
    } else {
        const numeros = [num1, num2, num3];

        const menorAMayor = [...numeros].sort((a, b) => a - b);

        const mayorAMenor = [...numeros].sort((a, b) => b - a);

        console.log("***************************************");
        console.log("--- Análisis de Números ---");
        console.log(`Número Mayor: ${mayorAMenor[0]}`);
        console.log(`Número del Centro: ${menorAMayor[1]}`);
        console.log(`Número Menor: ${menorAMayor[0]}`);
        console.log("**************************************");
        console.log(`Orden de Mayor a Menor: ${mayorAMenor.join(', ')}`);
        console.log(`Orden de Menor a Mayor: ${menorAMayor.join(', ')}`);
    }
}
ordenarNumeros();