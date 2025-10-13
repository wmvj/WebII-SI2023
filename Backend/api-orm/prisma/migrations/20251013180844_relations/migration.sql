/*
  Warnings:

  - You are about to drop the column `Content` on the `questions` table. All the data in the column will be lost.
  - Added the required column `content` to the `questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "questions" DROP COLUMN "Content",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
