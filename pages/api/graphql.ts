import { ApolloServer } from 'apollo-server-micro';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { createContext } from 'graphql/context';
import { resolvers } from 'graphql/resolvers';
import { schema } from 'graphql/schema';
import { IncomingMessage, ServerResponse } from 'http';
import Cors from 'micro-cors';

const apolloServer = new ApolloServer({
  schema,
  resolvers,
  context: createContext,
});
const cors = Cors();

const startServer = apolloServer.start();

export default cors(
  async (req: MicroRequest, res: ServerResponse<IncomingMessage>) => {
    if (req.method === 'OPTIONS') {
      res.end();
    }
    await startServer;
    await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
  },
);

export const config = {
  api: {
    bodyParser: false,
  },
};
