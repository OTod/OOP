import testModule from "./testModule/testModule.js"

export default class Main{
  constructor(){
    console.log("main works")
    let test = new testModule("testParameters");
  }
}