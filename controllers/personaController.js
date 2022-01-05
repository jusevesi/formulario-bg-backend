const { executeQuery } = require('../services/mysql.service');

const obtenerPersonas = async (req, res) => {
    try {
        const response = await executeQuery(`SELECT * FROM persona`);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

const agregarPersona = async (req, res) => {
    try {
        const { cedula, nombre, nacimiento, genero, papa, mama } = req.body;
        const response = await executeQuery(`INSERT INTO persona (cedula, nombre, nacimiento, genero, papa, mama) VALUES ('${cedula}','${nombre}','${nacimiento}','${genero}','${papa}','${mama}')`);
        res.status(201).json({ message: 'created', id: response.insertId });
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

module.exports = {
    agregarPersona,
    obtenerPersonas,
    actualizarPersona,
    eliminarPersona,
}