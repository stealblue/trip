desc board;
 
drop table `user`;
drop table board;
drop table reply;
drop table `like`;
drop table wishList;

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

ALTER TABLE trip.board ADD createAt TIMESTAMP DEFAULT now() NOT NULL;
ALTER TABLE trip.board ADD updateAt TIMESTAMP;
ALTER TABLE trip.board MODIFY COLUMN updateAt timestamp NULL;

ALTER TABLE trip.reply ADD createAt timestamp DEFAULT now() NOT NULL;
ALTER TABLE trip.reply ADD updateAt TIMESTAMP DEFAULT now() NULL;
ALTER TABLE trip.reply MODIFY COLUMN updateAt timestamp NULL;

ALTER TABLE trip.wishList ADD createAt timestamp DEFAULT now() NOT NULL;