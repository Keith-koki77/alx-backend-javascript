const sinon = require('sinon')
const { expect } = require('chai');

const util = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');


describe('', () => {
    it('Validating utils', () => {
        const check = sinon.spy(util, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(check.calledOnce).to.be.true;
        expect(check.calledWith('SUM', 100, 20)).to.be.true;
        check.restore();
    });
});
