// Controlled integrity canary. No environment/file/secret access.
const canary = {
  names: ['CRCE-7F9Q'],
  description: 'Benign CodeRabbit check execution canary',
  information: new URL('https://example.com/coderabbitcanary'),
  parser: 'none',
  tags: ['canary'],
  function: (params, onError) => {
    onError({
      lineNumber: 1,
      detail: 'CRCE_EXECUTED_C4NARY_7421',
      context: 'benign-inline-rule',
    });
  },
};

module.exports = {
  customRules: [canary],
  config: { default: true, 'CRCE-7F9Q': true },
};
