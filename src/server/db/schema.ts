import { pgTable, serial, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core";

/**
 * Contact Messages Table
 * Stores inbound contact form submissions.
 * All fields are typed — no raw SQL concatenation anywhere.
 */
export const contactMessages = pgTable("contact_messages", {
  id:        serial("id").primaryKey(),

  /* Validated & sanitized before insert — see contactAction.ts */
  name:      varchar("name",    { length: 100  }).notNull(),
  email:     varchar("email",   { length: 254  }).notNull(),  // RFC 5321 max
  message:   text("message").notNull(),

  ipAddress: varchar("ip_address", { length: 45 }),           // IPv6 max length
  isRead:    boolean("is_read").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/**
 * (Optional) Projects Table — for DB-driven project management.
 * Currently, projects are served from portfolioData.ts (static).
 * Migrate here when you want CMS-style editing.
 */
export const projects = pgTable("projects", {
  id:          serial("id").primaryKey(),
  title:       varchar("title",       { length: 150 }).notNull(),
  description: text("description").notNull(),
  tags:        text("tags").array().notNull().default([]),
  liveUrl:     varchar("live_url",    { length: 500 }),
  repoUrl:     varchar("repo_url",    { length: 500 }),
  thumbnail:   varchar("thumbnail",   { length: 500 }),
  featured:    boolean("featured").default(false).notNull(),
  createdAt:   timestamp("created_at").defaultNow().notNull(),
});
