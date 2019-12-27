//import connection to db
const Users = require('../models').users

exports.index = (req, res) => {
    Users.findAll().then(users=>res.send(users))
}

exports.show = (req, res) => {
    Users.findOne({
        where: {id: req.params.id}
    }).then(users=>res.send(users)).catch(err => res.send(err))
}

exports.store = (req, res) => {
    Users.create(req.body)
    .then(users=>{
    	res.send({
    		users
    	})
    }).catch(err => res.send(err))
}

exports.update = (req, res) => {
    Users.update(
    	req.body,
    	({where: {id: req.params.id}})
    ).then(users=>{
    	res.send({
    		users
    	})
    }).catch(err => res.send(err))
}

exports.delete = (req, res) => {
    Users.destroy({
    	where: {id: req.params.id}
    }).then(users=> {
    	res.send({
    		users
    	})
    }).catch(err => res.send(err))
}