function grabDoll(dolls){
  var bag=[];
  
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty"
    || dolls[i] === "Barbie doll") {
      
      if (bag.length < 3) {
        bag.push(dolls [i]);
      } else break;
      
    } else continue;
    
  }

  return bag;
}