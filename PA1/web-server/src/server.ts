import express, { Express, Request, Response } from 'express';
import { QueueFactory } from './pipeline/QueueFactory';
import { Pipeline } from './pipeline/Pipeline';
import { toLowercaseWithSpaces, toUppercase, replaceSpacesWithDots, filterWithRandomError, addHolaBruno } from './filters/filters';
import { CustomData } from './data-structure/CustomData';
require('dotenv').config();

// construye una funcion de creacion de colas dependiendo de un parm se crea una funcion u otra (bull o rabbit)
const queueFactory = QueueFactory.getQueueFactory<CustomData>; //ojo que no la invoca aca si no dentro de la Pipeline
// Crear una nueva instancia de Pipeline usando Bull como backend de la cola
const pipeline = new Pipeline<CustomData>([toLowercaseWithSpaces, filterWithRandomError,toUppercase, replaceSpacesWithDots, addHolaBruno], queueFactory);
//se crea el listener para cuando un job termina
pipeline.on('finalOutput', (output) => {
    console.log(`Salida final del PIPELINE: ${output.data}`);
});

//se crea el listener para cuando un job da error
pipeline.on('errorInFilter', (error, data) => {
    console.error(`Error en el filtro: ${error}, Datos: ${data.data}`);
});
const app: Express = express();
const port: number = 3000;

app.use(express.json());

app.post('/users', (req: Request, res: Response) => {
  console.log('Received data. Using name:', req.body.name);
  //data must be a string
  let dataToProcess: CustomData = {data: req.body.name}
  pipeline.processInput(dataToProcess); 

  res.status(201).send({ message: 'Agendado en el pipeline', user: req.body.name });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});