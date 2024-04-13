import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const blog = pgTable('blog', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title').notNull(),
  content: varchar('content').notNull(),
  publishedAt: timestamp('published_at').defaultNow().notNull(),
});

export type BlogType = InferSelectModel<typeof blog>;
