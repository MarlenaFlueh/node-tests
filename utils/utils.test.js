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

it('should have first and last name', () => {
  const userObject = {age: 21, location: 'Germany'};
  const res = utils.setName({userObject}, 'Malle Flueh');
  expect(res).toInclude({firstName: 'Malle', lastName: 'Flueh'}).toBeA('object');
});
