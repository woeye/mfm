import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" RENAME COLUMN "sizes_og_url" TO "sizes_large_url";
  ALTER TABLE "media" RENAME COLUMN "sizes_og_width" TO "sizes_large_width";
  ALTER TABLE "media" RENAME COLUMN "sizes_og_height" TO "sizes_large_height";
  ALTER TABLE "media" RENAME COLUMN "sizes_og_mime_type" TO "sizes_large_mime_type";
  ALTER TABLE "media" RENAME COLUMN "sizes_og_filesize" TO "sizes_large_filesize";
  ALTER TABLE "media" RENAME COLUMN "sizes_og_filename" TO "sizes_large_filename";
  DROP INDEX "media_sizes_og_sizes_og_filename_idx";
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" RENAME COLUMN "sizes_large_url" TO "sizes_og_url";
  ALTER TABLE "media" RENAME COLUMN "sizes_large_width" TO "sizes_og_width";
  ALTER TABLE "media" RENAME COLUMN "sizes_large_height" TO "sizes_og_height";
  ALTER TABLE "media" RENAME COLUMN "sizes_large_mime_type" TO "sizes_og_mime_type";
  ALTER TABLE "media" RENAME COLUMN "sizes_large_filesize" TO "sizes_og_filesize";
  ALTER TABLE "media" RENAME COLUMN "sizes_large_filename" TO "sizes_og_filename";
  DROP INDEX "media_sizes_large_sizes_large_filename_idx";
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");`)
}
