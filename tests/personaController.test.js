const { obtenerPersonas } = require("../controllers/personaController")

describe("pesonaController", () => {
    it("",()=>{ 
        const response = obtenerPersonas();
        console.log(response);
    })
})