-- CREATE DATABASE gtfo_db;
USE gtfo_db;
​
-- Removed id, changed 'items' into boolean values, added 'tries', 'finish time', and 'score' fields
CREATE TABLE game_data
(
player_name varchar(255) NOT NULL,
password varchar(255) NOT NULL,
scotch_win bool,
magnifier_lose bool,
key_win bool,
rope_lose bool,
phone_win bool,
candlestick_lose bool,
tries int,
finish_time int,
score int,
PRIMARY KEY (player_name)
);