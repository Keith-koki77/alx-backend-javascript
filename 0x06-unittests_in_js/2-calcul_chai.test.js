const assert = require('assert');
const { expect } = require('chai');
const { it, describe, test } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
      it('Checking rounding of numbers 1', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      });
      it('Checking rounding of numbers 2', () => {
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      });
      it('Checking rounding of numbers 3', () => {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      });
      it('Checking rounding of numbers 4', () => {
        expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      });
      it('Checking rounding of numbers 5', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });
      it('Checking rounding of numbers using -ve numbers', () => {
        expect(calculateNumber('SUM', -1.3, -3.7)).to.equal(-5);
      });
    });
    describe('SUBTRACT', () => {
      it('Checking rounding of numbers 1 SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      });
      it('Checking rounding of numbers 2 SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      });
      it('Checking rounding of numbers 3 SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 6.2, 3.7)).to.equal(2);
      });
      it('Checking rounding of numbers 4 SUBTRACT   ', () => {
        expect(calculateNumber('SUBTRACT', 5.5, 3.7)).to.equal(2);
      });
      it('Checking rounding of numbers 5 SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      });
      it('Checking rounding of numbers 6 SUBTRACT using -ve numbers', () => {
        expect(calculateNumber('SUBTRACT', -1.3, -3.7)).to.equal(3);
      });
    });
    describe('DIVIDE', () => {
      it('Checking rounding of numbers 1 SUBTRACT', () => {
        expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
      });
      it('Checking rounding of numbers 2 SUBTRACT', () => {
        expect(calculateNumber('DIVIDE', 4, 3.7)).to.equal(1);
      });
      it('Checking rounding of numbers 3 SUBTRACT', () => {
        expect(calculateNumber('DIVIDE', 2.2, 0.7)).to.equal(2);
      });
      it('Checking rounding of numbers 4 SUBTRACT', () => {
        expect(calculateNumber('DIVIDE', 15, 2.7)).to.equal(5);
      });
      it('Checking rounding of numbers 5 SUBTRACT', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      });
      it('Checking division by zero ', () => {
        expect(calculateNumber('DIVIDE', -1.3, 0)).to.equal('Error;');
      });
    });
  });
