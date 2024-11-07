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

idiomasRoutes.post("/", (req, res) => {
    const { idioma, progresso, nivel, dificuldade } = req.body;

    if (!idioma) {
        return res.status(400).json({
            message: "O campo idioma é obrigatório!",
        });
    }

    if (!progresso) {
        return res.status(400).json({
            message: "O campo progresso é obrigatório!",
        });
    }

    if ( nivel != "iniciante" && nivel != "intermediário" && nivel != "avançado") {
        return res.status(400).send({
            message: "Digite 'iniciante', 'intermediário' ou 'avançado' como nível",
        });
    }

    if(dificuldade.length < 2) {
        return res.status(400).json({
            message: "Digite duas dificuldades ou mais",
        });
    }

    const newLanguage = languagesList.addLanguage(idioma, progresso, nivel, dificuldade);
    return res.status(201).json({
        message: "Idioma cadastrado com sucesso!", 
        newLanguage,
        
    });
});

idiomasRoutes.put("/:id", (req, res) => {
const { idioma, progresso, nivel, dificuldade } = req.body;

    if (!idioma) {
        return res.status(400).json({
            message: "O campo idioma é obrigatório!",
        });
    }

    if (!progresso) {
        return res.status(400).json({
            message: "O campo progresso é obrigatório!",
        });
    }

    if ( nivel != "iniciante" && nivel != "intermediário" && nivel != "avançado") {
        return res.status(400).send({
            message: "Digite 'iniciante', 'intermediário' ou 'avançado' como nível",
        });
    }

    if(dificuldade.length < 2) {
        return res.status(400).json({
            message: "Digite duas dificuldades ou mais",
        });
    }

    const newLanguage = languagesList.addLanguage(idioma, progresso, nivel, dificuldade);
    return res.status(201).json({
        message: "Idioma atualizado com sucesso!", 
        newLanguage,
        
    });
});



export default idiomasRoutes;