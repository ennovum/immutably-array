import test from 'tape';

import {move} from './move';

test('immutably-array / move / move item in an empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const resultOutput = move(input, null, 0, 1);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / move / move item in a not empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar'];
        const resultOutput = move(input, null, 1, 1);
        const expectedOutput = ['foo', 'bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar'];
        const resultOutput = move(input, null, 0, 1);
        const expectedOutput = ['bar', 'foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = move(input, null, 0, 2);
        const expectedOutput = ['bar', 'baz', 'foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: ['xxx', 'yyy']}}};
        const resultOutput = move(input, 'foo.bar.baz', 0, 1);
        const expectedOutput = {foo: {bar: {baz: ['yyy', 'xxx']}}};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / move / move item in no array', (testCase) => {
    testCase.throws(() => {
        const input = null;
        move(input, null, 0, 1);
    });

    testCase.throws(() => {
        const input = {};
        move(input, null, 0, 1);
    });

    testCase.end();
});
