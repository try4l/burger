CREATE DATABASE IF NOT EXISTS `burgers_db`;
USE `burgers_db`;
CREATE TABLE IF NOT EXISTS `burgers`(
`id` INTEGER(10) NOT NULL primary key auto_increment,
`burger_name` VARCHAR(100) NOT NULL,
`devoured` BOOL DEFAULT false,
`date` TIMESTAMP
);