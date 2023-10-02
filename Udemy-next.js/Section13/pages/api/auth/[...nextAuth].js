import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'; (old way)
import Auth0Provider from "next-auth/providers/auth0"
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';
import { useRouter } from 'next/router';

export default NextAuth({
  session: {
    // jwt: true (old way)
    strategy: 'jwt',
  },
  
  providers: [
    Auth0Provider({
      async authorize(credentials) {

        const client = await connectToDatabase();

        const userCollection = client.db().collection('user');
        
        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          client.close();
          throw new Error('Could not log in');
        }

        client.close();
        return { email: user.email };
      }
    })
  ]
});

  // (old way)
  // session: {
  //   jwt: true
  // },
  // providers: [
  //   Providers.Credentials({
  //     async authorize(credentials) {
  //       const client = await connectToDatabase();

  //       const userCollection = client.db().collection('user');

  //       const user = await userCollection.findOne({ email: credentials.email })

  //       if (!user) {
  //         client.close()
  //         throw new Error('No user found!')
  //       }

  //       const isValid = await verifyPassword(credentials.password, user.password);

  //       if (!isValid) {
  //         client.close()
  //         throw new Error('Could not log in'); f
  //       }
  //       client.close()
  //       return { email: user.email }
  //     }
  //   })
  // ]
