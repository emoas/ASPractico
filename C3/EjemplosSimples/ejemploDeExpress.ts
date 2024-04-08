// Importa las dependencias necesarias: Express para crear el servidor y body-parser para analizar el cuerpo de las solicitudes.
import bodyParser from 'body-parser';

import express, { Express, Request, Response } from 'express';

// Crea una instancia de la aplicación Express.
const app: Express = express();

// Define el puerto en el que se ejecutará el servidor.
const port: number = 3001;

// Utiliza bodyParser para analizar el cuerpo de las solicitudes en formato JSON.
app.use(bodyParser.json());

// Define la interfaz para el tipo de datos del estudiante.
interface Student {
  id: string;
  name: string;
  // Agrega más propiedades según sea necesario.
}

// Array para almacenar los datos de los estudiantes (simulación de una base de datos).
const students: Student[] = [];

// Ruta para crear (POST) un nuevo estudiante.
app.post('/students', (req: Request, res: Response) => {
  const newStudent: Student = req.body; // Obtiene los datos del estudiante del cuerpo de la solicitud.
  students.push(newStudent); // Agrega el nuevo estudiante al array.
  console.log('Student created:', newStudent); // Imprime un mensaje en la consola.
  res.status(201).json(newStudent); // Envía una respuesta con el estudiante creado y un código de estado 201 (Created).
});

// Ruta para leer (GET) todos los estudiantes.
app.get('/students', (req: Request, res: Response) => {
  res.json(students); // Envía una respuesta con la lista de estudiantes en formato JSON.
});

// Ruta para leer (GET) un estudiante específico por su ID.
app.get('/students/:id', (req: Request, res: Response) => {
  const studentId: string = req.params.id; // Obtiene el ID del estudiante de los parámetros de la URL.
  const student: Student | undefined = students.find(student => student.id === studentId); // Busca el estudiante en el array.

  if (!student) {
    return res.status(404).json({ message: 'Student not found' }); // Si el estudiante no se encuentra, devuelve un mensaje de error y un código de estado 404.
  }

  res.json(student); // Envía una respuesta con los datos del estudiante encontrado.
});

// Ruta para actualizar (PUT) un estudiante específico por su ID.
app.put('/students/:id', (req: Request, res: Response) => {
  const studentId: string = req.params.id; // Obtiene el ID del estudiante de los parámetros de la URL.
  const updatedData: Partial<Student> = req.body; // Obtiene los datos actualizados del estudiante del cuerpo de la solicitud.
  const index: number = students.findIndex(student => student.id === studentId); // Busca el índice del estudiante en el array.

  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' }); // Si el estudiante no se encuentra, devuelve un mensaje de error y un código de estado 404.
  }

  students[index] = { ...students[index], ...updatedData }; // Actualiza los datos del estudiante.
  console.log('Student updated:', students[index]); // Imprime un mensaje en la consola.
  res.json(students[index]); // Envía una respuesta con los datos del estudiante actualizado.
});

// Ruta para eliminar (DELETE) un estudiante específico por su ID.
app.delete('/students/:id', (req: Request, res: Response) => {
  const studentId: string = req.params.id; // Obtiene el ID del estudiante de los parámetros de la URL.
  const index: number = students.findIndex(student => student.id === studentId); // Busca el índice del estudiante en el array.

  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' }); // Si el estudiante no se encuentra, devuelve un mensaje de error y un código de estado 404.
  }

  const deletedStudent: Student[] = students.splice(index, 1); // Elimina el estudiante del array.
  console.log('Student deleted:', deletedStudent); // Imprime un mensaje en la consola.
  res.json({ message: 'Student deleted' }); // Envía una respuesta con un mensaje de éxito.
});

// Inicia el servidor y escucha en el puerto especificado.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
