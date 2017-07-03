import {push} from './push';
import {pop} from './pop';
import {shift} from './shift';
import {unshift} from './unshift';
import {splice} from './splice';
import {map} from './map';
import {move} from './move';

const immutablyArray = {push, pop, shift, unshift, splice, map, move};

export default immutablyArray;
export {immutablyArray};
