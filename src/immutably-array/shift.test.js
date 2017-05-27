import test from 'tape';

import {shift} from './shift';

test('immutably / shift / shift from an empty array', (testCase) => {
    const testScenario1 = () => {
        const input = [];
        const resultOutput = shift(input, null);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario1);

    const testScenario2 = () => {
        const input = [];
        const resultOutput = shift(input, null);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario2);

    const testScenario3 = () => {
        const input = {foo: []};
        const resultOutput = shift(input, 'foo');
        const expectedOutput = {foo: []};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario3);

    testCase.end();
});

test('immutably / shift / shift from a not empty array', (testCase) => {
    const testScenario1 = () => {
        const input = ['foo'];
        const resultOutput = shift(input, null);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario1);

    const testScenario2 = () => {
        const input = ['foo', 'bar'];
        const resultOutput = shift(input, null);
        const expectedOutput = ['bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario2);

    const testScenario3 = () => {
        const input = {foo: ['bar']};
        const resultOutput = shift(input, 'foo');
        const expectedOutput = {foo: []};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario3);

    testCase.end();
});

test('immutably / shift / shift from no array', (testCase) => {
    const testScenario1 = () => {
        const input = null;
        shift(input, null);
    };

    testCase.throws(testScenario1);

    const testScenario2 = () => {
        const input = {};
        shift(input, null);
    };

    testCase.throws(testScenario2);

    testCase.end();
});
