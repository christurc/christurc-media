var _ = require('underscore');

exports.map = function(assets) {

  _.each(assets, function(asset) {
    var tags = {};
    asset.tags.push(asset.speaker.replace(/\./g, ''));

    _.each(asset.tags, function(tag, i) {
      if(tag.indexOf('Advent') >= 0) {
        tag = 'Advent';
      }

      if(tag.indexOf('Thanksgiving') >= 0) {
        tag = 'Thanksgiving';
      }

      if(tag.indexOf('Christmas') >= 0) {
        tag = 'Christmas';
      }

      if(tag.indexOf('Easter') >= 0) {
        tag = 'Easter';
      }

      var nicename = tag.toLowerCase().replace(/ /g, '-');
      tags[nicename] = tag;
    });

    asset.tags = tags;
  });
}
