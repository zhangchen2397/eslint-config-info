module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended'
  ],
  plugins: ['react'],
  rules: {
    // 禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children
    'react/no-danger-with-children': 'error',
    // 禁止使用已废弃的 api
    'react/no-deprecated': 'error',
    // 禁止在 componentDidUpdate 里面使用 setState
    'react/no-did-update-set-state': 'error',
    // 禁止直接修改 this.state
    'react/no-direct-mutation-state': 'error'
  }
};
