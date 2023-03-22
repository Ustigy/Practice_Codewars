function humanReadable (seconds) {
  let h = Math.floor(seconds / 3600);
  if(h < 10) h = '0' + h;
  
  let m = Math.floor(seconds / 60 - h * 60);
  if(m < 10) m = '0' + m;
  
  let s = seconds - h * 3600 - m * 60;
  if(s < 10) s = '0' + s;
   
  return h + ':' + m + ':' + s;
}