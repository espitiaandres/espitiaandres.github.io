module.exports.sharedRules = {
  "@typescript-eslint/no-shadow": "off",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "variable",
      format: ["camelCase", "PascalCase", "UPPER_CASE"],
      leadingUnderscore: "allow",
    },
    {
      selector: "function",
      format: ["camelCase", "PascalCase"],
      leadingUnderscore: "allow",
    },
    {
      selector: "typeLike",
      format: ["PascalCase"],
      leadingUnderscore: "allow",
    },
  ],
  "@typescript-eslint/no-unused-expressions": [
    "error",
    {
      allowTaggedTemplates: true,
    },
  ],
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    },
  ],
  "arrow-body-style": "off",
  "consistent-return": "off",
  "import/order": "off",
  "import/prefer-default-export": "off",
  "no-case-declarations": "off",
  "no-console": "off",
  "no-nested-ternary": "off",
  "no-restricted-exports": "off",
  "no-restricted-imports": [
    "error",
    {
      paths: [
        {
          name: "react-aria",
          importNames: ["useId"],
          message: "Please use useId from @federato/athena instead.",
        },
      ],
      patterns: [
        {
          group: ["@federato/*/src/**"],
          message:
            "Do not import from package source files. Use the package entrypoint instead.",
        },
      ],
    },
  ],
  "no-restricted-syntax": [
    "error",
    {
      selector:
        "CallExpression[callee.object.name='console'][callee.property.name!=/^(info|error|warn)$/]",
      message: "Unexpected property on console object was called",
    },
  ],
  "no-underscore-dangle": "off",
  "no-plusplus": "off",
  "no-param-reassign": [
    "error",
    {
      props: true,
      ignorePropertyModificationsFor: [
        "acc", // for reduce accumulators
        "draft", // for Immer draft state
      ],
    },
  ],
  "react/function-component-definition": "off",
  "react/jsx-no-bind": "off",
  "sort/type-properties": "error",
  "sort/string-unions": "error",
  "sort/imports": [
    "error",
    {
      groups: [
        { type: "side-effect", order: 10 },
        { type: "dependency", order: 20 },
        { regex: "^@federato\\/.+", order: 30 },
        { regex: "^\\.+\\/", order: 50 },
        { type: "other", order: 40 },
      ],
      separator: "\n",
      typeOrder: "last",
    },
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
  ],
};

module.exports = {
  parser: "@typescript-eslint/parser",
  sharedEnv: {
    browser: true,
    node: true,
  },
};

// module.exports.sharedEnv = {
//   browser: true,
//   node: true,
// };
