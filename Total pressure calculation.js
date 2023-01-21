solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  let tempK = temp + 273.15;
  let R = 0.082;

  let pTotal = (givenMass1 / molarMass1 + givenMass2 / molarMass2) * R * tempK * (1/volume);
  return pTotal;

}