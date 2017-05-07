import test from 'tape';

import {push} from './push';

test('immutably / push / push to an empty array', (testCase) => {
    const testScenario1 = () => {
        const input = [];
        const value = 'foo';
        const resultOutput = push(input, null, value);
        const expectedOutput = ['foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario1);

    const testScenario2 = () => {
        const input = [];
        const values = ['foo', 'bar'];
        const resultOutput = push(input, null, ...values);
        const expectedOutput = ['foo', 'bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario2);

    const testScenario3 = () => {
        const input = {foo: []};
        const value = 'bar';
        const resultOutput = push(input, 'foo', value);
        const expectedOutput = {foo: ['bar']};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario3);

    testCase.end();
});

test('immutably / push / push to a not empty array', (testCase) => {
    const testScenario1 = () => {
        const input = ['foo'];
        const value = 'bar';
        const resultOutput = push(input, null, value);
        const expectedOutput = ['foo', 'bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario1);

    const testScenario2 = () => {
        const input = ['foo'];
        const values = ['bar', 'baz'];
        const resultOutput = push(input, null, ...values);
        const expectedOutput = ['foo', 'bar', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario2);

    const testScenario3 = () => {
        const input = {foo: ['bar']};
        const value = 'baz';
        const resultOutput = push(input, 'foo', value);
        const expectedOutput = {foo: ['bar', 'baz']};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario3);

    testCase.end();
});

test('immutably / push / empty push', (testCase) => {
    const testScenario1 = () => {
        const input = [];
        const values = [];
        const resultOutput = push(input, null, ...values);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.equal(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario1);

    testCase.end();
});

test('immutably / push / push to no array', (testCase) => {
    const testScenario1 = () => {
        const input = null;
        const value = true;
        push(input, null, value);
    };

    testCase.throws(testScenario1);

    const testScenario2 = () => {
        const input = {};
        const value = true;
        push(input, null, value);
    };

    testCase.throws(testScenario2);

    testCase.end();
});
