var parseFour = require('./formats/fourColumn').parse;
var parseFourTopical = require ('./formats/fourColumnTopical').parse;
var parseFourSeasonal = require('./formats/fourColumnSeasonal').parse;
var parseThree = require('./formats/threeColumn').parse;
var parseThreeGrace = require('./formats/threeColumnGrace').parse;
var parseThreePsalms = require('./formats/threeColumnPsalms').parse;
var parseThreeOfficers = require('./formats/threeColumnOfficers').parse;
var parseThreeCatechismHorton = require('./formats/threeColumnCatechismHorton').parse;
var parseThreeGuest = require('./formats/threeColumnGuest').parse;
var parseSermons = require('./formats/sermons').parse;
var parseHeidelberg = require('./formats/heidelberg').parse;
var parseHorton = require('./formats/horton').parse;
var parseExodus = require('./formats/exodus').parse;
var defaultSpeaker = 'Rev. Michael Brown';

module.exports = [

  // **** these need some manual work

  // {
  //   tags: ['Catechism', 'Guest Speaker'],
  //   page: 'sermons_guest.html',
  //   defaultSpeaker: '',
  //   parse: parseThreeGuest
  // },

  // {
  //   tags: ['Catechism', 'Interns'],
  //   page: 'sermons_interns.html',
  //   defaultSpeaker: '',
  //   parse: parseThreeGuest
  // },

  // {
  //   tags: ['Catechism', 'Sunday School'],
  //   page: 'catechism_horton.html',
  //   defaultSpeaker: 'Rev. Dr. Michael Horton',
  //   parse: parseThreeCatechismHorton
  // },


  // **** these should be good

  {
    categories: ['Genesis'],
    tags: ['Sermon'],
    page: 'sermons_genesis.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Exodus'],
    tags: ['Sermon'],
    page: 'sermons_exodus.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseExodus
  },

  {
    categories: ['Gospel of Luke'],
    tags: ['Sermon'],
    page: 'sermons_luke.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Gospel of John'],
    tags: ['Sermon'],
    page: 'sermons_john.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Drama of Redemption'],
    tags: ['Sermon'],
    page: 'sermons_redemption.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: [],
    tags: ['Sermon'],
    page: 'sermons_single.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFourTopical
  },

  {
    categories: [],
    tags: ['Sermon'],
    page: 'sermons_horton.html',
    defaultSpeaker: 'Rev. Dr. Michael Horton',
    parse: parseHorton
  },

  {
    categories: ['Seasonal'],
    tags: ['Sermon'],
    page: 'sermons_seasonal.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFourSeasonal
  },

  {
    categories: ['Psalms'],
    tags: ['Sermon'],
    page: 'sermons_psalms.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreePsalms
  },

  {
    categories: ['Acts of the Apostles'],
    tags: ['Sermon'],
    page: 'sermons_acts.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThree
  },

  {
    categories: ['Doctrines of Grace'],
    tags: ['Sermon'],
    page: 'sermons_dort.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeGrace
  },

  {
    categories: ['Church Officers'],
    tags: ['Sermon'],
    page: 'sermons_officers.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeOfficers
  },

  {
    categories: ['Colossians'],
    tags: ['Sermon'],
    page: 'sermons_colossians.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Galatians'],
    tags: ['Sermon'],
    page: 'sermons_galatians.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Hebrews'],
    tags: ['Sermon'],
    page: 'sermons_hebrews.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Heidelberg Catechism'],
    tags: ['Sermon'],
    page: 'sermons_heidelberg.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseHeidelberg
  },

  {
    categories: ['Leadership'],
    tags: ['Sermon'],
    page: 'sermons_leadership.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeGrace
  },

  {
    categories: ['Philemon'],
    tags: ['Sermon'],
    page: 'sermons_philemon.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeGrace
  },

  {
    categories: ['Philippians'],
    tags: ['Sermon'],
    page: 'sermons_philippians.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeGrace
  },

  {
    categories: ['Prayer'],
    tags: ['Sermon'],
    page: 'sermons_prayer.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['2 Timothy'],
    tags: ['Sermon'],
    page: 'sermons_second_timothy.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Zechariah'],
    tags: ['Sermon'],
    page: 'sermons_zechariah.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeGrace
  },

  {
    categories: [],
    tags: ['Sermon'],
    page: 'sermons.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseSermons
  }
];
