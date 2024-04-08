import * as fs from 'fs';

// Registrar el evento 'uncaughtException'
process.on('uncaughtException', (error) => {
  console.error('Excepción no controlada detectada:', error);

  // Aquí puedes realizar la limpieza necesaria
  // Por ejemplo, cerrar archivos o conexiones a bases de datos abiertas, etc.
  // Simulamos un registro de errores en un archivo
  fs.appendFileSync('errores.log', `Excepción no controlada: ${error}\n`);

  // Terminar el proceso con un código de salida que indica un error (por ejemplo, 1)
  process.exit(1);
});

// Simulamos una función que podría lanzar un error
function funcionRiesgosa() {
  throw new Error('Algo salió mal');
}

// Llamamos a la función riesgosa para simular un error no controlado
funcionRiesgosa();
