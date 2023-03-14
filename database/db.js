const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_DATABASE,
})
conexion.connect((error)=>{
    if(error){
        console.log('ek error de concexion es:'+error)
        return
    }
    console.log('conectado a  ala base de datos de MYSQL')
})
module.exports=conexion