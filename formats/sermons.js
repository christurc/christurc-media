var $ = require('cheerio');
var _ = require('underscore');

// parses a typical four column table for assets
// as found on http://christurc.org/sermons_genesis.html
// date | passage | title | link
exports.parse = function(html, sermonPage) {
  var assets = [];
  var $html = $.load(html);
  var tds = $html('td.regtext');
  var series;

  _.each(tds, function(td){
    var $tr = $(td).parent();
    var tds = $('td', $tr);
    var strong = $('strong, .bold', tds);

    // check if this is a series title
    if(strong.length){
      series = strong.text().replace(',', '').replace(/\s+/, ' ');
      return;
    }

    var text = tds.eq(0).text().replace(/\s{2,}/g, ' ');

    var matches = /^(.+?)( ?— ?| ?– ?)(.+?)( ?— ?| ?– ?)(.*?)$/.exec(text);

    if(!matches) {
      return;
    }

    var asset = {
      date: matches[5],
      passages: [matches[1]],
      title: matches[3],
      uri: $('a.link', tds).attr('href') || $('a', tds).attr('href'),
      speaker: sermonPage.defaultSpeaker,
      tags: sermonPage.tags.slice(0),
      categories: sermonPage.categories.slice(0)
    };

    asset.categories.push(series.trim());

    // asset.passages.push(fixWhiteSpace(tds.eq(1).text()).trim());

    asset.title = asset.title.replace(/“|”/g, '').trim();
    asset.title = asset.title.replace(/\"/g, '');
    assets.push(asset);
  });

  return assets;
};


function fixWhiteSpace(str) {
  return str.replace(/\s+/g, ' ');
}