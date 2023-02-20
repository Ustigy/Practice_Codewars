String.prototype.camelCase=function(){
  let array = this.split(' ');
  let camelArray = [];
  console.log(array)
  
  for (let key of array) {
    console.log(key == 0)
    if (key == 0) continue;
    camelArray += key[0].toUpperCase() + key.slice(1, key.length);
    
  }
  
//   console.log(camelArray);
  return (String(camelArray));
}

//   console.log("test case".camelCase())
//   console.log("camel case method".camelCase())
// //   console.log("say hello".camelCase())
//   console.log(" camel case word".camelCase())
//   console.log("".camelCase())