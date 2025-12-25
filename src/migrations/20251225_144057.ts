import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" ADD COLUMN "generate_slug" boolean DEFAULT true;
  ALTER TABLE "_posts_v" ADD COLUMN "version_generate_slug" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "generate_slug" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_generate_slug" boolean DEFAULT true;
  ALTER TABLE "posts" DROP COLUMN "slug_lock";
  ALTER TABLE "_posts_v" DROP COLUMN "version_slug_lock";
  ALTER TABLE "pages" DROP COLUMN "slug_lock";
  ALTER TABLE "_pages_v" DROP COLUMN "version_slug_lock";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" ADD COLUMN "slug_lock" boolean DEFAULT true;
  ALTER TABLE "_posts_v" ADD COLUMN "version_slug_lock" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "slug_lock" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_slug_lock" boolean DEFAULT true;
  ALTER TABLE "posts" DROP COLUMN "generate_slug";
  ALTER TABLE "_posts_v" DROP COLUMN "version_generate_slug";
  ALTER TABLE "pages" DROP COLUMN "generate_slug";
  ALTER TABLE "_pages_v" DROP COLUMN "version_generate_slug";`)
}
