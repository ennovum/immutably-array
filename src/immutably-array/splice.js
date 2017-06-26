import immutably from 'immutably';

function splice(input, path, startIndex, deleteCount, ...insertList) {
    return immutably.apply(input, path, (input) => {
        if ((!deleteCount || !input.length) && !insertList.length) return input;
        
        const output = immutably.clone(input);
        output.splice(startIndex, deleteCount, ...insertList);
        
        return output;
    });
}

export {splice};
