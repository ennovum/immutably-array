import immutably from 'immutably';

function move(input, path, fromIndex, toIndex) {
    return immutably.apply(input, path, (input) => {
        if (input.length <= 1 || fromIndex === toIndex) return input;

        const output = immutably.clone(input);

        output.splice(toIndex, 0, output.splice(fromIndex, 1)[0]);
        
        if (output.length === input.length) {
            return immutably.merge(input, null, output);
        }
        return output;
    });
}

export {move};
