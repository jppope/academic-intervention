const Data = require('../Models/JsonDummyData.js');
const Groups = Data.groups;
const db = require('../db.js');

export const getGroups = async (event, context, callback) => {
  try {
    await db.Group.findAll().then(dbGroups => {
       
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: dbGroups,
          }),
        };
        callback(null, response);
     
      });
    }
    catch(error) {
      callback(new Error(error));
    }
    
};

export const getGroup = async (event, context, callback) => {
  try {
    await db.Group.findById(event.pathParameters.id).then(dbGroup => {
      
        if(!dbGroup) {
          dbGroup = 'no users found';
        }
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: dbGroup,
          }),
        };
        callback(null, response);
     
      });
    }
    catch(error) {
      callback(new Error(error));
    }
};



export const createGroup = async (event, context, callback) => {
  console.log('body is: ', event.body);
  let data = JSON.parse(event.body);

    db.Group.create({name : data.name, email: data.email, phone: data.phone, single_point_of_contact: data.single_point_of_contact, desc: data.desc, site: data.site});
    // TODO: process address
    // event.body will have to post details. 
    // parse event.body contents and create new user from user model

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



