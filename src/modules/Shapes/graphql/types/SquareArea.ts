import { SquareResolvers } from "~generated/graphql/types";

export const SquareArea: SquareResolvers["area"] = (parent, args, context) =>
  parent.sideLength * parent.sideLength;
