-- CREATE DATABASE gtfo_db;
USE gtfo_db;

CREATE TABLE `game_data` (
  `player_name` VARCHAR(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  Scotch bool,
  Magnifier bool,
  `Key` bool,
  Rope bool,
  Phone bool,
  Candlestick bool,
  `tries` int,
  `finish_time` int,
  `score` int,
  PRIMARY KEY (`player_name`)
);
