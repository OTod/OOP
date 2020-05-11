import Model from "../../basic/core/Model.js";
import Element from "../../basic/core/Element.js";

export default class testModule extends Element{
  constructor( ){
    super("div");
  }
  // test of basic
  init(){
    let el = new Element("span");
    el.element.innerHTML = "sometesttext";
    this.add(el);
    // let model = new Model({url: "/api/testData"});
    let model = new Model({url: "/api/testData"});
    model.fetch()
    .then(data=> {console.log(data)})
    .catch(err => {console.log(err)})


    let model2 = new Model({url: "/api/testData"});
    model2.getData().then(data=> {console.log(data)})

  }
  



  getTableConfig(){ // mock of the table data needed
    return {
    columnHeadings: ["columnOneName", "columnTwoName"],  
    columnKeys:["columnOneKey","columnTwoKey", ""]
    // data:[
    //   {columnOneKey:"columnOneValue", columnTwoKey: "columnTwovalue", columnThreeKey:"columnThreeValue"},
    //   {columnOneKey:"columnOneValue", columnTwoKey: "columnTwovalue", columnThreeKey:"columnThreeValue"},
    // ]
  }
  }


}