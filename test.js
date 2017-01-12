process.env.DEBUG="test";

const _ = require('lodash');
const debug = require('./')('test');
const util = require('util');
const expect = require('chai').expect;

describe('debugis', () => {
    let statements;
    beforeEach(() => {
        statements = [];
        debug.debug.useColors = false;
        debug.debug.log = function() {
            statements.push(util.format.apply(util, arguments));
        };
    });

    describe('debug(...)', () => {
        it('log Hello correctly', () => {
            debug.debug('Hello');
            expect(statements).to.have.lengthOf(1);
            expect(_.first(statements)).to.match(/.*Hello$/);
        });
    });

    describe('promise(...)', () => {
        it('resolve string correctly', () => {
            return Promise.resolve('resolved')
                .then(debug.promise('Hello', {}))
                .then(() => {
                    expect(statements).to.have.lengthOf(1);
                    expect(_.first(statements)).to.match(/.*Hello : { data: {}, results: \'resolved\' }$/);
                });
        });
    });
});
