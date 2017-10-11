const Twitter = require('twitter-node-client').Twitter;
const config = require('./data/twitter_config.json');
const tw = new Twitter(config);

tw.getTweet(
  { id: '915865688618569728' },
  (err, res, body) => {
    console.log('ERROR: ', err);
  },
  (data) => {
    console.log('Data: ', data);
  }
)
