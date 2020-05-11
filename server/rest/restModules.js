// todo- add modularity in rest here. For now  - here are simple rest requests for testing. use basic route /api/..
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => {
  res.send("everything works well, for now;");
  
})

router.get("/testData", (req,res) => {

  setTimeout(()=>{
    res.send(JSON.stringify([
      {name:"BMW X5", cost: "38000", yearOfIssue:"2005"},
      {name:"Hyundai Tucson", cost: "25900", yearOfIssue:"2017"},
    ]))


  },1000)
})


module.exports = router;

