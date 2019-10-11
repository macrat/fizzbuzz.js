import assert from 'power-assert';

import {range, replace, modRule} from '../src/fizzbuzz.mjs';


/** @test {range} */
describe('range', () => {
    it('ascending list', () => {
        assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5]);
        assert.deepStrictEqual(range(1, 5, 2), [1, 3, 5]);
        assert.deepStrictEqual(range(0, 5, 2), [0, 2, 4]);
    });

    it('descending list', () => {
        assert.deepStrictEqual(range(5, 1, -1), [5, 4, 3, 2, 1]);
        assert.deepStrictEqual(range(5, 1, -2), [5, 3, 1]);
        assert.deepStrictEqual(range(5, 0, -2), [5, 3, 1]);
    });

    it('negative value', () => {
        assert.deepStrictEqual(range(-5, 0), [-5, -4, -3, -2, -1, 0]);
        assert.deepStrictEqual(range(-2, 2), [-2, -1, 0, 1, 2]);
        assert.deepStrictEqual(range(2, -2, -1), [2, 1, 0, -1, -2]);
    });

    it('invalid step', () => {
        assert.throws(() => range(0, 10, -1), /^Error: invalid step$/);
        assert.throws(() => range(10, 0, 1), /^Error: invalid step$/);
    });
});


/** @test {replace} */
describe('replace', () => {
    it('simple replace', () => {
        assert.deepStrictEqual(
            replace([1, 2, 3, 4, 5], [
                x => [x%2 == 0, '*'],
            ]),
            [1, '*', 3, '*', 5],
        );
    });

    it('default value', () => {
        assert.deepStrictEqual(
            replace([1, 2, 3, 4, 5], [
                x => [x%2 == 0, x],
                x => [true, '*'],
            ]),
            ['*', 2, '*', 4, '*'],
        );
    });
});


/** @test {modRule} */
describe('modRule', () => {
    it('simple', () => {
        assert.deepStrictEqual(modRule(2, '*')(2), [true, '*']);
        assert.deepStrictEqual(modRule(2, '*')(3), [false, '*']);
    });
});
