---
id: 记一次promise执行顺序问题
title: 记一次promise执行顺序问题
author: 李川
author_title: 随便写写
author_url: https://github.com/newlichuan
author_image_url: /img/logo.jpg
---

#### 记一次 promise 执行顺序问题....

<!--truncate-->

普通的执行顺序就不提了,这里记一个比较特殊的问题,那就是 then 回调中返回新的 Promise 时,思考如下代码

```js
Promise.resolve()
  .then(function () {
    return Promise.resolve(4);
  })
  .then(function (v) {
    console.log(v);
  });

Promise.resolve()
  .then(function (r) {
    console.log(1);
  })
  .then(function () {
    console.log(2);
  })
  .then(function (r) {
    console.log(3);
  });
```

首先官方定义 如果 then 回调返回一个新的 Promise 则该 Promise 的状态会由这个新的 promise 决定  
那么如果按照这个定义,结果应该是 1 4 2 3 ,然而结果却是 1 2 3 4  
这个问题的主要原因是 **当检测到返回值是新的 Promise 时引擎是怎么把这俩的状态相关联的呢??**

#### 非同步关联

我们的直觉是直接进行替换 也就是把新的 promise 的状态直接替换到旧的 ,然而实际上并不是 ,引擎会把旧的置值器关联的新的 promise 上,也就是说给这个新的 Promise 执行.then 操作,以此完成状态的同步,而这个绑定的过程,也是安排为一个微任务
所以表现就是晚了两个任务执行,而且绝对是两个任务,例如再增加几个

```js
Promise.resolve()
  .then(function () {
    return Promise.resolve(4);
  })
  .then(function (v) {
    console.log(v);
  });

Promise.resolve()
  .then(function (r) {
    console.log(1);
  })
  .then(function () {
    console.log(2);
  })
  .then(function (r) {
    console.log(3);
  })
  .then(function (r) {
    console.log(5);
  })
  .then(function (r) {
    console.log(6);
  });
```

此时代码的执行顺序 就是 1,2,3,4,5,6 而不是 1,2,3,5,6,4

### 如果不返回新的 promise

```js
Promise.resolve()
  .then(function () {
    return 4;
  })
  .then(function (v) {
    console.log(v);
  });

Promise.resolve()
  .then(function (r) {
    console.log(1);
  })
  .then(function () {
    console.log(2);
  })
  .then(function (r) {
    console.log(3);
  });
```

此时结果为 1 4 2 3 符合我们的预期 所以关键点就是这个返回新的 Promise 产生了一个新的微任务

### 总结

很少遇到的情况 而且 then 的写法也不甚清晰 建议使用 async 仅仅记录下这种情况
