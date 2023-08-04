import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { schema } from "~generated/graphql/schema";
import { AppContext, appContext } from "~app/context";
import { root } from "./root";

// export const createApp = async () => {
//   const app = express();
//
//   app.use([cookieParser()]);
//
//   const corsOptions = {
//     origin: "http://localhost:3000",
//     credentials: true,
//   };
//
//   const apollo = new ApolloServer({
//     schema,
//     context: appContext(root),
//   });
//
//   await apollo.start(); // Add this line
//   apollo.applyMiddleware({ app, cors: corsOptions });
//
//   return app;
// };

const server = new ApolloServer<AppContext>({
  schema,
});

const port = process.env.PORT || 4000;

startStandaloneServer<AppContext>(server, {
  context: appContext(root),
  listen: { port: 4000 },
}).then(() => {});
