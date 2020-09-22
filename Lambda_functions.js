'use strict'
const AWS = require('aws-sdk');
AWS.config.update({region: "us-west-1"})
exports.handler = async function (event, context, callback) {
  const ddb = new AWS.DynamoDB({apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({region: "us-west-1"});
  let responseBody = "";
  let statusCode = 0;
  console.log(event);
  const {email, password, firstname, lastname} = JSON.parse(event.body);
  const params = {
    TableName: "Users",
    Item:{
        email: email,
        password:password,
        firstname:firstname,
        lastname:lastname
    }
  }

  try{
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch(error){
    responseBody = "error";
    statusCode = 403;
  }
  const response = {
    statusCode: statusCode,
    headers: {
      "myHeader": "test"
    },
    body: responseBody
}
  return response;
}

//==================================================//

'use strict'
const AWS = require('aws-sdk');
AWS.config.update({region: "us-west-1"})
exports.handler = async function (event, context, callback) {
  const ddb = new AWS.DynamoDB({apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({region: "us-west-1"});
  let responseBody = "";
  let statusCode = 0;
  const {id} = event.pathParameters;
  const params = {
    TableName: "Users",
    Key:{
        email: id
    }
  }

  try{
    const data = await documentClient.get(params).promise();
    responseBody = JSON.stringify(data.Item);
    statusCode = 200;
  } catch(error){
    responseBody = "error";
    statusCode = 403;
  }
  const response = {
    statusCode: statusCode,
    headers: {
      "myHeader": "test"
    },
    body: responseBody
}
  return response;
}