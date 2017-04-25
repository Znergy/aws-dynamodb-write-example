console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

exports.handle = function(event, context, callback) {

  var params = {
    Item: {
      date: Date.now(),
      message: "I love your website"
    },

    TableName: "guestbook"
  };

  docClient.put(params, function(err, data) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}
