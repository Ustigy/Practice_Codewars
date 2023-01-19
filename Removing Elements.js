function removeEveryOther(arr){

  for (let i = 1; i < arr.length; i++) {
    arr.splice(i,1);
  }
  
  return (arr);
  
}



function doubleChar(str) {
  for (let i = 0; i < str.length; i = i + 2) {
      str[i] = str [i] + str [i];
    }

  return str;
  
}