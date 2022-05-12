const path = require("path");

function modalModule(_moduleOptions) {
    const {nuxt} = this;

    const defaultOptions = {
        pluginName: "modal",
        layout: "default",
        mobileLayout: "defaultMobile",
        mobileSize: 400,
        responsive: false,
    };

    const options = {
        ...defaultOptions,
        ...nuxt.options.modal,
        ..._moduleOptions,
    };

    this.options.css.push('modal/dist/assets/css/app.css')

    nuxt.options.components.dirs.push({
        path: `~/modals`,
        prefix: "modals",
    });

    this.addPlugin({
        src: path.resolve(__dirname, "plugin.js"),
        fileName: "modal.js",
        options,
    });
}

module.exports = modalModule;
module.exports.meta = require("../package.json");
