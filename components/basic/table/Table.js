import ContainerElement from "../core/ContainerElement/ContainerElement.js";


/*
Ok, so here is the table. 
There should be some specific format to receive as an input, what about:

{
  columnHeadings: ["columnOneName", "columnTwoName"],  - also determines quantity of the columns
  columnKeys:["columnOneKey","columnTwoKey"],
  data:[
    {columnOneKey:columnOneValue, columnTwoKey: columnTwovalue, columnThreeKey:columnThreeValue},
    {columnOneKey:columnOneValue, columnTwoKey: columnTwovalue, columnThreeKey:columnThreeValue},
  ]
}

todo: filters? common data source? twoway binding?

*/

export default class Table extends ContainerElement{
  constructor(initialData){
    super("table");
    this.options = initialData;
    this.buildTable();
  }
  
  options = null;
  
  buildTable(){
    let headerRow = new ContainerElement("tr"); //todo: refactor, no need for instantiating elements for smallest bits 
    this.options.columnHeadings.forEach(element => {
      let headerCell = new ContainerElement("th");
      headerCell.element.innerHTML = element
      headerRow.addElement(headerCell);
    });
    this.addElement(headerRow);
    this.options.data.forEach(entry => {
      let dataRow = new ContainerElement("tr");
      this.options.columnKeys.forEach(key => {
        let dataCell = new ContainerElement("td");
        dataCell.element.innerHTML = entry[key];
        dataRow.addElement(dataCell);
      })
      this.addElement(dataRow);
    })
  }

}