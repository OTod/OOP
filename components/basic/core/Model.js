const PRIVATE = new WeakMap();

export default class Model{
  
  registeredElements = [];
  
  constructor(options) {
    if(!Model.instance){
      Model.instance = this;
    }
    if(!options || !options.url) {throw new Error("MODEL must receive url as input object property")} 
    else {
      let {url} = options;
      PRIVATE.set(this,{url, _modelInstance: this});
    }
    this.init();
    
    return Model.instance;
  }

  setUrl(url){
    const opts = PRIVATE.get(this);
    PRIVATE.set(Object.assign(opts, {url}));
  }

  fetch(){
    const url = PRIVATE.get(this).url;
    let options = PRIVATE.get(this);

    let pr = new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function(){
      if(this.status === 200 && this.status < 300){
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      };
    }
    xhr.onerror = function(){
      reject(xhr.statusText)
    }
    xhr.send()
    })
    PRIVATE.set(this, Object.assign(options,{data: pr}));
    return pr;
  }

  getData(){
    return PRIVATE.get(this).data;
  }

  registerElement(el) {
    this.registeredElements.push(el);
  }

  init(){};





}


