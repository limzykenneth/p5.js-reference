var configHelpers = {};

// For production, the reference docs are put in the /reference/ folder
// of the p5 website, so we'll define our paths with this assumption.
// For more context, see https://github.com/processing/p5.js-website.
var config = {
  p5SiteRoot: './reference',
  p5Lib: './reference/lib/p5.min.js',
  p5SoundLib: './reference/lib/addons/p5.sound.min.js',
  p5DomLib: './reference/lib/addons/p5.dom.min.js'
};

Object.keys(config).forEach(function(key) {
  configHelpers[key] = function() {
    return config[key];
  };
});

module.exports = configHelpers;
