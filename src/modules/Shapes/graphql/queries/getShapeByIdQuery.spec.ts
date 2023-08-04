import td from "testdouble";
import {
  GqlContext,
  QueryGetShapeByIdArgs,
  testGetShapeById,
} from "~generated/graphql/helpers/getShapeByIdQuerySpecWrapper";

test("getShapeById", async () => {
  const context = td.object<GqlContext>();

  // td.when(context.ShapesRepository.findOne()).thenResolve()

  // const variables: QueryGetShapeByIdArgs = {}

  // const result = await testGetShapeById(variables, context);
});
