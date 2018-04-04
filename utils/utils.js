module.exports.add = (a, b) => a + b;

module.exports.square = x => x * x;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback( a + b );
  }, 1000);
};

module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback( a * a );
  }, 1000);
};

module.exports.setName = (user, fullName) => {
  const name = fullName.split(' ');
  return user = {
    firstName: name[0],
    lastName: name[1]
  }
};
