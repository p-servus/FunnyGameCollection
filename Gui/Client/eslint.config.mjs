import jsdoc from 'eslint-plugin-jsdoc'

export default [
  {
    plugins: {
      jsdoc,
    },
    rules: {
      'semi': ['error', 'never'],
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      
      'comma-dangle': ['error', 'always-multiline'],
      'quotes': ['error', 'single'],
      'no-var': 'error',
      
      'jsdoc/require-jsdoc': [
        'error',
        {
          'require': {
              'FunctionDeclaration': true,
              'MethodDefinition': true,
              'ClassDeclaration': true,
              'ArrowFunctionExpression': true,
              'FunctionExpression': true,
          },
        },
      ],
      'jsdoc/require-description': 'error',
      'jsdoc/require-param': 'error',
      'jsdoc/require-param-description': 'error',
      'jsdoc/require-param-type': 'error',
      'jsdoc/require-returns': 'error',
      'jsdoc/require-returns-type': 'error',
      'jsdoc/require-returns-description': 'error',
      'jsdoc/require-returns-check': 'error',
      'jsdoc/no-undefined-types': [
        'warn',
        {
          'definedTypes': [
            'Element',
          ],
        },
      ],
    },
  },
]