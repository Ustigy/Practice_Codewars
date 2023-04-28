function nbYear(p0, percent, aug, p) {
  let value = p0;
  let count = 0;
  while(value <= p) {
    value += value * percent / 100 + aug;
    count++;
  }
  return count;
}