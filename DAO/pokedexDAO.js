const Pokedex = require ("../mvc/models/pokedexModel");
const Database = require ("../repository/database");

class PokedexDAO {
    #conexao
    constructor(){
        this.#conexao= new Database();
    }
    async consultarPokedex(){
        const lista_pokedex = []
        const pokes = await this.#conexao.selecionarPokedex()

        if (pokes) {
            for (const poke of pokes) {
                const objPokedex = new Pokedex()
                objPokedex.nomepk = poke.nome_pokemon
                objPokedex.nomepe = poke.nome_pessoa
                objPokedex.imagem = poke.imagem_pokemon
                lista_pokedex.push(objPokedex.toJson())
            }
        }

        return lista_pokedex
    }
}

module.exports=PokedexDAO