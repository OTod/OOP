// todo- add modularity in rest here. For now  - here are simple rest requests for testing. use basic route /api/..
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => {
  res.send("everything works well, for now;");
  
})

router.get("/testData", (req,res) => {

  setTimeout(()=>{
    res.send(JSON.stringify([
      {columnOneKey:"columnOneValue", columnTwoKey: "columnTwovalue", columnThreeKey:"columnThreeValue"},
      {columnOneKey:"columnOneValue", columnTwoKey: "columnTwovalue", columnThreeKey:"columnThreeValue"},
    ]))


  },1000)
})


module.exports = router;

