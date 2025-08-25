module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _navigation: './src/navigation',
          _styles: './src/styles',
          _action: './src/Redux/Actions',
          _slices: './src/Redux/Slices',
          _screens: './src/screens',
          _services: './src/services',
          _utils: './src/utils',
          _hooks: './src/hooks',
          _modals: './src/modals',
        },
      },
    },
  },
};
