const Data = require('../Models/JsonDummyData.js');
const Papers = Data.papers;

export const getPapers = async (event, context, callback) => {
    console.log(Papers);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: Papers,
        }),
    };
    
    callback(null, response);
};

export const getPaper = async (event, context, callback) => {
  console.log(event.pathParameters.id);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: Papers.filter(x => {
            return x.id == event.pathParameters.id}),
    }),
    };
  callback(null, response);
};

export const createPaper = async (event, context, callback) => {
    console.log(event);
    // event.body will have to post details. 
    // parse event.body contents and create new user from user model
    let data = JSON.parse(event.body);

    //Write simple validation class where either model fields have required fields, etc... that we can call here.
    
  

  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: "created new user " + data.first_name,
    }),
  };


  callback(null, response);
};

export const updatePaper = async (event, context, callback) => {
    //validate the new user data
    let newUserData = JSON.parse(event.body);
    //get the correct user based of path id
    const userId = event.pathParameters.id;
    let Paper=  Papers.filter(x => {
            return x.id == userId});

    console.log(Paper);
    //update the fields, and save user

    //return updated user or throw error

  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message:Paper 
    }),
  };


  callback(null, response);
};

export const deleteUser = async (event, context, callback) => {
    const userId = event.pathParameters.id;
    //validate request, and verify delete permissions
    
    //get user model, and delete it.
    //return success
  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: 'deleted user ' + userId,
    }),
  };


  callback(null, response);
};


