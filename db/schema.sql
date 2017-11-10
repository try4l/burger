DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;
DROP TABLE IF EXISTS `burgers`;
CREATE TABLE `burgers`(
`item_id` INTEGER(10) NOT NULL primary key auto_increment,
`burger_name` VARCHAR(100) NOT NULL,
`devoured` BOOL DEFAULT false,
`date` TIMESTAMP
);