//keys.js - figure out what set of creds to return
if (process.env.NODE_ENV === "production") {
	// we are in production - return the prod set of keys
	module.exports = require("./prod");
} else {
	// we are in deployment - return the dev keys!!!
	module.exports = require("./dev");

}


//mongodb+srv://luca:OF3B3YbbBRaduo0T@cluster0.asvjd.mongodb.net/emaily-prod?retryWrites=true&w=majority


//mongodb+srv://luca:KFFmzhr3xYpjYBEp@cluster0.asvjd.mongodb.net/emaily-prod?retryWrites=true&w=majority
//mongodb+srv://luca:<password>      @cluster0.asvjd.mongodb.net/<dbname>   ?retryWrites=true&w=majority

//306171521321-fueadjh6n156ttisbe98nue2ok83fg75.apps.googleusercontent.com