let tiempo = 0;
const limite = 30;
let costo = 0;

if (tiempo === 0) {
  console.log("Error: El tiempo no puede ser cero");
} else {
  while (tiempo < limite) {
    tiempo += 5;
    let tarifa = tiempo <= 15 ? 0.5 : 0.3;
    let costoActual = 5 * tarifa;
    costo += costoActual;
    console.log(`Tiempo: ${tiempo} minutos, Costo acumulado: $${costo.toFixed(2)}`);
  }
  console.log(`Costo total de la entrega: $${costo.toFixed(2)}`);
}



let tiempoTotal = 240;
let tiempoRestante = tiempoTotal;
let ciclo = 0;

for (let i = 0; i < tiempoTotal; i += 50) {
  ciclo++;
  if (ciclo % 2 !== 0) {
    // Ciclo de trabajo
    tiempoRestante -= 50;
    console.log(`Ciclo ${ciclo}: Trabajar 50 minutos, Tiempo restante: ${tiempoRestante} minutos`);
  } else {
    // Ciclo de pausa
    let pausa = (ciclo / 2) <= 3 ? 10 : 20;
    tiempoRestante -= pausa;
    console.log(`Ciclo ${ciclo}: Pausa de ${pausa} minutos, Tiempo restante: ${tiempoRestante} minutos`);
    if (tiempoRestante <= 0) break;
  }
}



let inversion = 100;
let Dia = 1;

do {
  let adicional = (Dia % 3 === 0) ? 10 : 5;
  let ganancia = 10 + adicional;
  inversion += ganancia;
  console.log(`Día ${Dia}: Ganancia de $${ganancia}, Total: $${inversion}`);
  if (inversion > 200) {
    console.log("Inversión superó $200, deteniendo el proceso");
    break;
  }
  Dia++;
} while (Dia <= 14);

console.log(`Total final de la inversión: $${inversion}`);



let dia = 6; // Puedes cambiar este valor entre 1 y 7
let horario;
let intento = 0;
const maxIntentos = 4;

// Asignar horario base según el día
switch (dia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    horario = 9;
    break;
  case 6:
    horario = 11;
    break;
  case 7:
    horario = 16;
    break;
  default:
    horario = 0;
}

console.log(`Horario base para día ${dia}: ${horario}:00`);

while (intento < maxIntentos) {
  let ajustar = intento < 3; // Simula la necesidad de ajuste
  if (!ajustar) break;
  intento++;
  horario -= 1;
  console.log(`Intento ${intento}: Ajustando a ${horario}:00`);
}

if (horario < 7) {
  console.log("Error: Horario demasiado temprano");
} else {
  console.log(`Horario final para la clase: ${horario}:00`);
}



let costoTotal = 0;

for (let dia = 1; dia <= 5; dia++) {
  let consumo = Math.floor(Math.random() * 10) + 1; // Genera un número entre 1 y 10
  let costoDiario = consumo > 5 ? 3 : 1.5;
  costoTotal += costoDiario;
  console.log(`Día ${dia}: Consumo ${consumo} kWh, Costo: $${costoDiario}, Total: $${costoTotal.toFixed(2)}`);
  if (costoTotal > 12) {
    console.log("Costo total superó $12, deteniendo el monitoreo");
    break;
  }
}

console.log(`Costo total final: $${costoTotal.toFixed(2)}`);
