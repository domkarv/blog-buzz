CREATE TABLE IF NOT EXISTS "blog" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar NOT NULL,
	"content" varchar NOT NULL,
	"published_at" timestamp DEFAULT now() NOT NULL
);
