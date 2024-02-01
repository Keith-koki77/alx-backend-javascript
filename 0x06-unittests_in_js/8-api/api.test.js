const { expect } = require("chai");
const request = require('request');

describe('Testing edpoint', () => {
    describe('GET /', () => {
        it('Response with Welcome to payment system', (done) => {
            const options = {
                url: 'http://localhost:7865',
                method: 'GET',
            };

            request(options, function (error, res, body) {
                expect(res.statusCode).to.equal(200);
                expect(body).to.equal('Welcome to the payment system');
                done();
            });
        });
    });
});
