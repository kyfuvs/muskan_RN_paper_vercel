module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-paper/babel', // keep this
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src', // now you can use "@/..."
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
