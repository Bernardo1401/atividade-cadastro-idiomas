import { Router } from "express";
import UsersRepository from "../../models/users/LanguagesRepository.js";

const idiomasRoutes = Router();
const languagesList = new UsersRepository();

idiomasRoutes.get("/", (req, res) => {
    const idiomas = languagesList.getAllLanguages();
    return res.status(200).json({
        message: idiomas.length == 0 ? "Não há idiomas cadastrados" : `Total de idiomas: ${idiomas.length}`, idiomas,
    });
});



export default idiomasRoutes;