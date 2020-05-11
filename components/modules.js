// const path = require('path'); // no need ot require path here, dependency already added higher
const path = require("path");

module.exports = [
  "modules/main.js",
  "basic/core/Element.js",
  "basic/core/Model.js",
  "basic/core/View.js",

  "basic/elements/table/Table.js",



  "modules/testModule/testModule.js",
].map(component => {
  return {
    [component]: path.resolve(__dirname, component)
  }
});