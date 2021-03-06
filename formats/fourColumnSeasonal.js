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

    if(!tds.length) {
      return;
    }

    var asset = {
      date: tds.eq(0).text(),
      passages: [],
      title: fixWhiteSpace(tds.eq(2).text()),
      uri: $('a.link', tds).attr('href') || $('a', tds).attr('href'),
      speaker: sermonPage.defaultSpeaker,
      tags: sermonPage.tags.slice(0),
      categories: sermonPage.categories
    };

    asset.passages.push(fixWhiteSpace(tds.eq(1).text()).trim());

    if(asset.date === '12/13/2009') {
      asset.title = 'The Savior-King';
      asset.tags.push('Advent 3rd Sunday');
      assets.push(asset);
      return;
    }

    if(asset.date === '12/23/2007') {
      asset.title = 'The All-Sufficient God';
      asset.tags.push('Advent 4th Sunday');
      assets.push(asset);
      return;
    }

    // <tag> — <title> — <speaker>
    var matches = /^(.+?)( ?\- ?| ?— ?| ?– ?)(.+?)( ?\- ?| ?— ?| ?– ?)(.*?)$/.exec(asset.title);
    if(matches) {
      asset.tags.push(matches[1].trim());
      // trim slanted double quotes
      asset.title = matches[3].replace(/“|”/g, '').trim();
      asset.speaker = matches[5].trim();
    }
    else {
      // <tag> — <title>
      matches = /^(.+)( ?\-|—|– ?)(.*)$/.exec(asset.title);
      if(matches) {
        asset.tags.push(matches[1].trim());
        // trim slanted double quotes
        asset.title = matches[3].replace(/“|”/g, '').trim();
      }
    }

    asset.title = asset.title.replace(/\"/g, '');
    assets.push(asset);
  });

  return assets;
};


function fixWhiteSpace(str) {
  return str.replace(/\s+/g, ' ');
}