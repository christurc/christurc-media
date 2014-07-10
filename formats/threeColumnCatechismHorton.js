var $ = require('cheerio');
var _ = require('underscore');

// parses a typical four column table for assets
// as found on http://christurc.org/sermons_genesis.html
// date | passage | title | link
exports.parse = function(html, sermonPage) {
  var assets = [];
  var $html = $.load(html);
  var trs = $html('table tr');
  var topic = '';

  _.each(trs, function(tr){
    var $tr = $(tr);
    var $ths = $('th', $tr);

    if($ths.length) {
      topic = $ths.text().trim();

      if(topic === "The Heidelberg Catechism - (Dr. Horton and Others)") {
        topic = "The Heidelberg Catechism";
      }

      return;
    }

    var tds = $('td', $tr);
    var asset = {
      date: tds.eq(0).text(),
      passages: [],
      title: fixWhiteSpace(tds.eq(1).text()),
      uri: $('a.link', tds).attr('href') || $('a', tds).attr('href'),
      speaker: sermonPage.defaultSpeaker,
      tags: sermonPage.tags.slice(0),
      categories: sermonPage.categories.slice(0)
    };

    asset.categories.push(topic);

    // trim double quotes
    asset.title = asset.title.replace(/\"/g, '');
    assets.push(asset);
  });

  return assets;
};


function fixWhiteSpace(str) {
  return str.replace(/\s+/g, ' ');
}