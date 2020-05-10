// const path = require('path'); // no need ot require path here, dependency already added higher
const path = require("path");

module.exports = [
  "main.js",
  "testModule/testModule.js",
  "basic/core/element/Element.js",
  "basic/Input/InputElement.js",
  "basic/core/ContainerElement/ContainerElement.js",
  "basic/table/Table.js",
  "basic/core/DataModel/DataModel.js"
].map(component => {
  return {
    [component]: path.resolve(__dirname, component)
  }
});