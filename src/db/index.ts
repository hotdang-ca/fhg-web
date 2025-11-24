import { drizzle } from "drizzle-orm/better-sqlite3";
import { drizzle as drizzlePg } from "drizzle-orm/postgres-js";
import Database from "better-sqlite3";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

let db: any;

if (process.env.NODE_ENV === "production") {
    if (!connectionString) {
        throw new Error("DATABASE_URL is not set");
    }
    const client = postgres(connectionString, { prepare: false });
    db = drizzlePg(client, { schema });
} else {
    const sqlite = new Database("sqlite.db");
    db = drizzle(sqlite, { schema });
}

export { db };
