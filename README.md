# immutably-array

Non-mutating operations on arrays ([immutably](https://www.npmjs.com/package/immutably) extension).

## Install

`immutably-array` is an extension of [immutably](https://www.npmjs.com/package/immutably) (peer dependency).
`immutably-array` is available to download through [NPM](https://www.npmjs.com/package/immutably-array).
```
$ npm install immutably immutably-array
```

## Import

When being imported `immutably-array` embeds itself inside `immutably` in the `array` namespace.
```
import immutably from 'immutably';
import 'immutably-array';
immutably.array; // embedded immutably-array
```

## Use

### `push`

Pushes the given values to the array in the respective part of the input data structure.

```
output = immutably.array.push(input, path, ...values);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure path to the array to push the values to.
* `values` *(array[any])* a sequence of values that is to be pushed to the input array.

**Returns**

* `output` *(any)* output data structure with the given new values pushed to the array on the given path.

**Examples**

Basic use:
```
const input = {foo: {bar: {baz: []}}};
const output = immutably.array.push(input, 'foo.bar.baz', 'a', 'b', 'c');
output; // {foo: {bar: {baz: ['a', 'b', 'c']}}}
```

You can find more examples in the test files.

### `pop`

Pops a value from the array in the respective part of the input data structure.

```
output = immutably.array.pop(input, path);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure path to the array to pop a values from.

**Returns**

* `output` *(any)* output data structure without a value popped from the array on the given path.

**Examples**

Basic use:
```
const input = {foo: {bar: {baz: ['a', 'b', 'c']}}};
const output = immutably.array.pop(input, 'foo.bar.baz');
output; // {foo: {bar: {baz: ['a', 'b']}}}
```

You can find more examples in the test files.

### `unshift`

Inserts the given values to the beginning of the array in the respective part of the input data structure.

```
output = immutably.array.unshift(input, path, ...values);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure path to the array to push the values to.
* `values` *(array[any])* a sequence of values that is to be pushed to the input array.

**Returns**

* `output` *(any)* output data structure with the given new values unshifted to the array on the given path.

**Examples**

Basic use:
```
const input = {foo: {bar: {baz: ['a']}}};
const output = immutably.array.unshift(input, 'foo.bar.baz', 'b', 'c');
output; // {foo: {bar: {baz: ['b', 'c', 'a']}}}
```

You can find more examples in the test files.

### `shift`

Removes a value from the beginning of the array in the respective part of the input data structure.

```
output = immutably.array.shift(input, path);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure path to the array to remove a value from.

**Returns**

* `output` *(any)* output data structure without a value shifted from the array on the given path.

**Examples**

Basic use:
```
const input = {foo: {bar: {baz: ['a', 'b', 'c']}}};
const output = immutably.array.shift(input, 'foo.bar.baz');
output; // {foo: {bar: {baz: ['b', 'c']}}}
```

You can find more examples in the test files.

### `splice`

Removes a given number of values from a given index of the array and replaces them with a given list of values in the respective part of the input data structure.

```
output = immutably.array.splice(input, path, index, deleteCount[, ...insertList]);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure path to the array to splice.
* `index` *(number)* index in the array of where to start removing and adding values.
* `deleteCount` *(number)* number of how many values to remove from the array from the given index.
* `insertList` *(array[any])* _(optional)_ list of values to insert to the array at the given index

**Returns**

* `output` *(any)* output data structure with values removed from and added to the array on the given path.

**Examples**

Basic use:
```
const input = {foo: {bar: {baz: ['a', 'b', 'c']}}};
const output = immutably.array.splice(input, 'foo.bar.baz', 0, 1, 'x', 'y');
output; // {foo: {bar: {baz: ['x', 'y', 'b', 'c']}}}
```

You can find more examples in the test files.

### `map`

Maps an array to another array with a function in the respective part of the input data structure.

```
output = immutably.array.map(input, path, mapper);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure path to the array to map.
* `mapper` *(function)* function that maps value from an array to a new value for the new array

**Returns**

* `output` *(any)* output data structure with an array mapped to another array on the given path.

**Examples**

Basic use:
```
const input = {foo: {bar: {baz: ['a', 'b', 'c']}}};
const output = immutably.array.map(input, 'foo.bar.baz', (value) => value + 'x');
output; // {foo: {bar: {baz: ['ax', 'bx', 'cx']}}}
```

You can find more examples in the test files.

### `reduce`

Reduces an array to a value with a function in the respective part of the input data structure.

```
output = immutably.array.reduce(input, path, reducer, seed);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure path to the array to reduce.
* `reducer` *(function)* function that value by value reduces array to a value
* `seed` *(any)* seed value for the array reduction

**Returns**

* `output` *(any)* output data structure with an array reduced a value on the given path.

**Examples**

Basic use:
```
const input = {foo: {bar: {baz: ['a', 'b', 'c']}}};
const output = immutably.array.reduce(input, 'foo.bar.baz', (output, value) => output + value, '');
output; // {foo: {bar: {baz: 'abc'}}}
```

You can find more examples in the test files.

### `move`

Move a value from one index in an array to another in the respective part of the input data structure.

```
output = immutably.array.move(input, path, from, to);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure path to the array to move values in.
* `from` *(number|function)* index / function to find index in the array of an value that should be moved
* `to` *(number|function)* index / function to find index in the array of where a value should be moved

**Returns**

* `output` *(any)* output data structure with a value moved in an array on the given path.

**`from` call arguments**

* `value` *(any)* value from the input array
* `index` *(number)* index of the value from the input array
* `array` *(array)* input array

**`from` call returns**

* `isFrom` *(boolean)* flag deciding whether the `value`/`index` from arguments are the right ones

**`to` call arguments**

* `value` *(any)* value from the input array
* `index` *(number)* index of the value from the input array
* `array` *(array)* input array
* `fromValue` *(any)* moving value from the input array
* `fromIndex` *(number)* index of the moving value from the input array

**`to` call returns**

* `isTo` *(boolean)* flag deciding whether the `value`/`index` from arguments are the right ones

**Details**

* Implementation of `move` relies heavily on native `Array.prototype.splice` which may be considered odd when working with indexes from outside the array. Please see the tests for examples.
* `from` and `to` functions are used with `Array.prototype.findIndex`. If there is no support for it in your browser, you should take care of a polyfill.

**Examples**

Basic use:
```
const input = {foo: {bar: {baz: ['a', 'b', 'c']}}};
const output = immutably.array.move(input, 'foo.bar.baz', 0, 1);
output; // {foo: {bar: {baz: ['b', 'a', 'c']}}}
```
```
const input = {foo: {bar: {baz: ['a', 'b', 'c']}}};
const output = immutably.array.move(input, 'foo.bar.baz', (value) => value === 'a', (value) => value === 'c');
output; // {foo: {bar: {baz: ['c', 'b', 'a']}}}
```

You can find more examples in the test files.

## Changelog

**1.2.0**

* `immutably.array.map` implemented & unit tested
* `immutably.array.splice` implemented & unit tested

**1.1.0**

* `immutably.array.shift` implemented & unit tested
* `immutably.array.unshift` implemented & unit tested

**1.0.0**

* `immutably.array.push` implemented & unit tested
* `immutably.array.pop` implemented & unit tested

## Roadmap

* **replace**
* **filter**
* **reverse**
* **sort**
* **fill**

## Develop

If you want to fork and develop `immutably-array`, these commands are for you:
```
$ npm run dev
$ npm run test-dev
```

## Test

`immutably-array` is equipped with a test suite. You can run it with:
```
$ npm run test
```

## Licence

MIT
