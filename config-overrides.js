const { override, useBabelRc, addLessLoader } = require("customize-cra");
const modifyVars = require("./antd-customizations");

module.exports = {
  webpack: override(
    useBabelRc(),

    addLessLoader({
      javascriptEnabled: true,
      modifyVars
    })
  )
};
