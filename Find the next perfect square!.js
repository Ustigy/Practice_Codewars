function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 !== 0) return -1;
  
  let nextSquare = (Math.sqrt(sq) + 1) ** 2;
  return nextSquare;
}