SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `poetrys`;
CREATE TABLE poetrys (
  id int(11) not null primary key auto_increment,
  author_id int(11) default 0,
  title varchar(255) not null,
  content text not null,
  yunlv_rule text default null,
  author varchar(255) not null,
  dynasty char(1) not null
) engine = myisam, charset=utf8;

DROP TABLE IF EXISTS `poetry_authors`;
CREATE TABLE poetry_authors (
  id int(11) not null primary key auto_increment,
  name varchar(255) not null,
  intro text default null,
  dynasty char(1) not null
) engine = myisam, charset=utf8;

DROP TABLE IF EXISTS `poems_authors`;
CREATE TABLE poems_authors (
  id int(11) not null primary key auto_increment,
  name varchar(255) not null,
  intro_l text default null,
  intro_s text default null
) engine = myisam, charset=utf8;

DROP TABLE IF EXISTS `poems`;
CREATE TABLE poems (
  id int(11) not null primary key auto_increment,
  author_id int(11) default 0,
  title varchar(255) not null,
  content text not null,
  author varchar(255) not null
) engine = myisam, charset=utf8;

DROP TABLE IF EXISTS `lunyus`;
CREATE TABLE lunyus (
  id int(11) not null primary key auto_increment,
  chapter varchar(255) not null,
  content text not null
) engine = myisam, charset=utf8;

DROP TABLE IF EXISTS `shijings`;
CREATE TABLE shijings (
  id int(11) not null primary key auto_increment,
  title varchar(255) not null,
  chapter varchar(255) not null,
  section varchar(255) not null,
  content text not null
) engine = myisam, charset=utf8;

SET FOREIGN_KEY_CHECKS = 1;
