var parseFour = require('./formats/fourColumn').parse;
var parseFourTopical = require ('./formats/fourColumnTopical').parse;
var parseFourSeasonal = require('./formats/fourColumnSeasonal').parse;
var parseThree = require('./formats/threeColumn').parse;
var parseThreeGrace = require('./formats/threeColumnGrace').parse;
var parseThreePsalms = require('./formats/threeColumnPsalms').parse;
var parseThreeOfficers = require('./formats/threeColumnOfficers').parse;
var parseThreeCatechismHorton = require('./formats/threeColumnCatechismHorton').parse;
var parseThreeGuest = require('./formats/threeColumnGuest').parse
var defaultSpeaker = 'Rev. Michael Brown';

module.exports = [
  // {
  //   tags: ['Genesis', 'Morning', 'Sermon'],
  //   page: 'sermons_genesis.html',
  //   defaultSpeaker: defaultSpeaker,
  //   parse: parseFour
  // },

  // {
  //   tags: ['Exodus', 'Morning', 'Sermon'],
  //   page: 'sermons_exodus.html',
  //   defaultSpeaker: defaultSpeaker,
  //   parse: parseFour
  // },

  // {
  //   tags: ['Gospel of Luke', 'Morning', 'Sermon'],
  //   page: 'sermons_luke.html',
  //   defaultSpeaker: defaultSpeaker,
  //   parse: parseFour
  // },

  // {
  //   tags: ['Gospel of John', 'Evening', 'Sermon'],
  //   page: 'sermons_john.html',
  //   defaultSpeaker: defaultSpeaker,
  //   parse: parseFour
  // },

  // {
  //   tags: ['Drama of Redemption', 'Morning', 'Sermon'],
  //   page: 'sermons_redemption.html',
  //   defaultSpeaker: defaultSpeaker,
  //   parse: parseFour
  // },

  // {
  //   tags: ['Topical', 'Sermon'],
  //   page: 'sermons_single.html',
  //   defaultSpeaker: defaultSpeaker,
  //   parse: parseFourTopical
  // },

  // {
  //   tags: ['Sermons by Dr. Horton', 'Sermon'],
  //   page: 'sermons_horton.html',
  //   defaultSpeaker: 'Rev. Dr. Michael Horton',
  //   parse: parseThree
  // },

  // {
  //   tags: ['Seasonal', 'Sermon'],
  //   page: 'sermons_seasonal.html',
  //   defaultSpeaker: defaultSpeaker,
  //   parse: parseFourSeasonal
  // },

  // {
  //   tags: ['Psalms', 'Evening', 'Sermon'],
  //   page: 'sermons_psalms.html',
  //   defaultSpeaker: defaultSpeaker,
  //   parse: parseThreePsalms
  // },

  // {
  //   tags: ['Acts of the Apostles', 'Evening', 'Sermon'],
  //   page: 'sermons_acts.html',
  //   defaultSpeaker: defaultSpeaker,
  //   parse: parseThree
  // },

  // {
  //   tags: ['Doctrines of Grace', 'Evening', 'Sermon'],
  //   page: 'sermons_dort.html',
  //   defaultSpeaker: defaultSpeaker,
  //   parse: parseThreeGrace
  // },

  // {
  //   tags: ['Church Officers', 'Evening', 'Sermon'],
  //   page: 'sermons_officers.html',
  //   defaultSpeaker: defaultSpeaker,
  //   parse: parseThreeOfficers
  // },

  // {
  //   tags: ['Catechism', 'Sunday School'],
  //   page: 'catechism_horton.html',
  //   defaultSpeaker: 'Rev. Dr. Michael Horton',
  //   parse: parseThreeCatechismHorton
  // },

  // // this one needs some manual work
  // {
  //   tags: ['Catechism', 'Guest Speaker'],
  //   page: 'sermons_guest.html',
  //   defaultSpeaker: '',
  //   parse: parseThreeGuest
  // },

  // // this one needs some manual work
  {
    tags: ['Catechism', 'Interns'],
    page: 'sermons_interns.html',
    defaultSpeaker: '',
    parse: parseThreeGuest
  },

];

// var vintage = 'sermons.html';
// sermons_colossians.html
// sermons_galatians.html
// sermons_hebrews.html
// sermons_heidelberg.html
// sermons_leadership.html
// sermons_philemon.html
// sermons_philippians.html
// sermons_prayer.html
// sermons_second_timothy.html
// sermons_zechariah.html
