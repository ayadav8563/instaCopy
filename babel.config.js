module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
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
    ],
  ],
};
