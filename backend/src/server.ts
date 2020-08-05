import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

// para deixar as rotas em outro arquivo
app.use(routes);

app.listen(3333);
