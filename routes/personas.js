const { obtenerPersonas, agregarPersona, actualizarPersona, eliminarPersona, obtenerHijos, agregarHijo } = require("../controllers/personaController")

const personaRoute = (app) => {
    app.get("/obtenerPersonas", obtenerPersonas)
    app.get("/obtenerHijos", obtenerHijos)
    app.post("/agregarPersona", agregarPersona )
    app.post("/agregarHijo", agregarHijo )
    app.put("/actualizarPersona", actualizarPersona)
    app.delete("/eliminarPersona", eliminarPersona)
}

module.exports = {
    personaRoute
}