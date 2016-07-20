CREATE DATABASE gtfo_db;
USE gtfo_db;
​
-- CREATE TABLE `game_data`
-- (
-- `id` int NOT NULL AUTO_INCREMENT,
-- `player_name` varchar(255) NOT NULL,
-- `password` varchar(255) NOT NULL,
-- item01 varchar(255),
-- item02 varchar(255),
-- item03 varchar(255),
-- item04 varchar(255),
-- item05 varchar(255),
-- item06 varchar(255),
-- item07 varchar(255),
-- item08 varchar(255),
-- item09 varchar(255),
-- item10 varchar(255),
-- PRIMARY KEY (id)
-- );
\


-- Removed id, changed 'items' into boolean values, added 'tries', 'finish time', and 'score' fields
CREATE TABLE game_data
(
player_name varchar(255) NOT NULL,
password varchar(255) NOT NULL,
item01 bool,
item02 bool,
item03 bool,
item04 bool,
item05 bool,
item06 bool,
tries int,
finish_time int,
score int,
PRIMARY KEY (player_name)
);