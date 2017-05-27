import immutably from 'immutably';

function shift(input, path) {
    return immutably.apply(input, path, (input) => {
        const output = immutably.clone(input);
        output.shift();
        return output;
    });
}

export {shift};
