/*
 * @Author: wuchen
 * @Date: 2021-11-16 16:18:38
 * @LastEditors: wuchen
 * @LastEditTime: 2021-11-22 16:07:26
 * @Description: eslint规则:https://eslint.bootcss.com/docs/rules/
 * 1,配置规则
 * off:关闭规则
 * warn:开启规则,使用警告级别的错误,不会导致程序退出
 * error:开启规则,使用错误级别的错误,当被触发的时候，程序会退出
 * @Email: rangowu@163.com
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['error',
      {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'comma'
        }
      }],
      // 可以使用any
    '@typescript-eslint/no-explicit-any': 'off',
    // 可以使用var
    '@typescript-eslint/no-var-requires': 'off',
    // 生产环境禁用 console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 生产环境禁用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': ['error', 'never'],
    // 强制数组方括号中使用一致的空格
    'vue/array-bracket-spacing': 'error',
    // 强制箭头函数的箭头前后使用一致的空格
    'vue/arrow-spacing': 'error',
    // 强制在单行代码块中使用一致的空格
    'vue/block-spacing': 'error',
    // 强制在代码块中使用一致的大括号风格
    'vue/brace-style': 'error',
    // 强制使用骆驼拼写法命名约定
    'vue/camelcase': 'error',
    // 要求或禁止末尾逗号
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // 要求使用 === 和 !==
    'vue/eqeqeq': 'error',
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    // 强制在大括号中使用一致的空格
    'vue/object-curly-spacing': 'error'
  },
  // 为特定类型的文件指定处理器
  overrides: [
    {
      // 指定文件
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      // 指定环境
      env: {
        // Jest 全局变量
        jest: true
      }
    }
  ]
};
