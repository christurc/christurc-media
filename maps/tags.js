var _ = require('underscore');

exports.map = function(assets) {

  _.each(assets, function(asset) {
    var tags = {};

    _.each(asset.tags, function(tag, i) {
      if(tag.indexOf('Advent') >= 0) {
        asset.tags[i] = 'Advent';
      }

      var nicename = tag.toLowerCase().replace(/ /g, '-');
      tags[nicename] = tag;
    });

    asset.tags = tags;
  });
}
