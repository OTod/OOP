import testModule from "./testModule/testModule.js"
import Element from"./basic/element/Element.js"

export default class Main extends Element{
  constructor(){
    super();
    console.log("main works")
    let test = new testModule("testParameters");

    document.getElementById("__main-container").appendChild(test.element);

    
  }
}