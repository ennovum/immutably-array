import test from 'tape';

import {unshift} from './unshift';

test('immutably / unshift / unshift to an empty array', (testCase) => {
    const testScenario1 = () => {
        const input = [];
        const value = 'foo';
        const resultOutput = unshift(input, null, value);
        const expectedOutput = ['foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario1);

    const testScenario2 = () => {
        const input = [];
        const values = ['foo', 'bar'];
        const resultOutput = unshift(input, null, ...values);
        const expectedOutput = ['foo', 'bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario2);

    const testScenario3 = () => {
        const input = {foo: []};
        const value = 'bar';
        const resultOutput = unshift(input, 'foo', value);
        const expectedOutput = {foo: ['bar']};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario3);

    testCase.end();
});

test('immutably / unshift / unshift to a not empty array', (testCase) => {
    const testScenario1 = () => {
        const input = ['foo'];
        const value = 'bar';
        const resultOutput = unshift(input, null, value);
        const expectedOutput = ['bar', 'foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario1);

    const testScenario2 = () => {
        const input = ['foo'];
        const values = ['bar', 'baz'];
        const resultOutput = unshift(input, null, ...values);
        const expectedOutput = ['bar', 'baz', 'foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario2);

    const testScenario3 = () => {
        const input = {foo: ['bar']};
        const value = 'baz';
        const resultOutput = unshift(input, 'foo', value);
        const expectedOutput = {foo: ['baz', 'bar']};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario3);

    testCase.end();
});

test('immutably / unshift / empty unshift', (testCase) => {
    const testScenario1 = () => {
        const input = [];
        const values = [];
        const resultOutput = unshift(input, null, ...values);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.equal(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario1);

    testCase.end();
});

test('immutably / unshift / unshift to no array', (testCase) => {
    const testScenario1 = () => {
        const input = null;
        const value = true;
        unshift(input, null, value);
    };

    testCase.throws(testScenario1);

    const testScenario2 = () => {
        const input = {};
        const value = true;
        unshift(input, null, value);
    };

    testCase.throws(testScenario2);

    testCase.end();
});
