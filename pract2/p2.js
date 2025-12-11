// ==============================
// 1) Clima
// ==============================
function climaDesdeCelsius(tempC) {
  if (tempC >= -10 && tempC <= 15) return 'Frio';
  if (tempC >= 16 && tempC <= 25) return 'Templado';
  if (tempC >= 26 && tempC <= 40) return 'Calor';
  return 'Fuera de rango';
}

function mostrarClima() {
  const temp = prompt("Introduce una temperatura en °C:");
  const result = climaDesdeCelsius(Number(temp));

  document.getElementById("resultado").innerHTML = `
    <b>Resultado del clima</b><br>
    Temperatura: ${temp}°C<br>
    Clima: <b>${result}</b>
  `;
}

// ==============================
// 2) FizzBuzz
// ==============================
function fizzBuzz() {
  let salida = [];
  for (let i = 1; i <= 100; i++) {
    const m3 = i % 3 === 0;
    const m5 = i % 5 === 0;

    if (m3 && m5) salida.push("FizzBuzz");
    else if (m3) salida.push("Fizz");
    else if (m5) salida.push("Buzz");
  }
  return salida.join(", ");
}

function mostrarFizzBuzz() {
  document.getElementById("resultado").innerHTML = `
    <b>FizzBuzz (del 1 al 100)</b><br><br>
    ${fizzBuzz()}
  `;
}

// ==============================
// 3) Fecha actual
// ==============================
function fechaActualEnEspañol() {
  const meses = [
    'Enero','Febrero','Marzo','Abril','Mayo','Junio',
    'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
  ];

  const dias = [
    'Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'
  ];

  const hoy = new Date();

  return `${dias[hoy.getDay()]}, ${hoy.getDate()} de ${meses[hoy.getMonth()]} del ${hoy.getFullYear()}`;
}

function mostrarFecha() {
  document.getElementById("resultado").innerHTML = `
    <b>Fecha actual:</b><br>
    ${fechaActualEnEspañol()}
  `;
}

// ==============================
// 4) Lugar turístico
// ==============================
const lugarTuristico = {
  nombre: 'Castillo Histórico',
  ciudad: 'La Paz',
  precioEntrada: 50,
  horario: '09:00 - 18:00',
  calificaciones: [4, 5, 3, 4, 5],

  promedioCalificaciones() {
    const suma = this.calificaciones.reduce((a, b) => a + b, 0);
    return (suma / this.calificaciones.length).toFixed(2);
  },

  aplicarDescuento(porcentaje) {
    this.precioEntrada = this.precioEntrada * (1 - porcentaje / 100);
  }
};

function mostrarLugar() {
  lugarTuristico.aplicarDescuento(10);

  document.getElementById("resultado").innerHTML = `
    <b>Lugar Turístico</b><br><br>
    Nombre: ${lugarTuristico.nombre}<br>
    Ciudad: ${lugarTuristico.ciudad}<br>
    Horario: ${lugarTuristico.horario}<br>
    Promedio de calificaciones: ${lugarTuristico.promedioCalificaciones()}<br>
    Precio con descuento: ${lugarTuristico.precioEntrada.toFixed(2)}
  `;
}

// ==============================
// 5) Hotel
// ==============================
class Hotel {
  constructor(nombre, ciudad, habitacionesDisponibles) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.habitacionesDisponibles = habitacionesDisponibles;
  }

  reservar(cant) {
    if (cant <= this.habitacionesDisponibles) {
      this.habitacionesDisponibles -= cant;
      return `Se reservaron ${cant} habitaciones.`;
    } else {
      return `No hay suficientes habitaciones.`;
    }
  }

  liberar(cant) {
    this.habitacionesDisponibles += cant;
    return `Se liberaron ${cant} habitaciones.`;
  }

  info() {
    return `Hotel: ${this.nombre}, Ciudad: ${this.ciudad}, Habitaciones disponibles: ${this.habitacionesDisponibles}`;
  }
}

const hotel = new Hotel("Hotel Sol", "Cochabamba", 10);

function mostrarHotel() {
  const r = prompt("¿Cuántas habitaciones deseas reservar?");
  const reserva = hotel.reservar(Number(r));

  const l = prompt("¿Cuántas deseas liberar?");
  const liberadas = hotel.liberar(Number(l));

  document.getElementById("resultado").innerHTML = `
    <b>Hotel</b><br><br>
    ${hotel.info()}<br><br>
    ${reserva}<br>
    ${liberadas}<br><br>
    <b>Estado final:</b> ${hotel.info()}
  `;
}
