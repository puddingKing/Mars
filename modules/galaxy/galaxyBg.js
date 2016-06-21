var roundsData = require("../data/roundsData");

var backGround = {
	"bg":function(ctx,width,height){
		ctx.clearRect(0,0,width,height);
		ctx.save();
		ctx.fillStyle = "#eaeaea";
		ctx.fillRect(0,0,width,height);
		ctx.strokeStyle = "#BFBFBF";
		ctx.beginPath();
		ctx.arc(width/2,height/2,roundsData.r-50,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.font="60px Sriracha";
		ctx.fillStyle = roundsData.colors[0];
		var textH = height/2;
		ctx.fillText('L',width/2-110,textH);
		ctx.fillStyle = roundsData.colors[1];
		ctx.fillText('A',width/2-70,textH);
		ctx.fillStyle = roundsData.colors[2];
		ctx.fillText('K',width/2-30,textH);
		ctx.fillStyle = roundsData.colors[3];
		ctx.fillText('E',width/2+10,textH);
		ctx.fillStyle = roundsData.colors[4];
		ctx.fillText('J',width/2+50,textH);
		ctx.fillStyle = roundsData.colors[5];
		ctx.fillText('S',width/2+90,textH);
		ctx.restore();
	},
	"loginBg":function(ctx,width,height){
		ctx.clearRect(0,0,width,height);
		ctx.save();
		ctx.fillStyle = "#eaeaea";
		ctx.fillRect(0,0,width,height);
		ctx.strokeStyle = "#BFBFBF";
		ctx.beginPath();
		ctx.arc(width/2,height/2,roundsData.r-50,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
	}
}
module.exports = backGround;