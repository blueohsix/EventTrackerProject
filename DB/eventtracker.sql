-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventtracker
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventtracker` ;

-- -----------------------------------------------------
-- Schema eventtracker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventtracker` DEFAULT CHARACTER SET utf8 ;
USE `eventtracker` ;

-- -----------------------------------------------------
-- Table `site`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `site` ;

CREATE TABLE IF NOT EXISTS `site` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `site_name` VARCHAR(100) NULL,
  `site_number` VARCHAR(50) NULL,
  `site_owner` VARCHAR(100) NOT NULL,
  `tower_type` VARCHAR(45) NULL,
  `tower_height` DOUBLE NULL,
  `longitude` DOUBLE NULL,
  `latitude` DOUBLE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS user@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `site`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventtracker`;
INSERT INTO `site` (`id`, `site_name`, `site_number`, `site_owner`, `tower_type`, `tower_height`, `longitude`, `latitude`) VALUES (1, NULL, '1234096', 'INDOT', 'Self-Support', NULL, 39.702610, -86.107531);
INSERT INTO `site` (`id`, `site_name`, `site_number`, `site_owner`, `tower_type`, `tower_height`, `longitude`, `latitude`) VALUES (DEFAULT, NULL, '1234097', 'INDOT', NULL, NULL, 39.714386, -86.007756);
INSERT INTO `site` (`id`, `site_name`, `site_number`, `site_owner`, `tower_type`, `tower_height`, `longitude`, `latitude`) VALUES (DEFAULT, NULL, '1237375', 'INDOT', NULL, NULL, 39.695298, -86.187151);
INSERT INTO `site` (`id`, `site_name`, `site_number`, `site_owner`, `tower_type`, `tower_height`, `longitude`, `latitude`) VALUES (DEFAULT, NULL, '1234094', 'INDOT', NULL, NULL, 39.732172, -86.241875);
INSERT INTO `site` (`id`, `site_name`, `site_number`, `site_owner`, `tower_type`, `tower_height`, `longitude`, `latitude`) VALUES (DEFAULT, NULL, '1236775', 'INDOT', NULL, NULL, 39.930878, -86.157277);

COMMIT;

