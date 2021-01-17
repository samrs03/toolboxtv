const ReversingString = (stringExample) => {
  return stringExample.split("").reverse().join("");
};
const creatingAuxToCompare = (list) => {
  if (list.includes(' ')) {
    return list.split(' ').join('') === list.split(' ').join('').split('').reverse().join('')
  } else {
    return list === list.split("").reverse().join("")
  }
}
module.exports = { ReversingString, creatingAuxToCompare };
