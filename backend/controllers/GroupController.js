const Data = require('../Models/JsonDummyData.js');
const Groups = Data.groups;

export const getGroups = async (event, context, callback) => {
    console.log(Groups);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: Groups,
        }),
    };
    
    callback(null, response);
};

export const getGroup = async (event, context, callback) => {
  console.log(event.pathParameters.id);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: Groups.filter(x => {
            return x.id == event.pathParameters.id}),
    }),
    };
  callback(null, response);
};

export const createGroup = async (event, context, callback) => {
    console.log(event);
    // event.body will have to post details. 
    // parse event.body contents and create new user from user model
    let data = JSON.parse(event.body);

    //Write simple validation class where either model fields have required fields, etc... that we can call here.
    
  

  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: "created new user " + data.name,
    }),
  };


  callback(null, response);
};

export const updateGroup = async (event, context, callback) => {
    //validate the new user data
    let newUserData = JSON.parse(event.body);
    //get the correct user based of path id
    const userId = event.pathParameters.id;
    let Group =  Groups.filter(x => {
            return x.id == userId});

    console.log(Group);
    //update the fields, and save user

    //return updated user or throw error

  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: Group
    }),
  };


  callback(null, response);
};

export const deleteGroup = async (event, context, callback) => {
    const group_id = event.pathParameters.id;
    //validate request, and verify delete permissions
    
    //get user model, and delete it.
    //return success
  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: 'deleted group ' + group_id,
    }),
  };


  callback(null, response);
};



