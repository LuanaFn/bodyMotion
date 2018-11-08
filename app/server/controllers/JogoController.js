
var CT = require('./../modules/country-list');
var AM = require('./../modules/account-manager');
var EM = require('./../modules/email-dispatcher');

module.exports = {

    // pagina inicial do jogo //
	jogar_get: function(req, res) {
		if (req.session.user == null){
	// if user is not logged-in redirect back to login page //
			res.redirect('/');
		}	else{
			res.render('jogo/index', {
				title : 'Jogar',
				countries : CT,
				udata : req.session.user
			});
		}
	},
};
