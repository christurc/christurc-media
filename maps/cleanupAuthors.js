var _ = require('underscore');

exports.map = function(assets) {
  _.each(assets, function(asset) {
    asset.speaker = asset.speaker.replace(/\./g, '');
    asset.tags.push(asset.speaker);
  });
}
