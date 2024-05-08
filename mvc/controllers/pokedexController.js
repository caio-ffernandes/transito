const path = require('path')
const PokedexDAO = require('../../DAO/pokedexDAO')

module.exports= (app) =>{
    app.get("/pokedex", async (req, res) => {
        
        const pokedexDAO = new PokedexDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.status(201).json(await pokedexDAO.consultarPokedex())

    })
}