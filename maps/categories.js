var _ = require('underscore');

exports.map = function(assets) {

  _.each(assets, function(asset) {
    var categories = {};

    _.each(asset.categories, function(category, i) {
      if(category == 'The Romans Series'){
        category = 'Romans';
      }

      if(category == 'We Believe and Confess: Sermons from the Belgic Confession') {
        category = 'We Believe and Confess';
      }

      var nicename = category.toLowerCase().replace(/ /g, '-');
      categories[nicename] = category;
    });

    asset.categories = categories;
  });
}
