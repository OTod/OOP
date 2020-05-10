/*
  Purposes:
  1. positioning.
  2. controller for all contained elements
  3. state holder.
  
*/
import Element from "../element/Element.js";


export default class ContainerElement extends Element {
  constructor(element, styling, options = {}){
    /*
    options(in presume):
    {children: Element[],
    }

    */
    super(element || "div");
    this.options = options;
    if(!element) {
      this.resetStyle({display: "flex"});
    }
    this.resetStyle(styling || {})
    if(this.options.children) {
      this.options.children.forEach(child => this.addElement(child));
    }
  }
  options = null;
  children = [];
  
  addElement(el){ // not needed for element
    this.children.push(el);
    this.element.appendChild(el.element)
  }
  
  update(){
    this.children.every(el => el.update()); // todo - finish function for children update;
  }

}