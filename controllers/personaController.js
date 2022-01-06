const { executeQuery } = require('../services/mysql.service');

const obtenerPersonas = async (req, res) => {
    try {
        const response = await executeQuery(`SELECT * FROM persona`);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        console.log(error);
    }
}

const agregarPersona = async (req, res) => {
    try {
        const { cedula, nombre, nacimiento, genero, papa, mama } = req.body;
        const persona = await executeQuery(`SELECT * FROM persona WHERE cedula = ${cedula}`);
        if (persona.length > 0) {
            res.json({ message: "This person already exists" })
        } else {
            const response = await executeQuery(`INSERT INTO persona (cedula, nombre, nacimiento, genero, papa, mama) VALUES ('${cedula}','${nombre}','${nacimiento}','${genero}',${papa},${mama})`);
            res.status(201).json({ message: 'created', id: response.insertId });
        }
    } catch (error) {
        console.log(error);
    }
}

const actualizarPersona = async (req, res) => {
    try {
        const { cedula, nombre, nacimiento, genero, papa, mama } = req.body;
        const response = await executeQuery(`UPDATE persona SET cedula= '${cedula}', nombre = '${nombre}', nacimiento = '${nacimiento}', genero = '${genero}', papa = '${papa}', mama = '${mama}' WHERE (idpersona = '${req.query.id}');`);
        res.status(200).json({ message: 'updated', id: req.query.id });
    } catch (error) {
        console.log(error);
    }
}

const eliminarPersona = async (req, res) => {
    try {
        await executeQuery(`UPDATE persona SET papa=${null} WHERE (papa = '${req.query.id}');`);
        await executeQuery(`UPDATE persona SET mama=${null} WHERE (mama = '${req.query.id}');`);
        const response = await executeQuery(`DELETE FROM persona WHERE (idpersona = '${req.query.id}');`);
        if (response.affectedRows >= 0) {
            res.json({ message: 'deleted' });
        } else {
            res.status(404).json({ message: `No existe registro con id: ${req.params.id}` })
        }
    } catch (error) {
        console.log(error);
    }
}

const obtenerDataHijos = async (hijos) => {
    return new Promise((resolve, reject) => {
        const data = hijos.map(async (hijo) => {
            const resp = await executeQuery(`SELECT * FROM persona WHERE (idpersona = '${hijo.idHijo}');`);
            return 'hola';
        });
        console.log(data)
        resolve(data);
    })
    
}
const obtenerHijos = async (req, res) => {
    try {
        const hijos = await executeQuery(`SELECT * FROM personas_hijos WHERE (idPM = '${req.query.id}');`);
        console.log(hijos)
        if (hijos.length > 0) {
            const hijosInfo = [];
            for(const hijo of hijos ){
                const resp = await executeQuery(`SELECT * FROM persona WHERE (idpersona = '${hijo.idHijo}');`);
                hijosInfo.push(resp[0])
            }
            res.json({ message: 'Tiene hijos', hijosInfo });
        } else {
            res.status(404).json({ message: 'No tiene hijos', hijosInfo: [] })
        }
    } catch (error) {
        console.log(error);
    }
}

const agregarHijo = async(req, res) => {
    console.log(req.body)
    try {
        const response = await executeQuery(`INSERT INTO personas_hijos (idPM, idHijo) VALUES ('${req.body.idPM}','${req.body.idHijo}')`);
        res.status(201).json({ message: 'created', id: response.insertId });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    agregarPersona,
    obtenerPersonas,
    actualizarPersona,
    eliminarPersona,
    obtenerHijos,
    agregarHijo
}