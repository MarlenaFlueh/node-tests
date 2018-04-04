module.exports.add = (a, b) => a + b;
module.exports.square = x => x * x;
module.exports.setName = (user, fullName) => {
  const name = fullName.split(' ');
  return user = {
    firstName: name[0],
    lastName: name[1]
  }
};
