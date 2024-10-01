module.exports = {
    extends: ['next', 'next/core-web-vitals', 'plugin:storybook/recommended'],
    parserOptions: {
        babelOptions: {
            presets: [require.resolve('next/babel')],
        },
    },
}
