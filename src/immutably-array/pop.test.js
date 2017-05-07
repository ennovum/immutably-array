import test from 'tape';

import {pop} from './pop';

test('immutably / pop / pop from an empty array', (testCase) => {
    const testScenario1 = () => {
        const input = [];
        const resultOutput = pop(input, null);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario1);

    const testScenario2 = () => {
        const input = [];
        const resultOutput = pop(input, null);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario2);

    const testScenario3 = () => {
        const input = {foo: []};
        const resultOutput = pop(input, 'foo');
        const expectedOutput = {foo: []};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario3);

    testCase.end();
});

test('immutably / pop / pop from a not empty array', (testCase) => {
    const testScenario1 = () => {
        const input = ['foo'];
        const resultOutput = pop(input, null);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario1);

    const testScenario2 = () => {
        const input = ['foo', 'bar'];
        const resultOutput = pop(input, null);
        const expectedOutput = ['foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario2);

    const testScenario3 = () => {
        const input = {foo: ['bar']};
        const resultOutput = pop(input, 'foo');
        const expectedOutput = {foo: []};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    };

    testCase.doesNotThrow(testScenario3);

    testCase.end();
});

test('immutably / pop / pop from no array', (testCase) => {
    const testScenario1 = () => {
        const input = null;
        pop(input, null);
    };

    testCase.throws(testScenario1);

    const testScenario2 = () => {
        const input = {};
        pop(input, null);
    };

    testCase.throws(testScenario2);

    testCase.end();
});
