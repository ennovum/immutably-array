import immutably from 'immutably';

function pop(input, path) {
    return immutably.apply(input, path, (input) => {
        const output = immutably.clone(input);
        output.pop();
        return output;
    });
}

export {pop};
