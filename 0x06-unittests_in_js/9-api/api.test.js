const { expect } = require("chai");
const request = require('request');

describe('Testing endpoint', () => {
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
    describe('GET /cart/12', () => {
        it('Respond with Payment methods for cart 12', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/12',
                method: 'GET',
            };

            request(options, function (error, res, body) {
                expect(res.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 12');
                done();
            });
        });
    });
    describe('GET /cart/110', () => {
        it('Respond with Payment methods for cart 110', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/110',
                method: 'GET',
            };

            request(options, function (error, res, body) {
                expect(res.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 110');
                done();
            });
        });
    });
    describe('GET /cart/hello', () => {
        it('Respond with 404 error - Non-integer value', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/hello',
                method: 'GET',
            };

            request(options, function (error, res, body) {
                expect(res.statusCode).to.equal(404);
                done();
            });
        });
    });
    describe('GET /cart/', () => {
        it('Respond with 404 error - No data', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/',
                method: 'GET',
            };

            request(options, function (error, res, body) {
                expect(res.statusCode).to.equal(404);
                done();
            });
        });
    });
});
