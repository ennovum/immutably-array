import test from 'tape';

import {move} from './move';

test('immutably-array / move / move value in an empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const resultOutput = move(input, null, 0, 1);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.equal(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / move / move value in a not empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar'];
        const resultOutput = move(input, null, 1, 1);
        const expectedOutput = ['foo', 'bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.equal(input, resultOutput);
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

test('immutably-array / move / move value from a not existing area of an array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = move(input, null, 10, 1);
        const expectedOutput = ['foo', 'bar', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.equal(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / move / move value to a not existing area of an array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = move(input, null, 1, 10);
        const expectedOutput = ['foo', 'baz', 'bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / move / move value from an index found with a function', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = move(input, null, (value) => (value === 'foo'), 2);
        const expectedOutput = ['bar', 'baz', 'foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = move(input, null, (value, index) => (index === 0), 2);
        const expectedOutput = ['bar', 'baz', 'foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / move / move value to an index found with a function', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = move(input, null, 0, (value) => (value === 'baz'));
        const expectedOutput = ['bar', 'baz', 'foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = move(input, null, 0, (value, index) => (index === 2));
        const expectedOutput = ['bar', 'baz', 'foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = move(input, null, 0, (value, index, input, fromValue) => (value !== fromValue));
        const expectedOutput = ['bar', 'foo', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = move(input, null, 0, (value, index, input, fromValue, fromIndex) => (index === fromIndex + 1));
        const expectedOutput = ['bar', 'foo', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / move / move value in no array', (testCase) => {
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
