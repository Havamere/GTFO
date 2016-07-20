### Seeds for GTFO Game database
 
 
### These players have finished the game and their score has been recorded and inserted into the database table
INSERT INTO game_data (player_name, password, item01, item02, item03, item04, item05, item06, tries, finish_time, score) 
	VALUES ('Dark Helmet', '12345', true, false, true, false, true, false, 1, 60, 60);
INSERT INTO game_data (player_name, password, item01, item02, item03, item04, item05, item06, tries, finish_time, score) 
	VALUES ('Leroy Jenkins', 'WOWislife', true, false, true, false, true, false, 5, 270, 1350);
INSERT INTO game_data (player_name, password, item01, item02, item03, item04, item05, item06, tries, finish_time, score) 
	VALUES ('Dan Druff', 'headandshoulders', true, false, true, false, true, false, 4, 125, 500);
INSERT INTO game_data (player_name, password, item01, item02, item03, item04, item05, item06, tries, finish_time, score) 
	VALUES ('Jim Imma', 'pancakes', true, false, true, false, true, false, 2, 240, 480);

### These players have not yet finished the game
INSERT INTO game_data (player_name, password, item01, item02, item03, item04, item05, item06, tries, finish_time, score) 
	VALUES ('Mr Meeseeks', 'lookatme', false, true, false, true, false, true, 1, 75, null);
INSERT INTO game_data (player_name, password, item01, item02, item03, item04, item05, item06, tries, finish_time, score) 
	VALUES ('Seymour Butz', 'lolz', false, true, true, false, true, false, 4, 210, null);
