const mysql = require("mysql2")

class Database{

    #connection 

    constructor(){
        this.#connection = mysql.createPool({
            host: "localhost",
            user:"root",
            password:"",
            database:"pokedex"
        }).promise()
    }
   
    async selecionarPokedex(){
        const pokedexData = await this.#connection.query("select * from registropokemon;")
        return pokedexData[0]
     } 
    
}

module.exports = Database