import test from 'tape';

import {unshift} from './unshift';

test('immutably-array / unshift / unshift to an empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const value = 'foo';
        const resultOutput = unshift(input, null, value);
        const expectedOutput = ['foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = [];
        const values = ['foo', 'bar'];
        const resultOutput = unshift(input, null, ...values);
        const expectedOutput = ['foo', 'bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: []};
        const value = 'bar';
        const resultOutput = unshift(input, 'foo', value);
        const expectedOutput = {foo: ['bar']};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / unshift / unshift to a not empty array', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo'];
        const value = 'bar';
        const resultOutput = unshift(input, null, value);
        const expectedOutput = ['bar', 'foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo'];
        const values = ['bar', 'baz'];
        const resultOutput = unshift(input, null, ...values);
        const expectedOutput = ['bar', 'baz', 'foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: ['bar']};
        const value = 'baz';
        const resultOutput = unshift(input, 'foo', value);
        const expectedOutput = {foo: ['baz', 'bar']};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / unshift / empty unshift', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const values = [];
        const resultOutput = unshift(input, null, ...values);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.equal(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / unshift / unshift to no array', (testCase) => {
    testCase.throws(() => {
        const input = null;
        const value = true;
        unshift(input, null, value);
    });

    testCase.throws(() => {
        const input = {};
        const value = true;
        unshift(input, null, value);
    });

    testCase.end();
});
