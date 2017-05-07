import immutably from 'immutably';

import immutablyArray from './immutably-array/immutably-array';
immutably.array = immutablyArray;

export default immutablyArray;
export {immutablyArray};

// Webpack can't export default ESM properly
try {
    module.exports = immutablyArray;
} catch (err) {
    err; // noop
}
