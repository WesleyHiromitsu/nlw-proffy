import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());

// para deixar as rotas em outro arquivo
app.use(routes);

app.listen(3333);
