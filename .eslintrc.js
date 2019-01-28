module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'arrow-parens': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/imports-first': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.android.js', '.ios.js', ''],
      },
    },
    'import/extensions': ['.js', '.jsx'],
    'no-extra-parens': ['error', 'functions'],
  },
};
