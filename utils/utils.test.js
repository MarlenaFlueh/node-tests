const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  const res = utils.square(5);

  expect(res).toBe(25).toBeA('number');
});

it('should async square a number', () => {
  utils.asyncSquare(3,(sum) => {
    expect(sum).toBe(9).toBeA('number');
  });
});

it('should add with set time out', (done) => {
  utils.asyncAdd(1, 2, (sum) => {
    expect(sum).toBe(3).toBeA('number');
    done();
  });
});

it('should have first and last name', () => {
  const userObject = {age: 21, location: 'Germany'};
  const res = utils.setName({userObject}, 'Malle Flueh');
  expect(res).toInclude({firstName: 'Malle', lastName: 'Flueh'}).toBeA('object');
});
