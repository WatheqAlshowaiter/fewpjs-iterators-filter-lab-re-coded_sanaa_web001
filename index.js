let findMatching = function (arrayString, name) {
  return arrayString.filter((e) => e.toLowerCase() == name.toLowerCase());
};


let fuzzyMatch = function(arrayString, firstLetter){
  return arrayString.filter((e)=> e.charAt(0).toLowerCase() === firstLetter.toLowerCase());
}