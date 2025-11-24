import * as sqliteSchema from "./schema.sqlite";
import * as pgSchema from "./schema.postgres";

export const submissions =
    process.env.NODE_ENV === "production"
        ? pgSchema.submissions
        : sqliteSchema.submissions;
