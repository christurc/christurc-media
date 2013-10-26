var $ = require('cheerio');
var _ = require('underscore');

// parses a typical four column table for assets
// as found on http://christurc.org/sermons_single.html
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
      speaker: 'Rev. Michael Brown',
      tags: sermonPage.tags
    };

    asset.passages.push(fixWhiteSpace(tds.eq(1).text()).trim());

    // trim double quotes
    asset.title = asset.title.replace(/\"/g, '');
    assets.push(asset);
  });

  return assets;
};


function fixWhiteSpace(str) {
  return str.replace(/\s+/g, ' ');
}