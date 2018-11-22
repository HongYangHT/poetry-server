SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `users`;
CREATE TABLE users (
  `id` varchar(60) not null primary key,
  `name` varchar(60) not null,
  `password` varchar(60) not null,
  `nickname` varchar(20),
  `avatar` varchar(120),
  `gender` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)engine = myisam, charset=utf8;

DROP TABLE IF EXISTS `poetrys`;
CREATE TABLE poetrys (
  `id` int(11) not null primary key auto_increment,
  `poetry_author_id` int(11) default 0,
  `title` varchar(255) not null,
  `content` text not null,
  `yunlv_rule` text default null,
  `author` varchar(255) not null,
  `dynasty` char(1) not null,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) engine = myisam, charset=utf8;

DROP TABLE IF EXISTS `poetry_authors`;
CREATE TABLE poetry_authors (
  `id` int(11) not null primary key auto_increment,
  `name` varchar(255) not null,
  `intro` text default null,
  `dynasty` char(1) not null,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) engine = myisam, charset=utf8;

DROP TABLE IF EXISTS `poems_authors`;
CREATE TABLE poems_authors (
  `id` int(11) not null primary key auto_increment,
  `name` varchar(255) not null,
  `intro_l` text default null,
  `intro_s` text default null,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) engine = myisam, charset=utf8;

DROP TABLE IF EXISTS `poems`;
CREATE TABLE poems (
  `id` int(11) not null primary key auto_increment,
  `poems_author_id` int(11) default 0,
  `title` varchar(255) not null,
  `content` text not null,
  `author` varchar(255) not null,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) engine = myisam, charset=utf8;

DROP TABLE IF EXISTS `lunyus`;
CREATE TABLE lunyus (
  `id` int(11) not null primary key auto_increment,
  `chapter` varchar(255) not null,
  `content` text not null,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) engine = myisam, charset=utf8;

DROP TABLE IF EXISTS `shijings`;
CREATE TABLE shijings (
  `id` int(11) not null primary key auto_increment,
  `title` varchar(255) not null,
  `chapter` varchar(255) not null,
  `section` varchar(255) not null,
  `content` text not null,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) engine = myisam, charset=utf8;

SET FOREIGN_KEY_CHECKS = 1;
