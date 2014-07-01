var _ = require('underscore');

exports.map = function(assets) {

  _.each(assets, function(asset) {
    asset.date = asset.date.trim();
    asset.dateValue = (new Date(asset.date)).valueOf();
  });
}
