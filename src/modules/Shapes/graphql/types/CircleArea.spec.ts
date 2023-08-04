import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testCircleArea,
} from "~generated/graphql/helpers/CircleAreaSpecWrapper";

test("CircleArea", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.ShapesRepository.findOne()).thenResolve()
  // const parent: ParentType = {}

  // const result = await testCircleArea(parent,  context);
});
