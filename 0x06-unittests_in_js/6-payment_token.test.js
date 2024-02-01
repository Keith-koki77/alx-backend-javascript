const { expect } = require('chai')
const getPaymentTokenFromAPI = require('./6-payment_token.js')

describe('Testing getPaymentTokenFromAPI', () => {
    it('Returning Promise instance', () => {
        response = getPaymentTokenFromAPI()
        expect(response).to.be.an.instanceof(Promise);
    });
    it('Returning JSON response', () => {
        getPaymentTokenFromAPI(true)
        .then((response) => {
            expect(response.data).to.be.equal('Successful response from the API');
            done();
        });
    });
    it('Return nothing on success', () => {
        getPaymentTokenFromAPI(false)
        .then((response) => {
            expect(response).to.equal('');
        });
    });
});
