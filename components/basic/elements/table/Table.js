import Element from "../../core/Element.js"

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
const PRIVATE = new WeakMap();

const defaultInitData = {
  columnHeadings: [],  
  columnKeys:[],
  data:[
    {},
  ]
}

export default class Table extends Element{
  constructor(initialData = defaultInitData){
    super("table");

    PRIVATE.set(this, {initialProperties: initialData, properties: initialData})

    this.renderTable();
  }
  
  properties = null;
  
  renderTable(){
    const {properties} = PRIVATE.get(this);
    this.purge();
    let headerRow = new Element("tr"); //todo: refactor, no need for instantiating elements for smallest bits 
    properties.columnHeadings.forEach(element => {
      let headerCell = new Element("th");
      headerCell.element.innerHTML = element
      headerRow.add(headerCell);
    });
    this.add(headerRow);
    properties.data.forEach(entry => {
      let dataRow = new Element("tr");
      properties.columnKeys.forEach(key => {
        let dataCell = new Element("td");
        dataCell.element.innerHTML = entry[key];
        dataRow.add(dataCell);
      })
      this.add(dataRow);
    })
  }

  setData(properties) {
    const props = PRIVATE.get(this);
    PRIVATE.set(Object.assign(props,{properties}))
    this.renderTable();
  }

}