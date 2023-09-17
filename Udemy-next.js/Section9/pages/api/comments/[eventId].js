import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect('mongodb+srv://user1:qBRTpLJ0bCKc5jFK@cluster0.s2ffwug.mongodb.net/events?retryWrites=true&w=majority&appName=AtlasApp')

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    console.log(email, name, text);

    const newComment = {
      email,
      name,
      text,
      eventId
    };

    const db = client.db();

   const result = await db.collection('comments').insertOne(newComment);

    console.log(result);

    res.status(201).json({ message: "Added ne comment" , comment: newComment});
  }

  if (req.method === "GET") {
    const dummyList = [
        {id: 'c1', name:"max", text: " A first comment"},
        {id: 'c2', name:"james", text: " A second comment"}

    ]

    res.status(200).json({comments: dummyList});
  }

  client.close
}

export default handler;
