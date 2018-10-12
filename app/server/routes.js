
var UsuarioController = require('./controllers/UsuarioController');

module.exports = function(app) {

	console.log(UsuarioController);

// main login page //
	app.get('/', UsuarioController.main_get);
	
	app.post('/', UsuarioController.main_post);
	
// logged-in user homepage //
	
	app.get('/home', UsuarioController.home_get);
	
	app.post('/home', UsuarioController.home_post);

	app.post('/logout', UsuarioController.logout_post)
	
// creating new accounts //
	
	app.get('/signup', UsuarioController.novo_get);
	
	app.post('/signup', UsuarioController.novo_post);

// password reset //

	app.post('/lost-password', UsuarioController.semsenha_post);

	app.get('/reset-password', UsuarioController.resetsenha_get);
	
	app.post('/reset-password', UsuarioController.resetsenha_post);
	
// view & delete accounts //
	
	app.get('/print', UsuarioController.print_get);
	
	app.post('/delete', UsuarioController.deletar_post);
	
	app.get('/reset', UsuarioController.reset_get);
	
	app.get('*', function(req, res) { res.render('404', { title: 'Page Not Found'}); });

};
