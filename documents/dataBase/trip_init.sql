create database trip;

use trip;

create table `user` (
	`no` int auto_increment primary key,
	id varchar(35) not null unique,
	pwd varchar(255) not null,
	nick varchar(10) not null unique,
	phone varchar(14) not null unique,
	addr1 varchar(100) not null,
	addr2 varchar(100),
	zipcode char(5) not null,
	gender tinyint(1) not null default 1,
	grade int not null default 1,
	reg timestamp default now()
);

create table board (
	`no` int auto_increment primary key,
	id varchar(35) not null,
	img varchar(50),
	title varchar(30) not null,
	content longtext not null,
	`like` int not null default 0,
	cnt int not null default 0,
	foreign key(id) references user(id)
);

create table reply(
	`no` int auto_increment primary key,
	bno int not null,
	id varchar(35) not null,
	content longtext not null,
	`ref` int not null default 0,
	`re_step` int not null default 0,
	`re_level` int not null default 0,
	foreign key(id) references user(id),
	foreign key(bno) references board(no)
);

create table `like` (
	`no` int auto_increment primary key,
	id varchar(35) not null,
	bno int not null,
	foreign key(id) references user(id),
	foreign key(bno) references board(no)
);

create table wishList(
no int auto_increment primary key,
contentId varchar(10) not null,
id varchar(35) not null,
	foreign key(id) references user(id)
);

create table trainStation (
	no int auto_increment primary key,
	cityName varchar(5) not null,
	cityCode int not null,
	stationId varchar(15) not null unique,
	stationName varchar(10) not null
);

create table trainType (
	no int auto_increment primary key,
	trainCode char(2) not null,
	trainName varchar(15) not null
);

create table busTerminal (
	no int auto_increment primary key,
	cityCode int not null,
	cityName varchar(30) not null,
	terminalId varchar(30) not null unique,
	terminalName varchar(30) not null
);

create table busType(
	no int auto_increment primary key,
	busCode char(3) not null,
	busName varchar(15) not null
);
drop table busType ;
ALTER TABLE trip.board ADD createAt TIMESTAMP DEFAULT now() NOT NULL;
ALTER TABLE trip.board ADD updateAt TIMESTAMP;
ALTER TABLE trip.board MODIFY COLUMN updateAt timestamp NULL;

ALTER TABLE trip.reply ADD createAt timestamp DEFAULT now() NOT NULL;
ALTER TABLE trip.reply ADD updateAt TIMESTAMP DEFAULT now() NULL;
ALTER TABLE trip.reply MODIFY COLUMN updateAt timestamp NULL;

ALTER TABLE trip.wishList ADD createAt timestamp DEFAULT now() NOT NULL;
ALTER TABLE trip.wishList CHANGE contentId contentid varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL;
ALTER TABLE trip.wishList CHANGE contentid contentId varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL;
ALTER TABLE trip.wishList ADD title varchar(40) NOT NULL;
ALTER TABLE trip.wishList MODIFY COLUMN contentId varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL;

ALTER TABLE trip.busTerminal MODIFY COLUMN terminalName varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL;
