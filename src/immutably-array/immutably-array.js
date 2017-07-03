import {push} from './push';
import {pop} from './pop';
import {unshift} from './unshift';
import {shift} from './shift';
import {splice} from './splice';
import {map} from './map';
import {reduce} from './reduce';
import {move} from './move';

const immutablyArray = {push, pop, unshift, shift, splice, map, reduce, move};

export default immutablyArray;
export {immutablyArray};
