/*
SQLyog Trial v13.1.2 (64 bit)
MySQL - 5.1.41 : Database - restful_banking
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`restful_banking` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `restful_banking`;

/*Table structure for table `account` */

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `account_id` int(11) NOT NULL,
  `account_name` varchar(200) DEFAULT NULL,
  `balance` int(11) DEFAULT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `account_transaction` */

DROP TABLE IF EXISTS `account_transaction`;

CREATE TABLE `account_transaction` (
  `transc_id` int(10) NOT NULL AUTO_INCREMENT,
  `transc_date` datetime DEFAULT NULL,
  `transc_code` int(3) DEFAULT NULL,
  `account_id` int(11) DEFAULT NULL,
  `teller_id` varchar(10) DEFAULT NULL,
  `nominal` int(11) DEFAULT NULL,
  `note` text,
  PRIMARY KEY (`transc_id`),
  KEY `transc_code` (`transc_code`),
  KEY `account_id` (`account_id`),
  KEY `teller_id` (`teller_id`),
  CONSTRAINT `account_transaction_ibfk_1` FOREIGN KEY (`transc_code`) REFERENCES `transaction_code` (`transc_code`),
  CONSTRAINT `account_transaction_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`),
  CONSTRAINT `account_transaction_ibfk_3` FOREIGN KEY (`teller_id`) REFERENCES `users` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Table structure for table `bank_emp` */

DROP TABLE IF EXISTS `bank_emp`;

CREATE TABLE `bank_emp` (
  `emp_id` varchar(10) DEFAULT NULL,
  `emp_name` varchar(50) DEFAULT NULL,
  `emp_position` varchar(5) DEFAULT NULL,
  KEY `emp_id` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `detil_transaction` */

DROP TABLE IF EXISTS `detil_transaction`;

CREATE TABLE `detil_transaction` (
  `transc_id` int(5) DEFAULT NULL,
  `machine_number` varchar(20) DEFAULT NULL,
  `machine_company` varchar(50) DEFAULT NULL,
  `machine_address` varchar(50) DEFAULT NULL,
  `account_number` int(10) DEFAULT NULL,
  `account_num_name` varchar(50) DEFAULT NULL,
  KEY `transc_id` (`transc_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Table structure for table `transaction_code` */

DROP TABLE IF EXISTS `transaction_code`;

CREATE TABLE `transaction_code` (
  `transc_code` int(3) NOT NULL,
  `transc_name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`transc_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `username` varchar(10) NOT NULL,
  `passwd` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`username`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`username`) REFERENCES `bank_emp` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/* Trigger structure for table `account_transaction` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `after_insert_transaction` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `after_insert_transaction` AFTER INSERT ON `account_transaction` FOR EACH ROW 
BEGIN
	IF NEW.transc_code = 1
	THEN
	UPDATE account SET balance = balance-NEW.nominal WHERE account_id =  NEW.account_id;
	ELSE
	IF NEW.transc_code = 2 OR NEW.transc_code = 3
	THEN
	UPDATE account SET balance = balance+NEW.nominal WHERE account_id = NEW.account_id;
	END IF;
	END IF;
END */$$


DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
