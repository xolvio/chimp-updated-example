import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import cors from "cors";
import http from "http";

import { schema } from "~generated/graphql/schema";
import { AppContext, appContext } from "~app/context";
import { root } from "./root";
import express from "express";
import { json } from "body-parser";

import { expressMiddleware } from "@apollo/server/express4";
// export const createApp = async () => {
//   const app = express();
//
//   app.use([cookieParser()]);
//

//
//   const apollo = new ApolloServer({
//     schema,
//     context: appContext(root),
//   });
//
//   await apollo.start(); // Add this line
//
//   return app;
// };

const apollo = new ApolloServer<AppContext>({
  schema,
});

apollo.start().then(async () => {
  const app = express();

  const httpServer = http.createServer(app);

  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(corsOptions),
    json(),
    // A named context function is required if you are not
    // using ApolloServer<BaseContext>
    expressMiddleware(apollo, {
      context: appContext(root),
    }),
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve),
  );
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
});
