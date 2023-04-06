function countSheeps(arrayOfSheep) {
  arrayOfSheep = arrayOfSheep.filter(el => el === true);
  return arrayOfSheep.length;
}