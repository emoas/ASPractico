import * as os from 'os';

// Obtener la memoria total del sistema
const totalMemoria = os.totalmem();

// Obtener la memoria libre/disponible del sistema
const memoriaLibre = os.freemem();

// Convertir bytes a megabytes para una mejor legibilidad
const totalMemoriaMB = (totalMemoria / 1024 / 1024).toFixed(2);
const memoriaLibreMB = (memoriaLibre / 1024 / 1024).toFixed(2);

console.log(`Memoria Total: ${totalMemoriaMB} MB`);
console.log(`Memoria Libre/Disponible: ${memoriaLibreMB} MB`);

// Calcular y mostrar el porcentaje de memoria libre
const porcentajeMemoriaLibre = ((memoriaLibre / totalMemoria) * 100).toFixed(2);
console.log(`Porcentaje de Memoria Libre/Disponible: ${porcentajeMemoriaLibre}%`);
