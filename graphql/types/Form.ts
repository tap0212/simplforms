import { extendType, objectType } from 'nexus';

export const Form = objectType({
  name: 'Form',
  definition(t) {
    t.string('id');
  },
});

export const FromsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('forms', {
      type: 'Form',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.form.findMany();
      },
    });
  },
});
