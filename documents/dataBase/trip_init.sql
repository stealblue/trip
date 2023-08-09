-- create database

create database trip;

-- create table

-- trip.`user` definition
CREATE TABLE `user` (
  `no` int NOT NULL AUTO_INCREMENT,
  `id` varchar(35) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `nick` varchar(10) NOT NULL,
  `phone` varchar(14) NOT NULL,
  `addr1` varchar(100) NOT NULL,
  `addr2` varchar(100) DEFAULT NULL,
  `zipcode` char(5) NOT NULL,
  `gender` tinyint(1) NOT NULL DEFAULT '1',
  `grade` int NOT NULL DEFAULT '1',
  `reg` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `img` varchar(255) DEFAULT NULL,
  `style` varchar(20) DEFAULT 'basic',
  PRIMARY KEY (`no`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `nick` (`nick`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- trip.board definition
CREATE TABLE `board` (
  `no` int NOT NULL AUTO_INCREMENT,
  `id` varchar(35) NOT NULL,
  `img` varchar(50) DEFAULT NULL,
  `title` varchar(30) NOT NULL,
  `content` longtext NOT NULL,
  `like` int NOT NULL DEFAULT '0',
  `cnt` int NOT NULL DEFAULT '0',
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT NULL,
  `grade` int NOT NULL DEFAULT '1',
  `done` tinyint NOT NULL DEFAULT '1',
  `type` varchar(10) NOT NULL DEFAULT '여행후기',
  PRIMARY KEY (`no`),
  KEY `board_ibfk_1` (`id`),
  CONSTRAINT `board_ibfk_1` FOREIGN KEY (`id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=173 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- trip.`like` definition
CREATE TABLE `like` (
  `no` int NOT NULL AUTO_INCREMENT,
  `id` varchar(35) NOT NULL,
  `bno` int NOT NULL,
  PRIMARY KEY (`no`),
  KEY `like_ibfk_1` (`id`),
  KEY `like_ibfk_2` (`bno`),
  CONSTRAINT `like_ibfk_1` FOREIGN KEY (`id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `like_ibfk_2` FOREIGN KEY (`bno`) REFERENCES `board` (`no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=600 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- trip.reply definition
CREATE TABLE `reply` (
  `no` int NOT NULL AUTO_INCREMENT,
  `bno` int NOT NULL,
  `uno` int NOT NULL,
  `content` longtext NOT NULL,
  `ref` int NOT NULL DEFAULT '0',
  `re_step` int NOT NULL DEFAULT '0',
  `re_level` int NOT NULL DEFAULT '0',
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`no`),
  KEY `bno` (`bno`),
  KEY `reply_ibfk_1` (`uno`),
  CONSTRAINT `reply_ibfk_1` FOREIGN KEY (`uno`) REFERENCES `user` (`no`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reply_ibfk_2` FOREIGN KEY (`bno`) REFERENCES `board` (`no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=143 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- trip.ticket definition
CREATE TABLE `ticket` (
  `no` int NOT NULL AUTO_INCREMENT,
  `category` char(2) NOT NULL,
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `uno` int NOT NULL,
  `price` int NOT NULL,
  `startplace` varchar(20) NOT NULL,
  `endplace` varchar(20) NOT NULL,
  `startDate` timestamp NOT NULL,
  `endDate` timestamp NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `seat` varchar(10) NOT NULL,
  `ticketCode` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '결제티켓',
  PRIMARY KEY (`no`),
  KEY `uno` (`uno`),
  CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`uno`) REFERENCES `user` (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- trip.wishList definition
CREATE TABLE `wishList` (
  `no` int NOT NULL AUTO_INCREMENT,
  `title` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `contentId` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `routeId` varchar(100) DEFAULT NULL,
  `contentTypeId` int NOT NULL,
  PRIMARY KEY (`no`),
  KEY `wishList_ibfk_1` (`id`),
  CONSTRAINT `wishList_ibfk_1` FOREIGN KEY (`id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=757 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- trip.busTerminal definition
CREATE TABLE `busTerminal` (
  `no` int NOT NULL AUTO_INCREMENT,
  `cityCode` int NOT NULL,
  `cityName` varchar(30) NOT NULL,
  `terminalId` varchar(30) NOT NULL,
  `terminalName` varchar(30) NOT NULL,
  PRIMARY KEY (`no`),
  UNIQUE KEY `terminalId` (`terminalId`)
) ENGINE=InnoDB AUTO_INCREMENT=2118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- trip.busType definition
CREATE TABLE `busType` (
  `no` int NOT NULL AUTO_INCREMENT,
  `busCode` char(3) NOT NULL,
  `busName` varchar(15) NOT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- trip.trainStation definition
CREATE TABLE `trainStation` (
  `no` int NOT NULL AUTO_INCREMENT,
  `cityName` varchar(5) NOT NULL,
  `cityCode` int NOT NULL,
  `stationId` varchar(15) NOT NULL,
  `stationName` varchar(10) NOT NULL,
  PRIMARY KEY (`no`),
  UNIQUE KEY `stationId` (`stationId`)
) ENGINE=InnoDB AUTO_INCREMENT=316 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- trip.trainType definition
CREATE TABLE `trainType` (
  `no` int NOT NULL AUTO_INCREMENT,
  `trainCode` char(2) NOT NULL,
  `trainName` varchar(15) NOT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- trip.theme definition
CREATE TABLE `theme` (
  `no` int NOT NULL AUTO_INCREMENT,
  `addr1` varchar(40) DEFAULT NULL,
  `addr2` varchar(40) DEFAULT NULL,
  `areacode` int NOT NULL,
  `booktour` tinyint DEFAULT '0',
  `cat1` char(3) NOT NULL,
  `cat2` char(5) NOT NULL,
  `cat3` char(9) NOT NULL,
  `contentid` int NOT NULL,
  `contenttypeid` int NOT NULL,
  `createdtime` varchar(20) NOT NULL,
  `firstimage` longtext,
  `firstimage2` longtext,
  `cpyrhtDivCd` varchar(20) DEFAULT NULL,
  `mapx` varchar(20) DEFAULT NULL,
  `mapy` varchar(20) DEFAULT NULL,
  `mlevel` int DEFAULT NULL,
  `modifiedtime` varchar(20) DEFAULT NULL,
  `sigungucode` int DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `title` varchar(20) NOT NULL,
  `theme` varchar(20) DEFAULT NULL,
  `cnt` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- create trigger

-- like.postLikeCnt2
CREATE DEFINER=`root`@`localhost` TRIGGER `postLikeCnt2` BEFORE DELETE ON `like` FOR EACH ROW BEGIN 
    update board
    set `like` = (`like`-1)
    where no = OLD.bno;
END;

-- like.postLikeCnt
CREATE DEFINER=`root`@`localhost` TRIGGER `postLikeCnt` AFTER INSERT ON `like` FOR EACH ROW BEGIN 
    update board
    set `like` = (select count(*) from `like` where bno=new.bno)
    where no = new.bno;
END;







