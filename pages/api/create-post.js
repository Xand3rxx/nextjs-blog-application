import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // const data = JSON.parse(req.body);
    const data = req.body;
    // const { title, author, excerpt, description } = data;

    const client = MongoClient.connect(
      "mongodb+srv://Xand3rx:digits232@cluster0.anhcv.mongodb.net/blogPosts?retryWrites=true&w=majority"
    );
    const db = (await client).db();

    const blogCollection = await db.collection("posts");

    const result = await blogCollection.insertOne(data);

    console.log(result);
    // client.close();

    res.status(201).json({
      message: "Post created successfully.",
    });
  }
}
