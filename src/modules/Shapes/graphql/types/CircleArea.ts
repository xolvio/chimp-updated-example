import { CircleResolvers } from "~generated/graphql/types";

export const CircleArea: CircleResolvers["area"] = (parent, args, context) =>
  parent.radius * parent.radius * Math.PI;
