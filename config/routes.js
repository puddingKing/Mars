var Mars = require('../app/controllers/mars');

module.exports = function(app){
	app.get('/',Mars.index);
	
}