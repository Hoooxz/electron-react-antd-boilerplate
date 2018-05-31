//
// add for Ant Design
// Reference: https://ant.design/docs/react/use-with-create-react-app-cn
//

const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  return config;
};