var request = require('request');
var _ = require('underscore');
var assets = [];
var root = 'http://www.christurc.org/';
var completed = 0;
var fs = require('fs');
var outputFile = 'assets.json';
var sermonsPages = require('./sermonPages');
var cleanupAuthors = require('./maps/cleanupAuthors').map;
var tags = require('./maps/tags').map;
var categories = require('./maps/categories').map;
var passages = require('./maps/passages').map;
var dates = require('./maps/dates').map;
var guestSermons = require("./sermons_guest");
var internSermons = require("./sermons_interns");
var catechisms = require("./catechism_horton");

function transform(assets) {
    dates(assets);
    cleanupAuthors(assets);
    passages(assets);
    tags(assets);
    categories(assets);
}

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

    assets = assets.concat(guestSermons);
    assets = assets.concat(internSermons);
    assets = assets.concat(catechisms);
    transform(assets);

    fs.writeFile(outputFile, JSON.stringify(assets, null, '  '));

    console.log('Assets found: %s', assets.length);
  });
});

