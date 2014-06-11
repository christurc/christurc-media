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
      title: fixWhiteSpace(tds.eq(2).text()),
      uri: $('a.link', tds).attr('href') || $('a', tds).attr('href'),
      speaker: sermonPage.defaultSpeaker,
      tags: sermonPage.tags.slice(0)
    };

    asset.passages.push(fixWhiteSpace(tds.eq(1).text()).trim());

    // handles the case where title has speaker in it
    // "Mr. William Godfrey – “Blessed Assurance” – John 10:22-30"
    var matches = /^(.+)( ?\-|—|– ?)(.*)$/.exec(asset.title);
    if(matches) {
      asset.speaker = matches[1].trim();
      // trim slanted double quotes
      asset.title = matches[3].replace(/“|”/g, '').trim();
    }

    if(asset.date === '01/11/2009') {
      asset.title = 'On Being Pro-Life';
    }

    asset.title = asset.title.replace(/\"/g, '');
    assets.push(asset);
  });

  return assets;
};


function fixWhiteSpace(str) {
  return str.replace(/\s+/g, ' ');
}