import getAngle from './clock.js';

test('0:00', () => {
  expect(getAngle(0, 0)).toBe(0);
});

test('12:00', () => {
  expect(getAngle(12, 0)).toBe(0);
});

test('3:00', () => {
  expect(getAngle(3, 0)).toBe(90);
});

test('6:00', () => {
  expect(getAngle(6, 0)).toBe(180);
});

test('9:00', () => {
  expect(getAngle(9, 0)).toBe(270);
});

test('21:00', () => {
  expect(getAngle(21, 0)).toBe(270);
});

test('15:15', () => {
  expect(getAngle(15, 15)).toBe(7.5);
});

test('15:30', () => {
  expect(getAngle(15, 30)).toBe(75);
});

test('15:45', () => {
  expect(getAngle(15, 45)).toBe(157.5);
});

test('10:47', () => {
  expect(getAngle(10, 47)).toBe(41.5);
});