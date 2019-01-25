const Data = require('../Models/JsonDummyData.js');
const Papers = Data.papers;
const db = require('../db.js');

export const getPapers = async (event, context, callback) => {
  try {
    await db.Paper.findAll().then(dbPapers => {
       
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: dbPapers,
          }),
        };
        callback(null, response);
     
      });
    }
    catch(error) {
      callback(new Error(error));
    }
 
};

export const getPaper = async (event, context, callback) => {
  console.log(event.pathParameters.id);
    try {
    await db.Paper.findById(event.pathParameters.id).then(dbPapers => {
      
        if(!dbPapers) {
          dbPapers = 'no papers found';
        }
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: dbPapers,
          }),
        };
        callback(null, response);
     
      });
    }
    catch(error) {
      callback(new Error(error));
    }
};

export const createPaper = async (event, context, callback) => {
    console.log(event);
    // event.body will have to post details. 
    // parse event.body contents and create new paper from paper model
    let data = JSON.parse(event.body);

    //Write simple validation class where either model fields have required fields, etc... that we can call here.
    
  

  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: "created new paper " + data.first_name,
    }),
  };


  callback(null, response);
};

export const updatePaper = async (event, context, callback) => {
    //validate the new paper data
    let newPaperData = JSON.parse(event.body);
    //get the correct paper based of path id
    const paperId = event.pathParameters.id;
    let Paper=  Papers.filter(x => {
            return x.id == paperId});

    console.log(Paper);
    //update the fields, and save paper

    //return updated paper or throw error

  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message:Paper 
    }),
  };


  callback(null, response);
};

export const deletePaper = async (event, context, callback) => {
    const paperId = event.pathParameters.id;
    //validate request, and verify delete permissions
    
    //get paper model, and delete it.
    //return success
  const response = {
    statusCode: 200,
    body: JSON.stringify({
       message: 'deleted paper ' + paperId,
    }),
  };


  callback(null, response);
};


