class Language {
    constructor(idioma, progresso, nivel, dificuldade) {
        this.id =  this.generateId();
        this.idioma = idioma;
        this.progresso = progresso;
        this.nivel = nivel;
        this.dificuldade = dificuldade || [];
    }
    generateId() {
        return Math.floor(Math.random() * 999) + 1;
    }
}

export default Language;