
import { Router } from "express";

// Lista de importação das rotas do projeto
import idiomasRoutes from "./idiomas.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Vamos meu fi!" });
});

// Lista de uso das rotas do projeto
routes.use("/idiomas", idiomasRoutes);

export default routes;