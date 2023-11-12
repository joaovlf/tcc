-- DropForeignKey
ALTER TABLE "Sprint" DROP CONSTRAINT "Sprint_projectUuid_fkey";

-- AlterTable
ALTER TABLE "Sprint" ALTER COLUMN "taskUuid" DROP NOT NULL,
ALTER COLUMN "projectUuid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Sprint" ADD CONSTRAINT "Sprint_projectUuid_fkey" FOREIGN KEY ("projectUuid") REFERENCES "Project"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
