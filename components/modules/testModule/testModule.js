import Model from "../../basic/core/Model.js";
import Element from "../../basic/core/Element.js";
import Table from "../../basic/elements/table/Table.js";

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
    
    let table = new Table();
    this.add(table);

    
    model.fetch()
    .then(data=> {
      table.setData(this.getTableConfig(data));
    })
    .catch(err => {console.log(err)})


  }
  



  getTableConfig(data){ // mock of the table data needed
    return {
    columnHeadings: ["Name", "Value", "Year"],  
    columnKeys:["name","cost", "yearOfIssue"],
    data
    
    // :[
    //   {columnOneKey:"columnOneValue", columnTwoKey: "columnTwovalue", columnThreeKey:"columnThreeValue"},
    //   {columnOneKey:"columnOneValue", columnTwoKey: "columnTwovalue", columnThreeKey:"columnThreeValue"},
    // ]
  }
  }


}