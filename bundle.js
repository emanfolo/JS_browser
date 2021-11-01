(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      add = (a, b) => {
        let sum = a + b;
        return sum;
      };
      module.exports = add;
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      multiply = (a, b) => {
        let sum = a * b;
        return sum;
      };
      module.exports = multiply;
    }
  });

  // index.js
  var add2 = require_add();
  var multiply2 = require_multiply();
  var result = multiply2(add2(6, 7), 4);
  console.log(result);
})();
