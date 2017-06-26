import test from 'tape';

import {shift} from './shift';

test('immutably-array / shift / shift from an empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const resultOutput = shift(input, null);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: []};
        const resultOutput = shift(input, 'foo');
        const expectedOutput = {foo: []};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / shift / shift from a not empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo'];
        const resultOutput = shift(input, null);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar'];
        const resultOutput = shift(input, null);
        const expectedOutput = ['bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: ['bar']};
        const resultOutput = shift(input, 'foo');
        const expectedOutput = {foo: []};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / shift / shift from no array', (testCase) => {
    testCase.throws(() => {
        const input = null;
        shift(input, null);
    });

    testCase.throws(() => {
        const input = {};
        shift(input, null);
    });

    testCase.end();
});
