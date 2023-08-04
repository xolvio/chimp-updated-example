// Initialize your Controllers / Use Cases / Repositories here.
// This shape of this object will also be extended by your context.ts file to define a Gql Context

import { ShapesRepository } from "~app/modules/Shapes/repository/ShapesRepository";

export const root = {
  shapesRepository: new ShapesRepository(),
};

export type RootInterface = typeof root;
