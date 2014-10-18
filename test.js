var assets = require('./assets');
var _ = require('underscore');

var passages = _.map(assets, function(asset) {
  return asset.passages;
});

passages = _.flatten(passages);

passages = _.map(passages, function(passage) {
  var matches = /^(\d* \w*).*$/.exec(passage);

  if(matches)
    return matches[1];

  matches = /^(\w*) .*$/.exec(passage);

  if(matches)
    return matches[1];
});


passages = _.uniq(passages);
passages.sort();

console.log(passages);