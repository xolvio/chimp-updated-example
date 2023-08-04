import { QueryResolvers } from "~generated/graphql/types";

export const getShapesQuery: QueryResolvers["getShapes"] = (
  parent,
  args,
  context,
) => context.shapesRepository.findAll();
