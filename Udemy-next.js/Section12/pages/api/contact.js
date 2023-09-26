import { MongoClient } from 'mongodb'

async function handler(req, res) {
  const { email, name, message } = req.body;

  if (!email ||
    !email.includes('@') ||
    !name ||
    !name.trim() === "" ||
    !message ||
    !message.trim() === ""
  ) {
    res.status(402).json({ message: 'Invalid input' })
    return;
  }

  const newMessage = {
    email,
    name,
    message,
  };

  let client;

  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.s2ffwug.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=AtlasApp`;

  try {

    client = await MongoClient.connect(connectionString)

  } catch (error) {
    res.status(500).json({ message: 'Failed to connect to database' })
    return
  }

  const db = client.db();

  try {
    const result = await db.collection('messages').insertOne(newMessage)
    newMessage.id = result.insertedId;
  } catch (error) {
    res.status(500).json({ message: 'Failed to store message' })
    return
  }

  client.close()

  res.status(201).json({ message: 'Success stored message', message: newMessage })
}

export default handler