const sinon = require('sinon')
const { expect } = require('chai');

const util = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');


describe('', () => {
    it('Validating utils using stubs and spies', () => {
        const check = sinon.spy(console, 'log');
        const stub = sinon.stub(util, 'calculateNumber');
        stub.returns(10);

        sendPaymentRequestToApi(100, 20);

        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(check.calledOnceWithExactly('The total is: 10')).to.be.true;

        check.restore();
        stub.restore();
    });
});
