export default class Element {
  constructor(elType){
    this.elType = elType ? elType : "div";
    this.element = document.createElement(this.elType);
  }
  children = [];
  container="";
  elType = "";
  element = null; 
  // template =`<div>${this.container}</div>`;
  
  // get template() {
  //   this.container = this.children.reduce((acc,val) => acc + val.template)
  //   return this.template
  // }

  get element(){
    return this.element;
  }

  addElement(el){
    this.children.push(el);
    this.element.appendChild(el.element)
  }
  
  setAttributes(params = {}){
    for(let attribute in params){
      this.element.setAttribute(attribute, params[attribute] );
    };
  }

  update(){
    this.children.every(el => el.update()); // todo - finish function for children update;
  }

}