import { type IncomingMessage, type ServerResponse } from "http";

import { RootInterface } from "./root";

export type GqlContext = AppContext;

export type AppContext = RootInterface & {
  headers: {
    [key: string]: string | string[] | undefined;
  };
  jwt?: string;
};

export const appContext =
  (root: RootInterface) =>
  async ({ req }: { req: IncomingMessage }): Promise<AppContext> => {
    return {
      ...root,
      headers: req.headers,
      // jwt: req.cookies.jwt,
    };
  };
