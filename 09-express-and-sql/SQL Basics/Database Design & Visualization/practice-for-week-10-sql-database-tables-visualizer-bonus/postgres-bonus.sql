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

CREATE TABLE "occupations" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "value" integer,
  "significance" bool,
  "cuoc_code" integer
);

CREATE TABLE "timezones" (
  "id" integer PRIMARY KEY,
  "country_codes" varchar[],
  "tz_identifier" varchar,
  "embedded_comments" text,
  "type" varchar,
  "utc_offset" varchar,
  "tz_abbreviations" varchar
);

CREATE TABLE "comments" (
  "id" integer PRIMARY KEY,
  "date" date,
  "comments" varchar(120),
  "user_id" integer
);
