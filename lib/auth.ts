import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { type Db, MongoClient } from 'mongodb';

// Create MongoDB client and database
const client = new MongoClient(process.env.DATABASE_URI as string);
const db: Db = client.db('kbqtechhub');

export const auth = betterAuth({
  adapter: mongodbAdapter(db as any),
  session: {
    modelName: 'session',
  },
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
  },
  callbacks: {
    session: ({ session, token }: { session: any; token: any }) => {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    jwt: ({ token, user }: { token: any; user: any }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  providers: [
    {
      id: 'credentials',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(_credentials: any) {
        // This will be implemented to work with Payload CMS users
        // For now, we'll use a placeholder
        return null;
      },
    },
  ],
});

export type AuthSession = typeof auth.$Infer.Session;
