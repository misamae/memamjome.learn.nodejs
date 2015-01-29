var assert = require('assert');
var expect = require('chai').expect;
var productsRepo = require('../../data/productsRepository.js');

describe('productsRepository', function () {

    describe('get', function () {
        it('get returns products', function () {
            var products = productsRepo.get();
            expect(products.length).to.be.at.least(1);
        });
    });

});