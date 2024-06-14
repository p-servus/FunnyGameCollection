import jsdoc from 'eslint-plugin-jsdoc'

export default [
  {
    plugins: {
      jsdoc,
    },
    rules: {
      "semi": ["error", "never"],
      "no-unused-vars": "error",
      "prefer-const": "error",
      "jsdoc/require-jsdoc": [
        "error",
        {
          "require": {
              "FunctionDeclaration": true,
              "MethodDefinition": true,
              "ClassDeclaration": true,
              "ArrowFunctionExpression": true,
              "FunctionExpression": true
          }
        }
      ],
      'jsdoc/require-description': "error",
    }
  }
]