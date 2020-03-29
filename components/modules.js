// const path = require('path'); // no need ot require path here, dependency already added higher
const path = require("path");

module.exports = [
  "main.js",
  "testModule/testModule.js"
].map(component => {
  return {
    [component]: path.resolve(__dirname, component)
  }
});