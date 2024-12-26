-- CreateTable
CREATE TABLE `edifices` (
    `id` VARCHAR(191) NOT NULL,
    `buildingName` VARCHAR(50) NOT NULL,
    `buildingDesc` TEXT NULL,
    `buildingAddress` TEXT NULL,
    `buildingStatus` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `floors` (
    `id` VARCHAR(191) NOT NULL,
    `floorName` VARCHAR(50) NOT NULL,
    `floorDesc` TEXT NULL,
    `floorStatus` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rooms` (
    `id` VARCHAR(191) NOT NULL,
    `edificeId` VARCHAR(191) NOT NULL,
    `floorId` VARCHAR(191) NOT NULL,
    `roomName` VARCHAR(50) NOT NULL,
    `roomDesc` TEXT NULL,
    `roomStatus` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    INDEX `rooms_edificeId_idx`(`edificeId`),
    INDEX `rooms_floorId_idx`(`floorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `rooms` ADD CONSTRAINT `rooms_floorId_fkey` FOREIGN KEY (`floorId`) REFERENCES `floors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rooms` ADD CONSTRAINT `rooms_edificeId_fkey` FOREIGN KEY (`edificeId`) REFERENCES `edifices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
