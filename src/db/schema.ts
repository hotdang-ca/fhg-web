import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const submissions = sqliteTable("submissions", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    email: text("email"),
    phone: text("phone"),
    preferredTime: text("preferred_time"),
    message: text("message"),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});
