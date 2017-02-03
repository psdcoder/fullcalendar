var join = require('path').join;
var MODULE_FOLDER = /^(.*node_modules[\\\/].*(?=[\\\/]))(.*)$/;

exports.resolveModuleFile = function (module, path) {
	return join(require.resolve(module).replace(MODULE_FOLDER, "$1"), path);
};
