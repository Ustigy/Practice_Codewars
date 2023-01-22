function solution(str){
  
  let value = '';
  
  for (let i = -1; i >= (-str.length); i--) {
      value = value + str.at(i);
    }

  return value;
}