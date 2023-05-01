function isPangram(string){
	string = string.toUpperCase();
	let set = new Set(string);
	let arr = Array.from(set).filter(el => el !== ' ' && el !== '.' && el !== ',');
  
	return (arr.length === 26);
  }