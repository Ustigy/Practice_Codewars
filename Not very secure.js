function alphanumeric(string){
  return string ? string.length === string.replace(/[^a-z^0-9]/gi,'').length:false;
}