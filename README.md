# Captura de Movimentos do Corpo

## Installation & Setup
1. Install [Node.js](https://nodejs.org/) & [MongoDB](https://www.mongodb.org/) if you haven't already.
2. Clone this repository and install its dependencies.
		
		> git clone https://github.com/LuanaFn/bodyMotion.git
		> cd bodyMotion
		> npm install
		
3. In a separate shell start the MongoDB daemon.

		> mongod

4. Copie o arquivo .env_example para um arquivo .env e adicione as configurações certas

5. From within the node-login directory, start the server.

		> node app
		
6. Open a browser window and navigate to: [http://localhost:3000](http://localhost:3000)

## Password Retrieval

To enable the password retrieval feature it is recommended that you create environment variables for your credentials instead of hard coding them into the [email dispatcher module](https://github.com/braitsch/node-login/blob/master/app/server/modules/email-dispatcher.js).

To do this on OSX you can simply add them to your .profile or .bashrc file.

	export EMAIL_HOST='smtp.gmail.com'
	export EMAIL_USER='your.email@gmail.com'
	export EMAIL_PASS='1234'

[![node-login](./readme.img/retrieve-password.jpg?raw=true)](https://nodejs-login.herokuapp.com)