import {MongoClient} from 'mongodb'

export async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://user2:vmIiSskecbO9BWAj@cluster0.s2ffwug.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=AtlasApp');

  return client
}
