import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testSquareArea,
} from "~generated/graphql/helpers/SquareAreaSpecWrapper";

test("SquareArea", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.ShapesRepository.findOne()).thenResolve()
  // const parent: ParentType = {}

  // const result = await testSquareArea(parent,  context);
});
