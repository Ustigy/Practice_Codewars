function nearestSq(n){
  
    let nextSq = n;
    while (Math.sqrt(nextSq) % 1 != 0) {
      nextSq++;
    }
    
      let lastSq = n;
    while (Math.sqrt(lastSq) % 1 != 0) {
      lastSq--;
    }
    
    if ((n - lastSq) < (nextSq - n)) return lastSq;
    else return nextSq;
    
  }