import Model from "./Model.js";
import View from "./View.js";

const PRIVATE = new WeakMap();
export default class Element {

  view;
  model;

  constructor(){
    PRIVATE.set(this, {view: new View("div")});
    this.init();
  }

  setData(model){
    let options = PRIVATE.get(this);
    PRIVATE.set(this, Object.assigh(options,{model}));
  }

  add(element) {
    PRIVATE.get(this).view.addElement(element);
  }

  get element() {
    return PRIVATE.get(this).view.getElement();
  }

  init(){}

  

}