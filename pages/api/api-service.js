const { DB_CONNECTION } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {

  // Switch the methods
  switch (req.method) {
    case "GET": {
      return getPosts(req, res);
    }

    case "POST": {
      return createPost(req, res);
    }

    case "PUT": {
      return updatePost(req, res);
    }

    case "DELETE": {
      return deletePost(req, res);
    }
  }
}

// Function to get all posts
const getPosts = async (req, res) => {
  if (req.method === "GET") {
    try {
      // connect to the database
      const { db } = await DB_CONNECTION();

      // fetch the posts
      let results = await db
        .collection(process.env.COLLECTION_NAME)
        .find({})
        .toArray();

      // return the posts
      return res.json({
        message: results,
        success: true,
      });
    } catch (error) {
      // return the error
      return res.json({
        message: new Error(error).message,
        success: false,
      });
    }
  }
};

// Function to create a new post
const createPost = async (req, res) => {
  if (req.method === "POST") {
    // Get body request
    const data = JSON.parse(req.body);

    // Connect to database
    const { db } = await DB_CONNECTION();

    const blogCollection = await db.collection(process.env.COLLECTION_NAME);

    const result = await blogCollection.insertOne(data);

    console.log(result);

    res.status(201).json({
      message: "Post created successfully.",
    });
  }
};

const updatePost = async (req, res) => {
  try {
    // Get body request
    const data = JSON.parse(req.body);

    // Connect to database
    const { db } = await DB_CONNECTION();

    // update the published status of the post
    await db.collection(process.env.COLLECTION_NAME).updateOne(
      {
        _id: new ObjectId(req.body),
      },
      { $set: { data } }
    );

    // return a message
    return res.status(200).json({
      message: "Post updated successfully",
      success: true,
    });
  } catch (error) {
    // return an error
    return res.status(200).json({
      message: new Error(error).message,
      success: false,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    // Connect to database
    const { db } = await DB_CONNECTION();

    // Deleting the post
    await db.collection(process.env.COLLECTION_NAME).deleteOne({
      _id: new ObjectId(req.body),
    });

    // returning a message
    return res.status(200).json({
      message: "Post deleted successfully",
      success: true,
    });
  } catch (error) {
    // returning an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};
