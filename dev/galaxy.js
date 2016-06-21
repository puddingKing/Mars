var backGround = require("../modules/galaxy/galaxyBg");
var rounds = require("../modules/galaxy/rounds");
var galaxy = document.getElementById("galaxy");
var login = document.getElementById("login");
var register = document.getElementById("register");
var mask = document.getElementById("mask");
var loginPop = document.getElementById("loginPop");
var registerPop = document.getElementById("registerPop");

var ctx = galaxy.getContext("2d");

(function(){
	window.addEventListener("resize",resizeCanvas,false);
	backGround.bg(ctx,galaxy.width,galaxy.height);  //初始化背景
	rounds.init(ctx,galaxy.width,galaxy.height);   //初始化若干圆点
	anim();  //动画

	function anim(){
		ctx.clearRect(0,0,galaxy.width,galaxy.height);
		backGround.bg(ctx,galaxy.width,galaxy.height);
		rounds.move(ctx,galaxy.width,galaxy.height);

		window.requestAnimationFrame(arguments.callee);
	}
	login.addEventListener("click",loginBegin,false);
	register.addEventListener("click",registerBegin,false);

	function resizeCanvas(){
		w = galaxy.width = window.innerWidth;
		h = galaxy.height = window.innerHeight;
	}

	function loginBegin(){
		mask.style.display = "block";
		loginPop.style.display = "block";
	}
	function registerBegin(){
		mask.style.display = "block";
		registerPop.style.display = "block";
	}
})();

