function digitize(n) {
  return Array.from(`${n}`).reverse().map(el => +el);
}