# prueba-bg-backend

Este repositorio corresponde al backend hecho con node.js para el reto Bdbg.

## Pasos para ejecutar el proyecto

1. Instalar node js
2. Instalar Mysql Workbench 
3. Crear BD
```sql
CREATE SCHEMA `pruebabg` DEFAULT CHARACTER SET utf8 ;
```
4. Crear tabla
```sql
CREATE TABLE `persona` (
  `idpersona` int NOT NULL AUTO_INCREMENT,
  `cedula` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `nacimiento` date DEFAULT NULL,
  `genero`  int DEFAULT NULL,
  `papa`  int DEFAULT NULL,
  `mama` int DEFAULT NULL,
  PRIMARY KEY (`idpersona`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```
5. Cambiar credenciales en archivo mysql.service.js
   
6. Clonar el proyecto
```sh
git clone https://github.com/jusevesi/prueba-bg-backend
```
7. Instalar modulos de node
```sh
npm install
```   
8. Ejecutar el proyecto
```sh
npm start
```