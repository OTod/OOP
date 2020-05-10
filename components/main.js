import testModule from "./testModule/testModule.js"
import Element from"./basic/core/element/Element.js"

export default class Main extends Element{
  constructor(){
    super();
    console.log("main works")
    let test = new testModule("testParameters");

    // Place to add all the elements
    document.getElementById("__main-container").appendChild(test.element);

    
  }
}