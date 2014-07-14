var _ = require('underscore');
var reg = /(.+)(\d.*)/;

exports.map = function(assets) {
  _.each(assets, function(asset) {
    _.each(asset.passages, function(passage, i) {
      passage = passage.replace(/Rom\./, 'Romans ');
      passage = passage.replace(/Ex\./, 'Exodus ');
      passage = passage.replace(/Pet./, 'Peter ');
      passage = passage.replace(/Heb /, 'Hebrew ');
      passage = passage.replace(/Hebrew /, 'Hebrews ');
      passage = passage.replace(/Tim\./, 'Timothy');
      passage = passage.replace(/Thes\./, 'Thessalonians');
      passage = passage.replace(/Thess\./, 'Thessalonians');
      passage = passage.replace(/Eph\. /, 'Ephesians ');
      passage = passage.replace(/Cor\./, 'Corinthians ');
      passage = passage.replace(/Lk\./, 'Luke');
      passage = passage.replace(/Matt\./, 'Matthew');
      passage = passage.replace(/I Timothy /, '1 Timothy ');
      passage = passage.replace(/I Thessalonians /, '1 Thessalonians ');
      passage = passage.replace(/2 Peter r/, '2 Peter');
      passage = passage.replace(/1 Peter r/, '1 Peter');
      passage = passage.replace(/Psalms/, 'Psalm');
      passage = passage.replace(/\s+/g, ' ');
      asset.passages[i] = passage;
    });

    if(asset.passages.length !== 1)
      return;

    asset.passages = asset.passages[0].split(';');

    _.each(asset.passages, function(passage, i) {
      asset.passages[i] = passage.trim();
    });
  });
};

