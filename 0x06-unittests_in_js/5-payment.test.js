const sinon = require('sinon')
const sendPaymentRequestToApi = require('./5-payment.js');
const { expect } = require('chai');

describe("", () => {
    let spy;
    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        sinon.restore();
    });
    it('Test calling sendPaymentRequestToAPI with 100, and 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('The total is: 120')).to.be.true;
    });
    it('Test calling sendPaymentRequestToAPI with 10, and 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('The total is: 20')).to.be.true;
    });
})
