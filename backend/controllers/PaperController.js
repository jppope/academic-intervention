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
    // event.body will have to post details. 
    // parse event.body contents and create new paper from paper model
    let data = JSON.parse(event.body);
    //Write simple validation class where either model fields have required fields, etc... that we can call here.
    try{

      let result = await db.Paper.create({
        "title": data.title, 
        "desc": data.desc, 
        "author": data.author, 
        "source_url": data.source_url, 
        "site": data.site, 
        "rating_id": data.rating_id,
        "group_id": data.group_id,
        "verified": data.verified,
        "date_published": data.date_published,
      });

    const response = {
      statusCode: 201,
      body: JSON.stringify({
        message: "created new paper " + data.title,
      }),
    };

  callback(null, response);
 
  }
  catch(error) {
    console.log(error);
    callback(new Error(error));
    const response = {
      statusCode: 400,
      body: JSON.stringify({
        message: "failed to create a paper",
      }),
    };
 
  callback(null, response);
  }
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


