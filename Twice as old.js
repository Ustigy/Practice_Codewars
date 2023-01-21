function twiceAsOld(dadYearsOld, sonYearsOld) {
  
  let twiceAsOld = sonYearsOld * 2;
  
  if ((dadYearsOld - twiceAsOld) > 0) return (dadYearsOld - twiceAsOld);
  return -(dadYearsOld - twiceAsOld);
  
}