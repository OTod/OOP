const PRIVATE = new WeakMap();

export default class View{
  constructor(tagName){
    const element = createTemplate(tagName);
    PRIVATE.set(this,{element})

    this.init();
  }

  init(){
  }

  getElement(){
    return PRIVATE.get(this).element;
  }

  addElement(el) {
    PRIVATE.get(this).element.appendChild(el.element);
  }


}

function createTemplate(tagName) {
  return document.createElement(tagName);
}