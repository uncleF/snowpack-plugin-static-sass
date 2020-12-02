const path = require('path');

module.exports = function (snowpackConfig, pluginOptions) {
  return {
    name: 'plugin-sass-static',
    onChange({ filePath }) {
      const fileExt = path.extname(filePath);
      if (['.scss', '.sass'].includes(fileExt)) {
         this.markChanged(pluginOptions.styles);
       }
    },
  };
};
