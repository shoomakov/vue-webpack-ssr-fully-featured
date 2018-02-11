// http://eslint.org/docs/user-guide/configuring

module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "plugin:vue/base"
  ],
  "plugins": [
    "html",
    "vue",
    "flowtype",
    "flowtype-errors",
    "flow-vars"
  ],
  "rules": {
    "import/no-unresolved": 0,
    "no-unused-vars": 0,
    "import/no-unassigned-import": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": "off",
    "object-curly-spacing": [2, "always"],
    "prefer-promise-reject-errors": 2,

    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,

    // raise flow errors
    "flowtype-errors/show-errors": 2,
    "flow-vars/define-flow-type": 1,
    "flow-vars/use-flow-type": 1,
    "flowtype/boolean-style": [
      2,
      "boolean"
    ],
    "flowtype/define-flow-type": 1,
    "flowtype/delimiter-dangle": [
      2,
      "never"
    ],
    "flowtype/generic-spacing": [
      2,
      "never"
    ],
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/no-types-missing-file-annotation": 2,
    "flowtype/no-weak-types": 2,
    "flowtype/object-type-delimiter": [
      2,
      "comma"
    ],
    "flowtype/require-parameter-type": 2,
    "flowtype/require-return-type": [
      2,
      "always",
      {
        "annotateUndefined": "never"
      }
    ],
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/semi": [
      2,
      "always"
    ],
    "flowtype/space-after-type-colon": [
      2,
      "always"
    ],
    "flowtype/space-before-generic-bracket": [
      2,
      "never"
    ],
    "flowtype/space-before-type-colon": [
      2,
      "never"
    ],
    "flowtype/type-id-match": [
      2,
      "^([A-Z][a-z0-9]+)+Type$"
    ],
    "flowtype/union-intersection-spacing": [
      2,
      "always"
    ],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 1
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  }
}
