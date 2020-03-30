import Element from "../element/Element.js";

export default class Input extends Element{
  
  constructor(params){
    super("input")
    this.params = params;
    this.setAttributes(this.params);
  }
  params = {};
  // template = `<input 
  // type="${this.params.type}"
  // placeholder="${this.params.placeholder}"
  // src="${this.params.src}"
  // >`

}