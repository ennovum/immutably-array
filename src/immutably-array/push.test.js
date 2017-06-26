import test from 'tape';

import {push} from './push';

test('immutably-array / push / push to an empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const value = 'foo';
        const resultOutput = push(input, null, value);
        const expectedOutput = ['foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = [];
        const values = ['foo', 'bar'];
        const resultOutput = push(input, null, ...values);
        const expectedOutput = ['foo', 'bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: []};
        const value = 'bar';
        const resultOutput = push(input, 'foo', value);
        const expectedOutput = {foo: ['bar']};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / push / push to a not empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo'];
        const value = 'bar';
        const resultOutput = push(input, null, value);
        const expectedOutput = ['foo', 'bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo'];
        const values = ['bar', 'baz'];
        const resultOutput = push(input, null, ...values);
        const expectedOutput = ['foo', 'bar', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: ['bar']};
        const value = 'baz';
        const resultOutput = push(input, 'foo', value);
        const expectedOutput = {foo: ['bar', 'baz']};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / push / empty push', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const values = [];
        const resultOutput = push(input, null, ...values);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.equal(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / push / push to no array', (testCase) => {
    testCase.throws(() => {
        const input = null;
        const value = true;
        push(input, null, value);
    });

    testCase.throws(() => {
        const input = {};
        const value = true;
        push(input, null, value);
    });

    testCase.end();
});
