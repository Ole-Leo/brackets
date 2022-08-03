module.exports = function check(str, bracketsConfig) {
  const bracketArr = [];

  bracketsConfig.forEach(elem => {
    bracketArr.push(elem[0] + elem[1]);
  });

  while (bracketArr.some(elem => str.includes(elem))) {
    bracketArr.forEach(bracket => {
      str = str.replace(bracket, '');
    });
  }

  return !str;
};
