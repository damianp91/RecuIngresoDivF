function mostrar() {
    let nombre, edad, sexo, puesto, salario, seguir, sueldoP = 0,
        sueldoA = 0,
        sueldoQ = 0,
        contP = 0,
        contA = 0,
        contQ = 0,
        promP = 0,
        promA = 0,
        promQ = 0,
        sexoMaysala, mayorSala, flag = 1,
        nomFem, sueldFem, flag2 = 1,
        contNob = 0;
    do {
        nombre = prompt("Igrese su nombre: ");
        edad = parseInt(prompt("Ingrese su edad: "));
        while (isNaN(edad) || edad < 18) {
            edad = parseInt(prompt("Error. Ingrese su edad de 18 en adelante: "));
        }
        sexo = prompt("Elija género FEMENINO/MASCULINO/NO BINARIO: ").toUpperCase();
        while (sexo != "FEMENINO" && sexo != "MASCULINO" && sexo != "NO BINARIO") {
            sexo = prompt("Error. Elija género FEMENINO/MASCULINO/NO BINARIO: ").toUpperCase();
        }
        puesto = prompt("Igrese el puesto programador/analista/qa: ").toLowerCase();
        while (puesto != "programador" && puesto != "analista" && puesto != "qa") {
            puesto = prompt("Error. Igrese el puesto programador/analista/qa: ").toLowerCase();
        }
        salario = parseInt(prompt("Ingrese monto de salario de 15000 a 70000: "));
        while (salario < 15000 || salario > 70000) {
            salario = parseInt(prompt("Error. Ingrese monto de salario de 15000 a 70000: "));
        }
        //a
        if (puesto == "programador") {
            sueldoP += salario;
            contP++;
        } else if (puesto == "analista") {
            sueldoA += salario;
            contA++;
        } else {
            sueldoQ += salario;
            contQ++;
        }
        //b
        if (flag || salario > mayorSala) {
            mayorSala = salario;
            sexoMaysala = sexo;
            flag = 0;
        }
        //c
        if (sexo == "FEMENINO" && (flag2 || salario > sueldFem)) {
            sueldFem = salario;
            nomFem = nombre;
            flag2 = 0;
        }
        //d
        if (sexo == "NO BINARIO" && salario >= 20000 && salario <= 55000) {
            contNob++;
        }
        seguir = prompt("¿Desea continuar? s/n: ");
    } while (seguir == "s");
    if (contP != 0) {
        promP = sueldoP / contP;
    }
    if (contA != 0) {
        promA = sueldoA / contA;
    }
    if (contQ != 0) {
        promQ = sueldoQ / contQ;
    }
    console.log(`a) El promedio de los sueldos es: programador ${promP} ARS, analista ${promA} ARS y Qa ${promQ} ARS respectivamente`);
    console.log(`b) EL sexo del que percibe el mayor salario es: ${sexoMaysala}, con un sueldo se ${mayorSala} ARS`);
    if (flag2) {
        console.log(`c) No se registran empleados femeninos`);
    } else {
        console.log(`c) El nombre del elpleado femenino con mayor sueldo es ${nomFem}, con un salario de ${sueldFem}`);
    }
    if (contNob == 0) {
        console.log(`d) No se registran empleados no binarios`);
    } else {
        console.log(`d) Hay ${contNob} empleados NO BINARIO con un sueldo entre 20000 a 55000`);
    }
} //Fin del código.
