import immutably from 'immutably';

function push(input, path, ...values) {
    return immutably.apply(input, path, (input) => {
        if (values.length === 0) return input;

        const output = immutably.clone(input);
        output.push(...values);
        return output;
    });
}

export {push};
