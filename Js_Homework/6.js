class Translator{
    constructor(arg) {
        this.arg = arg.toLowerCase()
    }
    pigLatinTranslator(){
        const text = this.arg.split(' ');
        const result = text.map(e => e.substring(1)+e.substring(0,1)+'ay');
        return result.join(' ');
      }
    englishTranslator(){
        const text = this.arg.split(' ');
        const result = text.map(e => e.substr(e.length-3,1)+e.substring(0,e.length-3));
        return result.join(' ');
    }
}
const translate = new Translator('siema leszek co tam');
// console.log(translate.englishTranslator());
console.log(translate.pigLatinTranslator());



