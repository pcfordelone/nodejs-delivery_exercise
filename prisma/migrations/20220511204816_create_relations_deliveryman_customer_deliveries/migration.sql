/*
  Warnings:

  - Added the required column `customer_id` to the `deliveries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryman_id` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `deliveries` ADD COLUMN `customer_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryman_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_deliveryman_id_fkey` FOREIGN KEY (`deliveryman_id`) REFERENCES `deliverymans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
