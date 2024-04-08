function ejecutarBloque1(): void {
    // Simula una tarea que toma tiempo
    for (let i = 0; i < 1000000; i++) {
      Math.sqrt(i);
    }
  }
  
  function ejecutarBloque2(): void {
    // Simula otra tarea que toma tiempo
    for (let i = 0; i < 1000000; i++) {
      Math.log(i);
    }
  }
  
  // Medir el tiempo de ejecución del Bloque 1
  console.time('Tiempo de ejecución del Bloque 1');
  ejecutarBloque1();
  console.timeEnd('Tiempo de ejecución del Bloque 1');
  
  // Medir el tiempo de ejecución del Bloque 2
  console.time('Tiempo de ejecución del Bloque 2');
  ejecutarBloque2();
  console.timeEnd('Tiempo de ejecución del Bloque 2');
  