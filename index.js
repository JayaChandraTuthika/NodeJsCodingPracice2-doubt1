const addDays = require("date-fns/addDays");

const myFunc = (num) => {
  const newDate = addDays(new Date(2020, 8, 22), num);
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
};
// console.log(myFunc(3));

module.exports = myFunc;

