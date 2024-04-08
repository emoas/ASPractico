import readline from "readline";
import { promisify } from "util";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = promisify(rl.question).bind(rl);

async function main() {
  try {
    const respuesta: any = await question("Qué módulo deseas cargar? (A/B): ");

    let modulo;

    if (respuesta.toUpperCase() === "A") {
      modulo = require("./moduloA");
    } else if (respuesta.toUpperCase() === "B") {
      modulo = require("./moduloB");
    } else {
      console.log("Entrada no válida. Por favor, elige A o B.");
      rl.close();
      return;
    }

    modulo();

    rl.close();
  } catch (error) {
    console.error("Ocurrió un error:", error);
    rl.close();
  }
}

main();
