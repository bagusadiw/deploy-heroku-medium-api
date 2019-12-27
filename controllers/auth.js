const jwt = require('jsonwebtoken')
const models = require('../models')
const Users = models.users

exports.login = (req, res) => {
	//check if email and pass match in db tbl user
	const email = req.body.email;
	const password = req.body.password; // in real case must be encrypted
	Users.findOne({
		where: {
			email,
			password
		}
	})
	.then(users => {
		if (users) {
			const token = jwt.sign({ userId: users.id }, 'shiroyawn');
			res.send({
				users, 
				token
			})
		} else {
			res.send({
				error: true,
				message: "wrong email or password"
			});
		}
	})
	.catch(err => res.send(err))
}

exports.register = (req, res) => {
    Users.create(req.body)
    .then(users=>{
    	const token = jwt.sign({ userId: users.id }, 'littlebig');
    	res.send({
    		user : { name: users.name, username: users.username, email: users.email },
    		token
    	})
    })
    .catch(err => res.send(err))
}