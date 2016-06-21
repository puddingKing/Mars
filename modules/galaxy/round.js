var round = {
	"born":function(ctx,x,y,r,color,deg){
		ctx.save();
		ctx.fillStyle = color;
		ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2);
		ctx.rotate(deg);
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fill();
		ctx.restore();
	}
}
module.exports = round;