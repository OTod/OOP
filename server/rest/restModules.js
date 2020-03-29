// todo- add modularity in rest here. For now  - here are simple rest requests for testing. use basic route /api/..
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => {
  res.send("everything works well, for now;");
})


module.exports = router;

