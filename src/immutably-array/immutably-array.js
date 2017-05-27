import {push} from './push';
import {pop} from './pop';

import {shift} from './shift';
import {unshift} from './unshift';

const immutablyArray = {push, pop, shift, unshift};

export default immutablyArray;
export {immutablyArray};
