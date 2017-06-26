import test from 'tape';

import {pop} from './pop';

test('immutably-array / pop / pop from an empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const resultOutput = pop(input, null);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: []};
        const resultOutput = pop(input, 'foo');
        const expectedOutput = {foo: []};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / pop / pop from a not empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo'];
        const resultOutput = pop(input, null);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar'];
        const resultOutput = pop(input, null);
        const expectedOutput = ['foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: ['bar']};
        const resultOutput = pop(input, 'foo');
        const expectedOutput = {foo: []};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / pop / pop from no array', (testCase) => {
    testCase.throws(() => {
        const input = null;
        pop(input, null);
    });

    testCase.throws(() => {
        const input = {};
        pop(input, null);
    });

    testCase.end();
});
