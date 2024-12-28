/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_categoryId_fkey`;

-- DropIndex
DROP INDEX `Post_categoryId_title_slug_idx` ON `Post`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `categoryId`,
    DROP COLUMN `slug`,
    ADD COLUMN `category` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Category`;
