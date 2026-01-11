CREATE TABLE "colors" (
  "id" integer PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "music" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "type_of_work" varchar,
  "instrumental" bool,
  "composition_year" integer,
  "composer" varchar,
  "sample" blob
);
