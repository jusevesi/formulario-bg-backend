const { obtenerPersonas, agregarPersona, actualizarPersona, eliminarPersona } = require("../controllers/personaController")

const personaRoute = (app) => {
    app.get("/obtenerPersonas", obtenerPersonas)
    app.post("/agregarPersona", agregarPersona )
    app.put("/actualizarPersona", actualizarPersona)
    app.delete("/eliminarPersona", eliminarPersona)
}

module.exports = {
    personaRoute
}