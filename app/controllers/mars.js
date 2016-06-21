exports.index = function(req,res){
	// var _user = req.session._user;
	res.render('index',{
		title:'首页'
	})
}