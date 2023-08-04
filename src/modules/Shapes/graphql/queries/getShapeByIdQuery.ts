import { QueryResolvers } from "~generated/graphql/types";

export const getShapeByIdQuery: QueryResolvers["getShapeById"] = (
  parent,
  args,
  context,
) => context.shapesRepository.findOne(args.id);
