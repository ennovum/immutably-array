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

Immutably pushes the given values to the array in the respective part of the input data structure.

```
output = immutably.array.push(input, path, ...values);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure path to the array to push the values to.
* `values` *(function)* a sequence of values that is to be pushed to the input array.

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

Immutably pops a value from the array in the respective part of the input data structure.

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

Immutably inserts the given values to the beginning of the array in the respective part of the input data structure.

```
output = immutably.array.unshift(input, path, ...values);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure path to the array to push the values to.
* `values` *(function)* a sequence of values that is to be pushed to the input array.

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

Immutably removes a value from the beginning of the array in the respective part of the input data structure.

```
output = immutably.array.shift(input, path);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure path to the array to pop a values from.

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

## Changelog

**1.0.0**

* `immutably.array.push` implemented & unit tested
* `immutably.array.pop` implemented & unit tested

## Roadmap

* **splice**
* **map**
* **reduce**
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
