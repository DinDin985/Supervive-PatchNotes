-- CreateTable
CREATE TABLE "Hunter" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "baseMaxHealth" INTEGER,
    "maxHealthPerlevel" DOUBLE PRECISION,
    "moveSpeed" INTEGER,
    "attackPowerRating" INTEGER,
    "toughness" INTEGER,

    CONSTRAINT "Hunter_pkey" PRIMARY KEY ("id")
);
