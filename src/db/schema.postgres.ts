import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";

export const submissions = pgTable("submissions", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email"),
    phone: text("phone"),
    preferredTime: text("preferred_time"),
    message: text("message"),
    createdAt: timestamp("created_at").defaultNow(),
});
