const express = require("express");
const path = require("path");

const router = express.Router();
const app = express();

const restRoutes = require("./rest/restModules");
const modules = require("../components/modules");

function server(){
  app.use(express.json())
  app.use(express.urlencoded({extended: true}));
  app.use("/",router);
  app.use("/api",restRoutes);

  router.use((req,res,next)=> {
    res.append("Access-Control-Allow-Origin", ["*"]); // allow requests from ay origin for CORS
    res.append("Access-Control-Allow-Methods", ["GET","PUT","POST","DELETE"]); // allowing methods for CORS
    res.append("Access-Control-Allow-Headers", "Content-Type") // Allow headers for Cors
    next();
  })
  
  console.log(modules)
  modules.forEach(componentPathObject => {
    let route = Object.keys(componentPathObject)[0];
    let filePath = componentPathObject[route];
    
    router.get(`/${route}`,(req, res)=>{
      res.sendFile(filePath)
    })
  })
  
  router.get('/', (req,res) => {
    const indexPath = path.resolve(__dirname, "../", "index.html");
    res.sendFile(indexPath)
  })
  router.get('/main.css', (req,res) => {
    const indexPath = path.resolve(__dirname, "../", "main.css");
    res.sendFile(indexPath)
  })
  router.get('/script.js', (req,res) => {
    console.log("script js file requestsd")
    const indexPath = path.resolve(__dirname, "../", "script.js");
    res.sendFile(indexPath)
  })

  app.listen(4200, ()=>{console.log("Server is up and running on port 4200")});

}

module.exports = server;