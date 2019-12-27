//import connection to db
const Articles = require('../models').articles
const Users = require('../models').users
const Comments = require('../models').comments

exports.index = (req, res) => {
    Comments.findAll({
        include:[
            {model: Articles, attributes: ['id', 'title'], as:"commentsArticle"} 
        ],
        where:{idArticle: req.params.id}
    })
    .then(comments=>res.send(comments))
    .catch(err => res.send(err))
}

exports.commentsByArticle = (req, res) => {
    Comments.findAll({
        include:[
            {model: Users, attributes: ['name', 'username', 'email'], as:"commentsAuthor"}, 
            {model: Articles, as:"commentsArticle"}
        ],
        where:{idArticle: req.params.id}
    })
    .then(comments=>res.send(comments))
    .catch(err => res.send(err))
}

exports.show = (req, res) => {
    Comments.findOne({
        include:[
            {model: Users, attributes: ['name', 'username', 'email'], as:"commentsAuthor"}, 
            {model: Categories, as:"articleCategories"},
            {model: Comments, as:"articleComments"}
        ], 
        where: {id: req.params.id}
    })
    .then(articles=>res.send(articles))
    .catch(err => res.send(err))
}

exports.store = (req, res) => {
    Comments.create(req.body)
    .then(articles=>{
    	res.send({
    		articles
    	})
    })
    .catch(err => res.send(err))
}

exports.update = (req, res) => {
    Articles.update(
    	req.body,
    	({where: {id: req.params.id}})
    )
    .then(articles=>{
    	res.send({
    		articles
    	})
    })
    .catch(err => res.send(err))
}

exports.delete = (req, res) => {
    Articles.destroy({
    	where: {id: req.params.id}
    })
    .then(articles=> {
    	res.send({
    		articles
    	})
    })
    .catch(err => res.send(err))
}