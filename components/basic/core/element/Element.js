export default class Element {
  constructor(elType, initialStyles = {}){
    this.elType = elType ? elType : "div";
    this.element = document.createElement(this.elType);
    this.resetStyle(initialStyles);
  }
  elType = "";
  element = null; 
  // template =`<div>${this.container}</div>`;
  
  // get template() {
  //   this.container = this.children.reduce((acc,val) => acc + val.template)
  //   return this.template
  // }

  init(){} // todo
  render(){} // todo

  get element(){
    return this.element;
  }
  
  setAttributes(params = {}){
    for(let attribute in params){
      this.element.setAttribute(attribute, params[attribute] );
    };
  }

  resetStyle(styles){
    /*
    styles in format of 
    {
      background: "green",
      border: "1px solid red"
    }
    */
    let stylesString = Object.entries(styles).map(el=>el.join(": ")).join("; ");
    this.element.setAttribute("style", stylesString);
  }

  setProperties(props){
    this.properties = props; // todo: this should be unified, and updated in all the existing classes
  }

}