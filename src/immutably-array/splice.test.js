import test from 'tape';

import {splice} from './splice';

test('immutably-array / splice / doing nothing with splice', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const resultOutput = splice(input, null, 0, 0);

        testCase.equal(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / splice / pushing elements to an array with splice', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const resultOutput = splice(input, null, 0, 0, 'foo');
        const expectedOutput = ['foo'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = [];
        const resultOutput = splice(input, null, 0, 0, 'foo', 'bar', 'baz');
        const expectedOutput = ['foo', 'bar', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['bar', 'baz'];
        const resultOutput = splice(input, null, 0, 0, 'foo');
        const expectedOutput = ['foo', 'bar', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar'];
        const resultOutput = splice(input, null, 2, 0, 'baz');
        const expectedOutput = ['foo', 'bar', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: []}}};
        const resultOutput = splice(input, 'foo.bar.baz', 0, 0, 'xxx');
        const expectedOutput = {foo: {bar: {baz: ['xxx']}}};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / splice / removing elements from an array with splice', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo'];
        const resultOutput = splice(input, null, 0, 1);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = splice(input, null, 0, 3);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = splice(input, null, 0, 1);
        const expectedOutput = ['bar', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = splice(input, null, 2, 1);
        const expectedOutput = ['foo', 'bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = [];
        const resultOutput = splice(input, null, 0, 1);

        testCase.equal(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: ['xxx']}}};
        const resultOutput = splice(input, 'foo.bar.baz', 0, 1);
        const expectedOutput = {foo: {bar: {baz: []}}};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / splice / removing elements from and pushing elements to an array with splice', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = ['foo'];
        const resultOutput = splice(input, null, 0, 1, 'bar');
        const expectedOutput = ['bar'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'baz'];
        const resultOutput = splice(input, null, 0, 1, 'bar');
        const expectedOutput = ['bar', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = splice(input, null, 0, 3, 'xxx', 'yyy');
        const expectedOutput = ['xxx', 'yyy'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'xxx'];
        const resultOutput = splice(input, null, 2, 1, 'baz');
        const expectedOutput = ['foo', 'bar', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['xxx'];
        const resultOutput = splice(input, null, 0, 3, 'foo', 'bar', 'baz');
        const expectedOutput = ['foo', 'bar', 'baz'];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: ['xxx']}}};
        const resultOutput = splice(input, 'foo.bar.baz', 0, 1, 'yyy');
        const expectedOutput = {foo: {bar: {baz: ['yyy']}}};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});
