# base64的库

### polyfill

如果浏览器不支持 ``windo.btoa`` 和 ``window.atob`` ，则应用[polyfil](https://github.com/davidchambers/Base64.js)

最终输出 base64 对象

### 使用

#### npm

```bash
npm install at-base64 --save
```

#### bower

```bower
bower install at-base64 --save
```
```javascript
var base64 = require('base64');
// or
import base64 from 'base64';
```

如果应用引入 AngulaJs ，则自动注入 base64 服务，需要引入模块

```javascript
angular.module('test',['base64'])
```

否则挂载在全局作用域下

### 方法

#### encode

加密，如果加密失败，返回nul

#### decode

解密，如果解密失败，返回nul

### 测试

```bash
npm test
```
