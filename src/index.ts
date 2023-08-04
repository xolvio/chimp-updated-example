import { createApp } from "./createApp";

const port = process.env.PORT || 4000;
createApp()
  .then((app) =>
    app.listen({ port }, () =>
      console.log(`🚀 Server ready at http://localhost:${port}/graphql`),
    ),
  )
  .catch((error) => console.error("Error starting server:", error));
