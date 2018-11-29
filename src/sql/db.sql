SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `users`;
CREATE TABLE users (
  `id` varchar(60) NOT NULL PRIMARY KEY,
  `name` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `nickname` varchar(20),
  `avatar` varchar(120),
  `gender` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT="用户表";

DROP TABLE IF EXISTS `poetrys`;
CREATE TABLE poetrys (
  `id` int(11) NOT NULL PRIMARY KEY auto_increment,
  `poetry_author_id` int(11) DEFAULT 0,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `yunlv_rule` text DEFAULT null,
  `author` varchar(255) NOT NULL,
  `dynasty` char(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT="诗";

DROP TABLE IF EXISTS `poetry_authors`;
CREATE TABLE poetry_authors (
  `id` int(11) NOT NULL PRIMARY KEY auto_increment,
  `name` varchar(255) NOT NULL,
  `intro` text DEFAULT NULL,
  `dynasty` char(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT="诗人";

DROP TABLE IF EXISTS `poems_authors`;
CREATE TABLE poems_authors (
  `id` int(11) NOT NULL PRIMARY KEY auto_increment,
  `name` varchar(255) NOT NULL,
  `intro_l` text DEFAULT null,
  `intro_s` text DEFAULT null,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT="词人";

DROP TABLE IF EXISTS `poems`;
CREATE TABLE poems (
  `id` int(11) NOT NULL PRIMARY KEY auto_increment,
  `poems_author_id` int(11) DEFAULT 0,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT="词";

DROP TABLE IF EXISTS `lunyus`;
CREATE TABLE lunyus (
  `id` int(11) NOT NULL PRIMARY KEY auto_increment,
  `chapter` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT="论语";

DROP TABLE IF EXISTS `shijings`;
CREATE TABLE shijings (
  `id` int(11) NOT NULL PRIMARY KEY auto_increment,
  `title` varchar(255) NOT NULL,
  `chapter` varchar(255) NOT NULL,
  `section` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT="诗经";

SET FOREIGN_KEY_CHECKS = 1;
