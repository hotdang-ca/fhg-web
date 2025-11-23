import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    schema: "./src/db/schema.ts",
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
