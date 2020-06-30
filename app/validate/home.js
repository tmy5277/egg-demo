module.exports = app => {
  let { validator } = app;
  // 校验id是否正确
  validator.addRule('homeDetailParams', (rule, value) => {
    console.log('homeDetailParams validate: ', rule, value);
    if (!/^[0-9]+$/.test(value)) {
      return 'should be num';
    }
  });
};