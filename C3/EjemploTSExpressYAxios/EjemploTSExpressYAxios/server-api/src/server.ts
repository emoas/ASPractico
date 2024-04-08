import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = 3000;

app.use(express.json());

app.post('/users', (req: Request, res: Response) => {
  console.log('Received data:', req.body);
  res.status(201).send({ message: 'User created successfully', user: req.body });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
