'use strict';
/**
 * Created by zhulizhe on 2018-12-22.
 */
const { JPushAsync: JPushAsync } = require('jpush-async');

const Appkey = '0f4f36e4d5c7a6d4a0e871ab';
const MasterSecret = 'f9ab173a4b4f6b9dad290b9e';

const client = JPushAsync.buildClient(Appkey, MasterSecret);

const pushAll = content => {
  client.push().setPlatform(JPushAsync.ALL)
    .setAudience(JPushAsync.ALL)
    .setNotification(content, JPushAsync.ios('ios alert', 'happy', 5))
    .send()
    .then(function(result) {
      console.log(result);
    })
    .catch(function(err) {
      console.log(err);
    });
};

const push = content => {
  client.push().setPlatform('ios', 'android')
    .setAudience(JPushAsync.tag('555', '666'), JPushAsync.alias('666,777'))
    .setNotification('Hi, JPush', JPushAsync.ios('ios alert'), JPushAsync.android('android alert', null, 1))
    .setMessage(content)
    .setOptions(null, 60)
    .send()
    .then(function(result) {
      console.log(result);
    })
    .catch(function(err) {
      console.log(err);
    });
};

module.exports = {
  pushAll,
  push,
};
