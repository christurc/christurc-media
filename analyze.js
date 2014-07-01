var _ = require('underscore');
var assets = require('./assets');

var tags = _.map(assets, function(asset) {
  return asset.tags;
});

tags = _.flatten(tags);
tags = _.uniq(tags);

console.log(tags);
