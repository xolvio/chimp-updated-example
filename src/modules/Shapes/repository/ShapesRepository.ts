import Loki, { Collection } from "lokijs";

type DbShape = {
  id: string;
  name: string;
};

type DbCircle = DbShape & {
  radius: number;
};

type DbSquare = DbShape & {
  sideLength: number;
};

export class ShapesRepository {
  private db: Collection<DbCircle | DbSquare>;

  constructor() {
    const db = new Loki("Example");
    this.db = db.addCollection<DbCircle | DbSquare>("shapes");
    // Inserting a Circle
    this.db.insert({
      id: "1",
      name: "Circle 1",
      radius: 5,
    });

    // Inserting a Square
    this.db.insert({
      id: "2",
      name: "Square 1",
      sideLength: 5,
    });

    // Inserting a Circle
    this.db.insert({
      id: "3",
      name: "Circle 3",
      radius: 53,
    });

    // Inserting a Square
    this.db.insert({
      id: "4",
      name: "Square 4",
      sideLength: 51,
    });
  }

  findOne(id: string): DbCircle | DbSquare | undefined {
    return this.db.findOne({ id });
  }

  findByName(name: string): DbCircle | DbSquare | undefined {
    return this.db.findOne({ name });
  }

  findAll(): (DbCircle | DbSquare)[] {
    return this.db.find({});
  }
}
