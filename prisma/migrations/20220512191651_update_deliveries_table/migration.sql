/*
  Warnings:

  - Added the required column `item_name` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `deliveries_deliveryman_id_fkey`;

-- AlterTable
ALTER TABLE `deliveries` ADD COLUMN `item_name` VARCHAR(191) NOT NULL,
    MODIFY `ended_at` DATETIME(3) NULL,
    MODIFY `deliveryman_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_deliveryman_id_fkey` FOREIGN KEY (`deliveryman_id`) REFERENCES `deliverymans`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
