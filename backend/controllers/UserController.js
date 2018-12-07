const Data = require('../Models/JsonDummyData.js');
const Users = Data.users;

export const getUsers = async (event, context, callback) => {
    // console.log(Users);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: Users,
        }),
    };
    
    callback(null, response);
};

export const getUser = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: Users.filter(x => {
            return x.id == event.pathParameters.id}),
    }),
    };
  callback(null, response);
};

export const createUser = async (event, context, callback) => {
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
    //validate the new user data
    let newUserData = JSON.parse(event.body);
    //get the correct user based of path id
    const userId = event.pathParameters.id;
    let User =  Users.filter(x => {
            return x.id == userId});

    console.log(User);
    //update the fields via the model, and save user

    //return updated user or throw error

  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: User
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


