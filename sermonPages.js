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
  //   tags: [],
  //   categories: [],
  //   page: 'sermons_guest.html',
  //   defaultSpeaker: '',
  //   parse: parseThreeGuest
  // }

  // {
  //   tags: [],
  //   categories: [],
  //   page: 'sermons_interns.html',
  //   defaultSpeaker: '',
  //   parse: parseThreeGuest
  // },

  // {
  //   tags: [],
  //   categories: [],
  //   page: 'catechism_horton.html',
  //   defaultSpeaker: 'Rev. Dr. Michael Horton',
  //   parse: parseThreeCatechismHorton
  // }

  // **** these should be good

  {
    categories: ['Genesis'],
    tags: [],
    page: 'sermons_genesis.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Exodus'],
    tags: [],
    page: 'sermons_exodus.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseExodus
  },

  {
    categories: ['Gospel of Luke'],
    tags: [],
    page: 'sermons_luke.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Gospel of John'],
    tags: [],
    page: 'sermons_john.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Drama of Redemption'],
    tags: [],
    page: 'sermons_redemption.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: [],
    tags: [],
    page: 'sermons_single.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFourTopical
  },

  {
    categories: [],
    tags: [],
    page: 'sermons_horton.html',
    defaultSpeaker: 'Rev. Dr. Michael Horton',
    parse: parseHorton
  },

  {
    categories: ['Seasonal'],
    tags: [],
    page: 'sermons_seasonal.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFourSeasonal
  },

  {
    categories: ['Psalms'],
    tags: [],
    page: 'sermons_psalms.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreePsalms
  },

  {
    categories: ['Acts of the Apostles'],
    tags: [],
    page: 'sermons_acts.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThree
  },

  {
    categories: ['Doctrines of Grace'],
    tags: [],
    page: 'sermons_dort.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeGrace
  },

  {
    categories: ['Church Officers'],
    tags: [],
    page: 'sermons_officers.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeOfficers
  },

  {
    categories: ['Colossians'],
    tags: [],
    page: 'sermons_colossians.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Galatians'],
    tags: [],
    page: 'sermons_galatians.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Hebrews'],
    tags: [],
    page: 'sermons_hebrews.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Heidelberg Catechism'],
    tags: [],
    page: 'sermons_heidelberg.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseHeidelberg
  },

  {
    categories: ['Leadership'],
    tags: [],
    page: 'sermons_leadership.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeGrace
  },

  {
    categories: ['Philemon'],
    tags: [],
    page: 'sermons_philemon.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeGrace
  },

  {
    categories: ['Philippians'],
    tags: [],
    page: 'sermons_philippians.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeGrace
  },

  {
    categories: ['Prayer'],
    tags: [],
    page: 'sermons_prayer.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['2 Timothy'],
    tags: [],
    page: 'sermons_second_timothy.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseFour
  },

  {
    categories: ['Zechariah'],
    tags: [],
    page: 'sermons_zechariah.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseThreeGrace
  },

  {
    categories: [],
    tags: [],
    page: 'sermons.html',
    defaultSpeaker: defaultSpeaker,
    parse: parseSermons
  }
];
