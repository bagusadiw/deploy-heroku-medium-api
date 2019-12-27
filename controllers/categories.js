//import connection to db
const Categories = require('../models').categories
const Articles = require('../models').articles

exports.index = (req, res) => {
    Categories.findAll().then(categories=>res.send(categories))
}

exports.articleByCategory = (req, res) => {
    Categories.findAll({
        include:[ 
            {model: Articles, as:"articleByCategory"}
        ],
        where:{id: req.params.id}
    }).then(categories=>res.send(categories)).catch(err => res.send(err))
}

exports.show = (req, res) => {
    Categories.findOne({
        where: {id: req.params.id}
    })
    .then(categories=>res.send(categories))
    .catch(err => res.send(err))
}

exports.store = (req, res) => {
    Categories.create(req.body)
    .then(categories=>{
    	res.send({
    		categories
    	})
    })
    .catch(err => res.send(err))
}

exports.update = (req, res) => {
    Categories.update(
    	req.body,
    	({where: {id: req.params.id}})
    )
    .then(categories=>{
    	res.send({
    		categories
    	})
    })
    .catch(err => res.send(err))
}

exports.delete = (req, res) => {
    Categories.destroy({
    	where: {id: req.params.id}
    })
    .then(categories=> {
    	res.send({
    		categories
    	})
    })
    .catch(err => res.send(err))
}