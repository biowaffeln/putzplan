/*
 SQLite does not support "Changing existing column type" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually
*/
ALTER TABLE chore_records ADD COLUMN __completed_at integer DEFAULT 0 NOT NULL;
--> statement-breakpoint
UPDATE chore_records SET __completed_at = completed_at;
--> statement-breakpoint
ALTER TABLE chore_records DROP COLUMN completed_at;
--> statement-breakpoint
ALTER TABLE chore_records RENAME COLUMN __completed_at TO completed_at;