const mysql = require('mysql2');

const getConnection = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'pruebabg',
        port: 3306
    });
    connection.connect((error) => {
        if (error) {
            throw error;
        } else {
            console.log('Conexion correcta.');
        }
    });
    return connection;
}

const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        try{
            const connection = getConnection();
            connection.query(query, (error, result) => {
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            });
            connection.end(() => console.log('conexion cerrada'));
        }catch(error){
            console.log(error)
            reject(error);
        }
    });
    
}

module.exports = {
    executeQuery
}
