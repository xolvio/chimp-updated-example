import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testShapeOrUnknown__resolveType,
} from "~generated/graphql/helpers/ShapeOrUnknown__resolveTypeSpecWrapper";

test("ShapeOrUnknown__resolveType", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.ShapesRepository.findOne()).thenResolve()
  // const parent: ParentType = {}

  // const result = await testShapeOrUnknown__resolveType(parent,  context);
});
