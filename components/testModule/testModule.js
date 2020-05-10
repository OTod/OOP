import Input from "../basic/Input/InputElement.js";
import ContainerElement from "../basic/core/ContainerElement/ContainerElement.js";

import DataModel from "../basic/core/DataModel/DataModel.js";

import Table from "../basic/table/Table.js";

export default class testModule extends ContainerElement{
  constructor( ){
    super("div");
    const input = new Input({type:"text", placeholder: "placeholder"})
    // debugger;
    // this.addElement(input);
    // const picture = new Element("img");
    // picture.setAttributes({src:"https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png"})
    // this.addElement(picture);
    // debugger;
    // this.update();
    let newContainer = new ContainerElement();
    newContainer.addElement(input);
    newContainer.resetStyle({"display":"flex","justify-content":'flex-end', "width": "100%"});

    this.addElement(newContainer);

    let DModel = new DataModel("/api/testData");
    DModel.fetch();
    DModel.data.then(data=>{
      console.log(data);
      let tableData =  this.getTableConfig();
      tableData.data = data;

      let table = new Table(tableData);
      this.addElement(table);
    })
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