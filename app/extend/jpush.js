'use strict';
/**
 * Created by zhulizhe on 2018-12-22.
 */
const { JPushAsync: JPushAsync } = require('jpush-async');

const Appkey = '70023135ee111faf1b9f90d3';
const MasterSecret = '7aecf337630bb083a4492813';

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

const push = (content, alias) => {
  client.push().setPlatform('ios', 'android')
    .setAudience(JPushAsync.alias(alias))
    .setNotification('Hi, 翼优生活', JPushAsync.ios(content,'myVoice.caf',1,false,null), JPushAsync.android(content, null, 1))
    .setMessage(content)
    .setOptions(null, 86400, null, false, null)
    .send()
    .then(function(result) {
      console.log(result);
    })
    .catch(function(err) {
      console.log(err);
    });
};

// pushAll('哈哈哈哈')
push('哈哈哈哈', 'lovecross')

// module.exports = {
//   pushAll,
//   push,
// };
