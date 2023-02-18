import prisma from 'lib/prisma';

export const resolvers = {
  Query: {
    users: async props => {
      console.log({ props });
      return prisma.user.findMany();
    },
  },
};
