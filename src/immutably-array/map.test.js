import test from 'tape';

import {map} from './map';

test('immutably-array / map / map of the same values', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo'];
        const resultOutput = map(input, null, (value) => value);
        const expectedOutput = ['foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.equal(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = map(input, null, (value) => value);
        const expectedOutput = ['foo', 'bar', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.equal(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: ['xxx']}}};
        const resultOutput = map(input, 'foo.bar.baz', (value) => value);
        const expectedOutput = {foo: {bar: {baz: ['xxx']}}};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.equal(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / map / map of different values', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo'];
        const resultOutput = map(input, null, (value) => value + 'x');
        const expectedOutput = ['foox'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = map(input, null, (value) => value + 'x');
        const expectedOutput = ['foox', 'barx', 'bazx'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: ['xxx']}}};
        const resultOutput = map(input, 'foo.bar.baz', (value) => value + 'x');
        const expectedOutput = {foo: {bar: {baz: ['xxxx']}}};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});
