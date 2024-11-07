import User from './Language.js';

class LanguagesRepository {

constructor() {
    this.languages = [];
}

getAllLanguages() {
    return this.languages;
}

addLanguage(idioma, progresso, nivel, dificuldade) {
    const newLanguage = new User(idioma, progresso, nivel, dificuldade);

    this.languages.push(newLanguage);
    
    return newLanguage;
}
getLanguageById(id) {
    const language = this.languages.find((u) => u.id == id);
    if (!language) {
        return null;
    }
    return language;
}

}

export default LanguagesRepository;