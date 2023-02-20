import { Context } from './context';

export const resolvers = {
  Query: {
    forms: async (_parent: any, _args: unknown, ctx: Context) =>
      ctx.prisma.form.findMany(),
  },
};
