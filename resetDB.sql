SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `course`;
DROP TABLE IF EXISTS `application`;

CREATE TABLE `application` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `nom` VARCHAR(70) NOT NULL,
    `num_version` VARCHAR(10) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `course` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `date_creation` DATE NOT NULL,
    `application_id` INT NOT NULL,
    FOREIGN KEY (`application_id`) REFERENCES `application`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `application` (nom, num_version) VALUES
	 ('Appli chrono Seiko', "2.5.0"),
     ('Appli chrono Casio', "1.6");
INSERT INTO `course` (nom, date_creation, application_id) VALUES
	 ('10km Run in Lyon', '2010-05-01', 1),
	 ('Urban Trail de Lyon', '2002-01-01', 1),
     ('Course du quartier', '2003-01-01', 1),
     ('Courir en rose', '2018-01-01', 2);