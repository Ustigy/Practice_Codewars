var countSheep = function (num){
  
  let result = "";
  
  if (num > 0) {
      let i = 0;

      while (i < num) {
        i++;
        result = result + i + ' sheep...';
      }

  }
  return result;
}