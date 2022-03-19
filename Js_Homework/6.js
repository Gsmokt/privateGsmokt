class Translator {
  constructor(text, translateMethod) {
    this.text = text;
    this.translateMethod = translateMethod;
  }
  Translate() {
    return this.translateMethod(this.text);
  }
}
class TranslationsEngine {
  ToPigLatin(text) {
    const result = [...text.split(" ")]
      .map( e => e.slice(1) + e.slice(0, 1).toLowerCase() + "ay")
      .join(" ");
    return (
      text + " -- eng/pig latin -- " + result[0].toUpperCase() + result.slice(1)
    );
  }
  ReverseFromPigLatin(text) {
    const result = [...text.split(" ")]
      .map( e => e.substr(e.length - 3, 1) + e.slice(0, e.length - 3).toLowerCase())
      .join(" ");
    return (
      text + " -- pig latin/eng- - " + result[0].toUpperCase() + result.slice(1)
    );
  }
}
let translationEngine = new TranslationsEngine();
let toPigLatinTranslator = new Translator(
  "The quick brown fox",
  translationEngine.ToPigLatin
);
console.log(toPigLatinTranslator.Translate());
let fromPigLatinToEnglish = new Translator(
  "Hetay uickqay rownbay oxfay",
  translationEngine.ReverseFromPigLatin
);
console.log(fromPigLatinToEnglish.Translate());
