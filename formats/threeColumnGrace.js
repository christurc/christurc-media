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
      // nothing in the headers
      return;
    }

    var tds = $('td', $tr);
    var asset = {
      date: tds.eq(0).text(),
      passages: [],
      title: fixWhiteSpace(tds.eq(1).text()),
      uri: $('a.link', tds).attr('href') || $('a', tds).attr('href'),
      speaker: sermonPage.defaultSpeaker,
      tags: sermonPage.tags
    };

    // <speaker> - <title> - <passage>
    var matches = /^(.+?)( ?— ?| ?– ?)(.+?)( ?— ?| ?– ?)(.*?)$/.exec(asset.title);
    if(matches) {
        asset.passages.push(matches[5].trim());
        // trim slanted double quotes
        asset.title = matches[3].replace(/“|”/g, '').trim();
        asset.speaker = matches[1].trim();
    }
    else {
      // <title> - <passage>
      var matches = /^(.+?)( ?— ?| ?– ?)(.+)$/.exec(asset.title);
      if(matches) {
        asset.passages.push(matches[3].trim());
        // trim slanted double quotes
        asset.title = matches[1].replace(/“|”/g, '').trim();
      }
    }

    // trim double quotes
    asset.title = asset.title.replace(/\"/g, '');
    assets.push(asset);
  });

  return assets;
};


function fixWhiteSpace(str) {
  return str.replace(/\s+/g, ' ');
}