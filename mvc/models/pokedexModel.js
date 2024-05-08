class Pokedex{
    #id
    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

    #nomepk
    get nomepk() {
        return this.#nomepk
    }
    set nomepk(value) {
        this.#nomepk = value
    }
    #nomepe
    get nomepe() {
        return this.#nomepe
    }
    set nomepe(value) {
        this.#nomepe = value
    }
    #imagem
    get imagem() {
        return this.#imagem
    }
    set imagem(value) {
        this.#imagem = value
    }
    constructor(id, nomepk,nomepe,imagem){
        this.#id = id
        this.#nomepk = nomepk
        this.#nomepe = nomepe
        this.#imagem = imagem
    }
    toJson(){
        return {
            "id": this.#id,
            "nomepk": this.#nomepk,
            "nomepe": this.#nomepe,
            "imagem":this.#imagem

        }
    }
}
module.exports= Pokedex