import View from "./View.js";

const PRIVATE = new WeakMap();
export default class Element {

  constructor(tagname){
    PRIVATE.set(this, {view: new View(tagname ? tagname : "div")});
    this.init();
  }

  setData(model){
    let options = PRIVATE.get(this);
    PRIVATE.set(this, Object.assigh(options,{model}));
    this.init();
  }

  add(element) {
    PRIVATE.get(this).view.addElement(element);
  }

  purge() {
    this.element.innerText = "";
  }

  get element() {
    return PRIVATE.get(this).view.getElement();
  }

  init(){}

  validateInput(){
    //todo: provide redefineable method that could be used to check input
  }

  

}