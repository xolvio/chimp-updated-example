import { ShapeOrUnknownResolvers } from "~generated/graphql/types";

export const ShapeOrUnknown__resolveType: ShapeOrUnknownResolvers["__resolveType"] =
  (parent, context) => {
    if ("sideLength" in parent) {
      return "Square";
    }
    if ("radius" in parent) {
      return "Circle";
    }
    return "UnknownShape";
  };
