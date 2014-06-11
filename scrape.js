var request = require('request');
var _ = require('underscore');
var assets = [];
var root = 'http://www.christurc.org/';
var completed = 0;
var fs = require('fs');
var outputFile = 'assets.json';
var sermonsPages = require('./sermonPages');

_.each(sermonsPages, function(item) {
  console.log('Requesting Item: ' + item.page);

  request(root + item.page, function(err, response, body) {
    if(err || response.statusCode !== 200) {
      console.log(err);
      return;
    }

    console.log('Parsing Page: ' + item.page);
    assets.push.apply(assets, item.parse(body, item));
    completed++;

    if(completed !== sermonsPages.length) {
      return;
    }

    fs.writeFile(outputFile, JSON.stringify(assets, null, '  '));

    _.each(assets, function(asset){
      // console.log(asset.passages);
      console.log(asset.title);
      // console.log(asset.speaker);

    });

    console.log('Assets found: %s', assets.length);
  });
});
