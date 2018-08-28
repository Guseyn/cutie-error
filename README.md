# cutie-error

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for <b>error</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-error/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/error');
```
For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>error</b> module.

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `CapturedStackTrace` | `Error.captureStackTrace` | `targetObject, constructorOpt` | `targetObject` |
| `Errno` | `error.errno` | `error` | `string\|number` |
| `ErrorAddress` | `error.address` | `error` | `string` |
| `ErrorCode` | `error.code` | `error` | `string` |
| `ErrorMessage` | `error.message` | `error` | `string` |
| `ErrorPath` | `error.path` | `error` | `string` |
| `ErrorPort` | `error.port` | `error` | `number` |
| `ErrorStack` | `error.stack` | `error` | `string` |
| `ErrorSyscall` | `error.syscall` | `error` | `string` |
| `SetStackTraceLimit` | `Error.stackTraceLimit` | `num` | `num` |
| `StackTraceLimit` | `Error.stackTraceLimit` | | `num` |

[npm-image]: https://img.shields.io/npm/v/@cuties/error.svg
[npm-url]: https://npmjs.org/package/@cuties/error
