import immutably from 'immutably';

function move(input, path, from, to) {
    return immutably.apply(input, path, (input) => {
        let fromIndex = from;
        if (typeof from === 'function') {
            fromIndex = input.findIndex((...args) => from(...args));
        }

        let toIndex = to;
        if (typeof to === 'function') {
            const fromValue = input[fromIndex];
            toIndex = input.findIndex((...args) => to(...args, fromValue, fromIndex));
        }

        if (input.length <= 1 || fromIndex === toIndex) return input;

        const output = immutably.clone(input);
        output.splice(toIndex, 0, ...output.splice(fromIndex, 1));

        if (output.length === input.length) return immutably.merge(input, null, output);
        return output;
    });
}

export {move};
