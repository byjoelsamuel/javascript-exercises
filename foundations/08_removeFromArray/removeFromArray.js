
const removeFromArray = function (array, ...args) {
  const newArray = [];
  array.forEach((item) => {
d
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

module.exports = removeFromArray;
