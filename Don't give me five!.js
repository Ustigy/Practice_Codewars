function dontGiveMeFive(start, end)
{
  return 0;
}



let dontGiveMeFive = (start, end) => {
  let result = 0;
  
  for (let i = 0; i < end; i++) {
    if (i === 5) break;
    result += i;
  }
  return result;
}



let dontGiveMeFive = (start, end) => {
  let array = [];
  
  for (let i = start; i < end; i++) {
    array += i;
    console.log(array);
  }
   
    
  
}






let dontGiveMeFive = (start, end) => {
  let array = '';
  let result = '';
  
  for (let i = start; i < end; i++) {
    array += i;
    console.log(array);
  }
   
  for (let j = 0; j < array.length; j++) {
    console.log(array[j]);
    if (array[j] === '5') continue;
    result += array[j];
  }
  return result;
  
  
  
}




let dontGiveMeFive = (start, end) => {
  let array = '';
  let result = '';
  
  for (let i = start; i <= end; i++) {
    array += i;
  }
   
  for (let j = 0; j < array.length; j++) {
    if (array[j] === '5') continue;
    result += array[j];
  }

  return result.length;
     
}