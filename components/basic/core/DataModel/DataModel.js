// import Http from "../http/Http.js";

export default class DataModel{
  constructor(url){
    this.url = url;

    this.initialize();
  }

  url = "";

  fetchedData = null;

  initialize(){
    console.log("initialized");
  }

  fetch(){
    this.fetchedData = new Promise((resolve, reject)=>{
      let xhr = new XMLHttpRequest();
      xhr.addEventListener("load",(ev)=>{
        resolve(JSON.parse(ev.target.responseText));
        // console.log("loaded");
        // debugger;
        // console.log(JSON.parse(ev.target.responseText));
  
      })
      xhr.addEventListener("error", ev => {
        reject(ev);// todo: define passing the error message here instead of the real data
      })
      xhr.open("GET", this.url);
      xhr.send();

    })

  };

  get data(){
    return this.fetchedData;
  }

  getUrl(requestType) {
    if(requestType === "GET"){
      return ""
    }
  }

  update(){};
  updateOne(){};
  deleteOne(){};


}