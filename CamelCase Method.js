String.prototype.camelCase=function(){
  let array = this.split(' ');
  let camelArray = [];
  
  for (let key of array) {
    if (key == 0) continue;
    camelArray += key[0].toUpperCase() + key.slice(1, key.length);
   }
  
  return (String(camelArray));
}