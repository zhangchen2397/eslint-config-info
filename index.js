module.exports = {
  extends: 'eslint:recommended',
  root: true,

  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },

  rules: {
    /**
     * 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关
     */

    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'for-direction': 'error',
    // 强制 getter 函数中出现 return 语句
    'getter-return': 'error',
    // 禁止使用 console
    'no-console': 'off',
    // 禁止不必要的括号
    'no-extra-parens': ['error', 'functions'],
    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': 'error',


    /**
     * 这些规则是关于最佳实践的，帮助你避免一些问题
     */

    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': 'error',
    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 'error',
    // 指定程序中允许的最大环路复杂度
    'complexity': ['error', { max: 10 }],
    // 强制所有控制语句使用一致的括号风格
    'curly': [
      'error',
      'multi-line',
      'consistent'
    ],
    // 强制在点号之前和之后一致的换行
    'dot-location': [
      'error',
      'property'
    ],
    // 要求使用 === 和 !==, null 除外
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': 'error',
    // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
    'no-case-declarations': 'error',
    // 禁止使用 eval
    'no-eval': 'error',
    // 禁止修改原生对象
    'no-extend-native': 'error',
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 'error',
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',
    // 禁止使用 __iterator__
    'no-iterator': 'error',
    // 禁用标签语句
    'no-labels': 'error',
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'error',
    // 禁止在循环中出现 function 声明和表达式
    'no-loop-func': 'error',
    // 禁止使用多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          BinaryExpression: false,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    // 禁止直接 new 一个类而不赋值
    'no-new': 'error',
    // 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
    'no-new-func': 'error',
    // 禁止对函数的参数重新赋值
    'no-param-reassign': 'error',
    // 禁止使用 __proto__
    'no-proto': 'error',
    // 禁止在 return 语句里赋值
    'no-return-assign': [
      'error',
      'always'
    ],
    // 禁止在 return 语句里使用 await
    'no-return-await': 'error',
    // 禁止将自己与自己比较
    'no-self-compare': 'error',
    // 禁止使用逗号操作符
    'no-sequences': 'error',
    // 禁止 throw 字面量，必须 throw 一个 Error 对象
    'no-throw-literal': 'error',
    // 循环内必须对循环条件的变量有修改
    'no-unmodified-loop-condition': 'error',
    // 禁止出现没必要的字符串连接
    'no-useless-concat': 'error',
    // 禁用不必要的转义字符
    'no-useless-escape': 'off',
    // 禁止使用 with
    'no-with': 'error',
    // parseInt 必须传入第二个参数
    'radix': 'error',
    // 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: true
      }
    ],


    /**
     * 这些规则与变量声明有关
     */

    // 禁止删除变量
    'no-delete-var': 'error',
    // 禁止 label 名称与定义过的变量重复
    'no-label-var': 'error',
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 'error',
    // 禁止使用未定义的变量
    'no-undef': [
      'error',
      {
        typeof: false
      }
    ],
    // 禁止对 undefined 重新赋值
    'no-undefined': 'error',
    // 定义过的变量必须使用
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true
      }
    ],
    // 变量必须先定义后使用
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],


    /**
     * 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的
     */

    // callback 中的 error 必须被处理
    'handle-callback-err': 'error',
    // 禁止直接 new require('foo')
    'no-new-require': 'error',
    // 禁止对 __dirname 或 __filename 使用字符串连接
    'no-path-concat': 'error',


    /**
     * 这些规则是关于风格指南的，而且是非常主观的
     */

    // 数组的括号内的前后禁止有空格
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    // 逗号前禁止有空格，逗号后必须要有空格
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    // 用作对象的计算属性时，中括号内的首尾禁止有空格
    'computed-property-spacing': [
      'error',
      'never'
    ],
    // 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': [
      'error',
      'never'
    ],
    // 强制使用一致的缩进
    'indent': ['error', 2],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      }
    ],
    // 关键字前后必须有空格
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 代码块嵌套的深度禁止超过 5 层
    'max-depth': [
      'error',
      5
    ],
    // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
    'max-nested-callbacks': [
      'error',
      3
    ],
    // 函数的参数禁止超过 7 个
    'max-params': [
      'error',
      7
    ],
    // new 后面的类名必须首字母大写
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ],
    // 要求调用无参构造函数时有圆括号
    'new-parens': 'error',
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁止混用空格和缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 禁止出现超过三行的连续空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 5,
        maxEOF: 1,
        maxBOF: 1
      }
    ],
    // 禁止属性前有空格，比如 foo. bar()
    'no-whitespace-before-property': 'error',
    // 禁止 if 后面不加大括号而写两行代码
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {
          while: 'below'
        }
      }
    ],
    // 大括号内的首尾必须有换行
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    // 对象字面量只有一行时，大括号内的首尾必须有空格
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: false
      }
    ],
    // 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // 分号必须写在行尾，禁止在行首出现
    'semi-style': [
      'error',
      'last'
    ],
    // if, function 等的大括号之前必须要有空格，比如 if (a) {
    'space-before-blocks': [
      'error',
      'always'
    ],
    // 操作符左右必须有空格，比如 let sum = 1 + 2;
    'space-infix-ops': 'error',
    // new, typeof 等后面必须有空格
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    // 注释的斜线或 * 后必须有空格
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          exceptions: [
            '*'
          ],
          balanced: true
        }
      }
    ],
    // case 的冒号前禁止有空格，冒号后必须有空格
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    // 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
    'template-tag-spacing': [
      'error',
      'never'
    ],


    /**
     * 这些规则只与 ES6 有关, 即通常所说的 ES2015
     */

    // 箭头函数的箭头前后必须有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // constructor 中必须有 super
    'constructor-super': 'error',
    // 禁止对定义过的 class 重新赋值
    'no-class-assign': 'error',
    // 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],
    // 禁止对使用 const 定义的常量重新赋值
    'no-const-assign': 'error',
    // 禁止重复定义类
    'no-dupe-class-members': 'error',
    // 禁止重复 import 模块
    'no-duplicate-imports': 'error',
    // 禁止在 super 被调用之前使用 this 或 super
    'no-this-before-super': 'error',
    // 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
    'no-useless-rename': 'error',
    // 禁止使用 var
    'no-var': 'error',
    // generator 函数内必须有 yield
    'require-yield': 'error',
    // ... 的后面禁止有空格
    'rest-spread-spacing': [
      'error',
      'never'
    ],
    // 创建 Symbol 时必须传入参数
    'symbol-description': 'error',
    // ${name} 内的首尾禁止有空格
    'template-curly-spacing': [
      'error',
      'never'
    ],
    // yield* 后面必须要有空格
    'yield-star-spacing': [
      'error',
      'after'
    ]
  }
};
