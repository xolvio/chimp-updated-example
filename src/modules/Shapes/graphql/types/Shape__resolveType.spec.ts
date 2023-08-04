import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testShape__resolveType,
} from "~generated/graphql/helpers/Shape__resolveTypeSpecWrapper";

test("Shape__resolveType", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.ShapesRepository.findOne()).thenResolve()
  // const parent: ParentType = {}

  // const result = await testShape__resolveType(parent,  context);
});
