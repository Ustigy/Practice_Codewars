// return masked string
function maskify(cc) {
  let count = 0;
  for (let i = -5; i >= -cc.length; i--) count++;
  
  return cc = ('#').repeat (count) + cc.substr (-4,4); 
}