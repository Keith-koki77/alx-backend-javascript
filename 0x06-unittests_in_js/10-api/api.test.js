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
    describe('GET /available_payments', () => {
        it('Respond with correct JSON string', (done) => {
          const options = {
            url: 'http://localhost:7865/available_payments',
            method: 'GET',
          };
    
          request(options, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal(
              '{"payment_methods":{"credit_cards":true,"paypal":false}}'
            );
            done();
          });
        });
      });
    
      describe('GET /available_payments', () => {
        it('Responds with correct JSON object when parsed', (done) => {
          const options = {
            url: 'http://localhost:7865/available_payments',
            method: 'GET',
          };
    
          request(options, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            const bodyParsed = JSON.parse(body);
    
            const referenceBody = {
              payment_methods: {
                credit_cards: true,
                paypal: false,
              },
            };
    
            expect(bodyParsed).to.deep.equal(referenceBody);
            done();
          });
        });
      });
    
      describe('POST /login', () => {
        it.skip('Responds with Welcome Betty', (done) => {
          const options = {
            url: 'http://localhost:7865/login',
            method: 'POST',
            json: {
              userName: 'Betty',
            },
          };
    
          request(options, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
          });
        });
      });
    
      describe('POST /login - No user', () => {
        it('Responds with Welcome undefined', (done) => {
          const options = {
            url: 'http://localhost:7865/login',
            method: 'POST',
          };
    
          request(options, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome undefined');
            done();
          });
        });
      });
});
