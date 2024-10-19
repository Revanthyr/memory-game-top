function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function arrayWithoutDuplicates(length) {
  // create initial array,
  // while it has duplicates,
  // redo values
  let returnArray = [];
  for (let i = length; i > 0; i--) {
    returnArray.push(getRandomNumber(1, 202));
  }
  function checkDuplicates(arr) {
    let holder = [];
    arr.forEach((curr) => {
      if (holder.indexOf(curr) == -1) {
        holder.push(curr);
        return true;
      } else return false;
    });
    return holder;
  }
  while (checkDuplicates(returnArray).length < length) {
    returnArray = [];
    for (let i = length; i > 0; i--) {
      returnArray.push(getRandomNumber(1, 202));
    }
  }
  return returnArray;
}
console.log(arrayWithoutDuplicates(20));
export { getRandomNumber, arrayWithoutDuplicates };
