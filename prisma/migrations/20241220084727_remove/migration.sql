/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_PostCategories` DROP FOREIGN KEY `_PostCategories_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PostCategories` DROP FOREIGN KEY `_PostCategories_B_fkey`;

-- AlterTable
ALTER TABLE `Post` ADD COLUMN `categories` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Category`;

-- DropTable
DROP TABLE `_PostCategories`;
