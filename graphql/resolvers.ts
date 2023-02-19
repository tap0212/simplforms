import { Context } from './context';

export const resolvers = {
  Query: {
    users: async (_parent: any, _args: unknown, ctx: Context) =>
      ctx.prisma.user.findMany(),
  },
};
