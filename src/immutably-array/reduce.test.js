import test from 'tape';

import {reduce} from './reduce';

test('immutably-array / reduce / reducing an array to the same array with reduce', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const resultOutput = reduce(input, null, (output, value, index) => {
            output[index] = value;
            return output;
        }, []);

        testCase.equal(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const resultOutput = reduce(input, null, (output, value, index) => {
            output[index] = value;
            return output;
        }, []);

        testCase.equal(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / reduce / reducing an array to the seed with reduce', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [];
        const resultOutput = reduce(input, null, (output) => output, []);
        const expectedOutput = [];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.equal(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = [];
        const resultOutput = reduce(input, null, (output) => output, true);
        const expectedOutput = true;

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = [1, 2, 3];
        const resultOutput = reduce(input, null, (output) => output, true);
        const expectedOutput = true;

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: [1, 2, 3]}}};
        const resultOutput = reduce(input, 'foo.bar.baz', (output) => output, true);
        const expectedOutput = {foo: {bar: {baz: true}}};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});

test('immutably-array / reduce / reducing an array with reduce', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = [1, 2, 3];
        const resultOutput = reduce(input, null, (output, value) => {
            output.push(value % 2);
            return output;
        }, []);
        const expectedOutput = [1, 0, 1];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = [1, 2, 3];
        const resultOutput = reduce(input, null, (output, value) => {
            if (value % 2) output.push(value);
            return output;
        }, []);
        const expectedOutput = [1, 3];

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: [1, 2, 3]}}};
        const resultOutput = reduce(input, 'foo.bar.baz', (output, value) => {
            output.push(value % 2);
            return output;
        }, []);
        const expectedOutput = {foo: {bar: {baz: [1, 0, 1]}}};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = [1, 2, 3];
        const resultOutput = reduce(input, null, (output, value) => output + value, 0);
        const expectedOutput = 6;

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: [1, 2, 3]}}};
        const resultOutput = reduce(input, 'foo.bar.baz', (output, value) => output + value, 0);
        const expectedOutput = {foo: {bar: {baz: 6}}};

        testCase.deepEqual(resultOutput, expectedOutput);
        testCase.notEqual(input, resultOutput);
    });

    testCase.end();
});
