import immutably from 'immutably';

function reduce(input, path, reducer, seed) {
    return immutably.apply(input, path, (input) => {
        const output = input.reduce(reducer, seed);

        if (Array.isArray(output) && output.length === input.length) {
            return immutably.merge(input, null, output);
        }
        return output;
    });
}

export {reduce};
