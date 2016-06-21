var round = require("./round");
var roundsData = require("../data/roundsData");
var backGround = require("./galaxyBg");

var rounds = {
	"init":function(ctx,width,height){
		var colors = roundsData.colors;
		for (var i = 0; i < roundsData.roundNum; i++) {
			var deg = 360*Math.random()*Math.PI/180;
			var tempNum = Math.random()*colors.length;
			tempNum = Math.floor(tempNum);
			var distance = Math.random()*(roundsData.R-roundsData.r) + roundsData.r;
			round.born(ctx,distance,0,roundsData.roundR,colors[tempNum],deg);  //给出点的坐标位置
			var speed = 1/distance*(Math.random()*(roundsData.roundsHighSpeed-roundsData.roundsLowSpeed)+roundsData.roundsLowSpeed);
			var newRound = new Object();
			newRound.distance = distance;
			newRound.color = colors[tempNum];
			newRound.deg = deg;
			newRound.speed = speed;
			roundsData.rounds.push(newRound);
		}
	},
	"move":function(ctx,width,height){
		var r = roundsData.roundR;
		for (var i = 0; i < roundsData.rounds.length; i++) {
			roundsData.rounds[i].deg = roundsData.rounds[i].deg + roundsData.rounds[i].speed;
			round.born(ctx,roundsData.rounds[i].distance,0,r,roundsData.rounds[i].color,roundsData.rounds[i].deg);
		}
	}
}
module.exports = rounds;