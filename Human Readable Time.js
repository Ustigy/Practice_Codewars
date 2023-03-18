function humanReadable (seconds) {
  let date = new Date(seconds * 1000);
  
  let hoursClock = date.getHours();
  if (hoursClock < 10) hoursClock = '0' + hoursClock;
  
  let minutesClock = date.getMinutes();
  if (minutesClock < 10) minutesClock = '0' + minutesClock;
  
  let secondsClock = date.getSeconds();
  if (secondsClock < 10) secondsClock = '0' + secondsClock;
  
  return hoursClock + ':' + minutesClock + ':' + secondsClock;
}