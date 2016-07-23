var winArray = ["Scotch","Key","Phone"];

var otherArray = ["Magnifier","Rope","Candlestick"];

//game play data 
var gameData = [
	{name: "Bedroom", roomClass: "bedroom", frameClass: "frameIMG", text: 'you see me', button1: winArray[1], button2: otherArray[1], path: "/game"},
	{name: "Library", roomClass: "library", frameClass: "frameIMG", text: 'you see me', button1: winArray[2], button2: otherArray[2], path: "/game"},
	{name: "Maid's Room", roomClass: "maidsRoom", frameClass: "frameIMG", text: 'you see me', button1: otherArray[0], button2: winArray[0], path: "/game"},
];

module.exports = gameData;

