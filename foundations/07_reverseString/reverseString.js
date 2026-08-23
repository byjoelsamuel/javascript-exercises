  const reverseString = function (string) {
    let reversedString = "";

    // reverse order, and print backwards
    for (let i = string.length -1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  };

// Do not edit below this line
module.exports = reverseString;
