import { Context } from './context';

export const resolvers = {
  Query: {
    users: async (_parent, _args, ctx: Context) => ctx.prisma.user.findMany(),
  },
};
