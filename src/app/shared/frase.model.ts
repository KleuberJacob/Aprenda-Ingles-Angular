export class Frase {
    public fraseEng: string;
    public frasePtBr: string

    constructor(fraseEng: string, frasePtBr: string) {
        this.fraseEng = fraseEng;
        this.frasePtBr = frasePtBr;
    }
    // Caso queira deixar a classe ainda menos verbosa podemos criar o construtor da seguinte forma
    //constructor(public fraseEng: string, public frasePtBr: string) { }
}