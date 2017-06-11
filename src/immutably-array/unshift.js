import immutably from 'immutably';

function unshift(input, path, ...values) {
    return immutably.apply(input, path, (input) => {
        if (values.length === 0) return input;

        const output = immutably.clone(input);
        output.unshift(...values);
        return output;
    });
}

export {unshift};
