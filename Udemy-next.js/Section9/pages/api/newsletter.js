import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;
    
    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    const client = await MongoClient.connect(
      'mongodb+srv://user1:qBRTpLJ0bCKc5jFK@cluster0.s2ffwug.mongodb.net/events?retryWrites=true&w=majority&appName=AtlasApp'
    );
    const db = client.db();

    await db.collection('newsletter').insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: 'Signed up!' });
  }
}
export default handler;