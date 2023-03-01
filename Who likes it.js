function likes(names) {
  let gap = 'no one';
  let message = 'likes this';
  
  switch(names.length) {
      case 0:
      return gap + ' ' + message;
      
      case 1:
      gap = names[0];
      return gap + ' ' + message;
  }
  
  message = 'like this';
  
    switch(names.length) {
      case 2:
      gap = names[0] + ' and ' + names[1];
      return gap + ' ' + message;
        
      case 3:
      gap = names[0] + ', ' + names[1] + ' and ' + names[2];
      return gap + ' ' + message;
        
      default:
      gap = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others';
      return gap + ' ' + message;
  }
  
}