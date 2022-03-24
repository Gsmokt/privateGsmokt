const dictionary = require('./dictionary');

class Translator{
    constructor(text, translateMethod, dictionary) {
        this.dictionary = dictionary;
        this.text = text;
        this.translateMethod = translateMethod
    }
    translate(){
        return this.translateMethod(this.text,this.dictionary);
    }   
}
class TranslatorsEngine{
    translateToMorse(text, dictionary){
        return text.split('').flatMap(e => [...e].map(el => Object.keys(dictionary).find(key => dictionary[key] === el))).join(' ');
    }
    translateToEnglish(text, dictionary){
        return text.split(' ').map(e => dictionary[e]).join('');
    }
}

const translatorsEngine = new TranslatorsEngine();
const toMorseTranslator = new Translator('hello world', translatorsEngine.translateToMorse, dictionary);
console.log(toMorseTranslator.translate());

const toEnglishTranslator = new Translator('.... . .-.. .-.. --- // .-- --- .-. .-.. -..', translatorsEngine.translateToEnglish, dictionary);
console.log(toEnglishTranslator.translate());
    
    
  
  