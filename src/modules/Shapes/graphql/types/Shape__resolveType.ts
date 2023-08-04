import { ShapeResolvers } from "~generated/graphql/types";

export const Shape__resolveType: ShapeResolvers["__resolveType"] = (
  parent,
  context,
) => {
  if ("sideLength" in parent) {
    return "Square";
  }
  if ("radius" in parent) {
    return "Circle";
  }
  throw new Error("unknown type");
};
