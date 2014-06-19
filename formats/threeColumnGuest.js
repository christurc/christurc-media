var $ = require('cheerio');
var _ = require('underscore');

// parses a typical four column table for assets
// as found on http://christurc.org/sermons_genesis.html
// date | passage | title | link
exports.parse = function(html, sermonPage) {
  var assets = [];
  var $html = $.load(html);
  var trs = $html('table tr');

  _.each(trs, function(tr){
    var $tr = $(tr);
    var $ths = $('th', $tr);

    if($ths.length) {
      return;
    }

    var tds = $('td', $tr);
    var asset = {
      date: tds.eq(0).text(),
      passages: [],
      title: fixWhiteSpace(tds.eq(1).text()),
      uri: tds.eq(2).find('a').attr('href'),
      speaker: sermonPage.defaultSpeaker,
      tags: sermonPage.tags.slice(0),
      categories: sermonPage.categories
    };

    // <speaker> - <passage>
    var matches = /^(.+?)( ?— ?| ?– ?)(.+)$/.exec(asset.title);
    if(matches) {
      // trim slanted double quotes
      asset.speaker = matches[1];
      asset.title = matches[3].replace(/“|”/g, '').trim();
    }

    // trim double quotes
    asset.title = asset.title.replace(/\"/g, '');

    if(asset.title.indexOf('(AM)'))
      asset.tags.push('Morning');

    if(asset.title.indexOf('(PM)'))
      asset.tags.push('Evening');

    assets.push(asset);
  });

  return assets;
};


function fixWhiteSpace(str) {
  return str.replace(/\s+/g, ' ');
}