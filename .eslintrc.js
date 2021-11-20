/*
 * @Author: wuchen
 * @Date: 2021-11-16 16:18:38
 * @LastEditors: wuchen
 * @LastEditTime: 2021-11-20 15:30:26
 * @Description: 
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
    "@vue/typescript/recommended",
    // "@vue/prettier",
    // "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    //关闭prettier
    "prettier/prettier": "off"
  },
};
