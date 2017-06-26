import immutably from 'immutably';

function map(input, path, mapper) {
    return immutably.apply(input, path, (input) => {
        const output = input.map(mapper);

        if (output.length === input.length) {
            return immutably.merge(input, null, output);
        }
        return output;
    });
}

export {map};
