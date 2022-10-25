const path = require("path");

function modalModule(_moduleOptions) {
    const { nuxt } = this;

    const defaultOptions = {
        pluginName: "modal",
        layout: "default",
        mobileLayout: "defaultMobile",
        mobileSize: 400,
        responsive: false
    };

    const options = {
        ...defaultOptions,
        ...nuxt.options.modal,
        ..._moduleOptions
    };

    const registerComp = {
        path: `~/modals`,
        prefix: "modals"
    };

    if (typeof nuxt.options.components === "array") {
		nuxt.options.components = {
			dirs: [registerComp]
		}
	} else if (nuxt.options.components.dirs) {
		nuxt.options.components.dirs.push(registerComp)
	} else {
		nuxt.options.components = {
			dirs: ["~/components", registerComp]
		}
	}

    this.addPlugin({
        src: path.resolve(__dirname, "plugin.js"),
        fileName: "modal.js",
        options
    });
}

module.exports = modalModule;
module.exports.meta = require("../package.json");
