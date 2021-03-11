function mostrar() {
    let nombre, carrera, sexo, cantMaerias,
        notaProm,
        edad, mejorPf = 0,
        nomMpf, flag = 1,
        edadMj, nomMj, flag2 = 1,
        contF = 0,
        contQ = 0,
        contS = 0,
        porcF = 0,
        porcQ = 0,
        porcS = 0,
        mayMate, nomMaymate, flag3 = 1,
        edadMaymate;
    for (i = 0; i < 500; i++) {
        nombre = prompt("Igrese su nombre: ");
        carrera = prompt("Ingrese carrera QUIMICA/FISICA/SISTEMAS: ").toUpperCase();
        while (carrera != "QUIMICA" && carrera != "FISICA" && carrera != "SISTEMAS") {
            carrera = prompt("Error. Ingrese carrera QUIMICA/FISICA/SISTEMAS: ").toUpperCase();
        }
        sexo = prompt("Elija género FEMENINO/MASCULINO/NO BINARIO: ").toUpperCase();
        while (sexo != "FEMENINO" && sexo != "MASCULINO" && sexo != "NO BINARIO") {
            sexo = prompt("Error. Elija género FEMENINO/MASCULINO/NO BINARIO: ").toUpperCase();
        }
        cantMaerias = parseInt(prompt("Ingrese cantidad de materias: "));
        while (isNaN(cantMaerias) || cantMaerias < 1 || cantMaerias > 5) {
            cantMaerias = parseInt(prompt("Error. Ingrese cantidad de materias: "));
        }
        notaProm = parseInt(prompt("Ingrese promedio de nota: "));
        while (isNaN(notaProm) || notaProm < 0 || notaProm > 10) {
            notaProm = parseInt(prompt("Error. Ingrese promedio de nota entre 0 a 10: "));
        }
        edad = parseInt(prompt("Ingrese su edad: "));
        while (isNaN(edad) || edad < 18) {
            edad = parseInt(prompt("Error. Ingrese su edad de 18 en adelante: "));
        }
        //a
        if (carrera == "FISICA" && (flag || notaProm > mejorPf)) {
            mejorPf = notaProm;
            nomMpf = nombre;
            flag = 0;
        }
        //b
        if (sexo == "FEMENINO" && (flag2 || edad < edadMj)) {
            edadMj = edad;
            nomMj = nombre;
            flag2 = 0;
        }
        //c
        if (carrera == "FISICA") {
            contF++;
            porcF = contF * 100 / 500
        } else if (carrera == "QUIMICA") {
            contQ++;
            porcQ = contQ * 100 / 500
        } else {
            contS++;
            porcS = contS * 100 / 500
        }
        //d
        if (carrera != "QUIMICA" && (flag3 || cantMaerias > mayMate)) {
            mayMate = cantMaerias;
            nomMaymate = nombre;
            edadMaymate = edad;
            flag3 = 0;
        }
    } // fin del for
    if (flag) {
        console.log(`a) No se registran alumnos de la carrera de Física`);
    } else {
        console.log(`a) El nombre del alumno con mejor promedio en FISICA es: ${nomMpf} con un promedio de ${mejorPf}`);
    }
    if (flag2) {
        console.log(`b) No se registran alumnas cursando`);
    } else {
        console.log(`b) El nombre de la alumna mas joven es: ${nomMj}, con una edad de ${edadMj} años`);
    }
    console.log(`c) el promedio por carrera es: FISICA = ${porcF}%, QUIMICA = ${porcQ}% y SISTEMAS = ${porcS}`);
    if (flag3) {
        console.log(`d) No se registra estudiantes distintos a QUIMICA`);
    } else {
        console.log(`d) La edad y nombre de la persona que cursa carreras diferentes a QUIMICA es: ${nomMaymate} con ${edadMaymate} años y una cantidad de ${mayMate} materias`);
    }
} //fin.
