import {push} from './push';
import {pop} from './pop';
import {shift} from './shift';
import {unshift} from './unshift';
import {splice} from './splice';
import {map} from './map';

const immutablyArray = {push, pop, shift, unshift, splice, map};

export default immutablyArray;
export {immutablyArray};
