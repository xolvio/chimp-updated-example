import td from "testdouble";
import {
  GqlContext,
  testGetShapes,
} from "~generated/graphql/helpers/getShapesQuerySpecWrapper";

test("getShapes", async () => {
  const context = td.object<GqlContext>();

  // td.when(context.ShapesRepository.findOne()).thenResolve()

  // const result = await testGetShapes( context);
});
