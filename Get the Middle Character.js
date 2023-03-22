function getMiddle(s) {
  if (s.length % 2 === 0) {
    let pos = s.length / 2;
    return s[pos - 1] + s[pos];
  } else if (s.length % 2 !== 0) {
    let pos = s.length / 2;
    return s[Math.floor(pos)];
  } else {
    return s;
  }
}