/*
  Warnings:

  - You are about to drop the column `projectUuid` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `taskPontuation` on the `Task` table. All the data in the column will be lost.
  - Added the required column `projectUuid` to the `Sprint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskPoints` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sprint" DROP CONSTRAINT "Sprint_taskUuid_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_projectUuid_fkey";

-- AlterTable
ALTER TABLE "Sprint" ADD COLUMN     "projectUuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "projectUuid",
DROP COLUMN "taskPontuation",
ADD COLUMN     "sprintUuid" TEXT,
ADD COLUMN     "taskPoints" INTEGER NOT NULL,
ADD COLUMN     "userUuid" TEXT;

-- CreateTable
CREATE TABLE "_TaskToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TaskToUser_AB_unique" ON "_TaskToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TaskToUser_B_index" ON "_TaskToUser"("B");

-- AddForeignKey
ALTER TABLE "Sprint" ADD CONSTRAINT "Sprint_projectUuid_fkey" FOREIGN KEY ("projectUuid") REFERENCES "Project"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_sprintUuid_fkey" FOREIGN KEY ("sprintUuid") REFERENCES "Sprint"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskToUser" ADD CONSTRAINT "_TaskToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Task"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskToUser" ADD CONSTRAINT "_TaskToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
