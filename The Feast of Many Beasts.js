function feast(beast, dish) {
  return (beast.at(0) === dish.at(0)) && (beast.at(-1) === dish.at(-1));
}