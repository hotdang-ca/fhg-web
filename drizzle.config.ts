import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    schema:
        process.env.NODE_ENV === "production"
            ? "./src/db/schema.postgres.ts"
            : "./src/db/schema.sqlite.ts",
    out: "./drizzle",
    dialect: process.env.NODE_ENV === "production" ? "postgresql" : "sqlite",
    dbCredentials:
        process.env.NODE_ENV === "production"
            ? {
                url: process.env.DATABASE_URL!,
            }
            : {
                url: "sqlite.db",
            },
});
