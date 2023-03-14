const  express= require('express')
const dotenv = require('dotenv')
const cookieParser=require('cookie-parser')
 const app=express()
 //
 app.listen(3000,()=>{
    console.log('server up running in http://localhost:3000')
     }) 
// el motor de plantillas
 app.set ('view engine','ejs') 
 //la carpeta public  para archivos estaticos
 app.use(express.static('public'))
 //para proecesar datos enviados desde formas 
 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
 //las variables de entornoe  
 dotenv.config({path:'./env/.env'})
 //para trabajar en los cookies 
//   app.use(cookieParser)
app.use('/',require('./routes/route'))
//

   


