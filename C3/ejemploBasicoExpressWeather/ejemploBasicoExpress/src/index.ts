import express, { Request, Response } from "express";
import { weather } from "./weather";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/help", (req: Request, res: Response) => {
  res.send("<h1>Help!</h1>");
});

app.get("/about", (req: Request, res: Response) => {
  res.send({
    name: "Marco",
    age: 23,
  });
});

app.get("/weather", (req: Request, res: Response) => {
  if (!req.query.address) {
    return res.send({ error: "You must provide an address" });
  }

  weather(req.query.address as string, (error, data) => {
    if (error) {
      return res.send({ error });
    } else {
      res.send({ data });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
