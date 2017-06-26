import {push} from './push';
import {pop} from './pop';
import {shift} from './shift';
import {unshift} from './unshift';
import {splice} from './splice';

const immutablyArray = {push, pop, shift, unshift, splice};

export default immutablyArray;
export {immutablyArray};
