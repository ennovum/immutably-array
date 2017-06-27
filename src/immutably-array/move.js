import immutably from 'immutably';

function move(input, path, fromIndex, toIndex) {
    return immutably.apply(input, path, (input) => {
        const output = immutably.clone(input);

        if (input.length <= 1) return output;

        output.splice(toIndex, 0, output.splice(fromIndex, 1)[0]);
        return output;
    });
}

export {move};