-- CREATE DATABASE gtfo_db;
USE gtfo_db;
​
-- Removed id, changed 'items' into boolean values, added 'tries', 'finish time', and 'score' fields
CREATE TABLE game_data
(
player_name varchar(255) NOT NULL,
password varchar(255) NOT NULL,
ice_pick bool,
pistol bool,
rope bool,
wrench bool,
mallet bool,
book bool,
tries int,
finish_time int,
score int,
PRIMARY KEY (player_name)
);