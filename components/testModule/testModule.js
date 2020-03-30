import Element from "../basic/element/Element.js";
import Input from "../basic/Input/InputElement.js";

export default class testModule extends Element{
  constructor( ){
    super("div");
    const input = new Input({type:"text", placeholder: "placeholder"})
    debugger;
    this.addElement(input);
    const picture = new Element("img");
    picture.setAttributes({src:"https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png"})
    this.addElement(picture);
    debugger;
    // this.update();
  }
}