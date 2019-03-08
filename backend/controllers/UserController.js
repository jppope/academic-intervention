// const Data = require('../Models/JsonDummyData.js');
// const Users = Data.users;
const db = require('../db.js');

export const getUsers = async (event, context, callback) => {
  try {
    await db.User.findAll().then(dbUsers => {
       
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: dbUsers,
          }),
        };
        callback(null, response);
     
      });
    }
    catch(error) {
      callback(new Error(error));
    }
    
};

export const getUser = async (event, context, callback) => {
  console.log('id is = !: ', event.pathParameters.id);
  try {
    await db.User.findById(event.pathParameters.id).then(dbUsers => {
      
        if(!dbUsers) {
          dbUsers = 'no users found';
        }
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: dbUsers,
          }),
        };
        callback(null, response);
     
      });
    }
    catch(error) {
      callback(new Error(error));
    }
};

export const createUser = async (event, context, callback) => {
  // TODO: build user endpoints to interact with database like /get does
    console.log(event);
    // event.body will have to post details. 
    // parse event.body contents and create new user from user model
    let data = JSON.parse(event.body);

    //Write simple validation class where either model fields have required fields, etc... that we can call here.

    //create a new entry on the user model
    //return new user model

  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: "created new user " + data.first_name,
    }),
  };


  callback(null, response);
};

export const updateUser = async (event, context, callback) => {
    //TODO: allow users to update their settings, email

      let userMessage = 'endpoint in progress';
  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: userMessage 
    }),
  };


  callback(null, response);
};

export const deleteUser = async (event, context, callback) => {
  //TODO: Allow deletion of users, but restrict with ACL (access control list)
  // or some sort of permissions.

      let userMessage = 'endpoint in progress';

  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: userMessage 
    }),
  };


  callback(null, response);
};


