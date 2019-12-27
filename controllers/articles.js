//import connection to db
const Articles = require('../models').articles
const Users = require('../models').users
const Categories = require('../models').categories
const Comments = require('../models').comments

exports.index = (req, res) => {
    Articles.findAll({
        include:[
            {model: Users, attributes: ['name', 'username', 'email'], as:"articleAuthor"},  
            {model: Categories, as:"articleCategories"}
        ]
    })
    .then(articles=>res.send(articles))
    .catch(err => res.send(err))
}

exports.articleByCategory = (req, res) => {
    Articles.findAll({
        include:[
            {model: Users, attributes: ['name', 'username', 'email'], as:"articleAuthor"}, 
            {model: Categories, attributes: ['id','name'], as:"articleCategories"}
        ],
        where:{idCategory: req.params.id}
    })
    .then(articles=>res.send(articles))
    .catch(err => res.send(err))
}

exports.articleByUser = (req, res) => {
    Articles.findAll({
        include:[
            {model: Categories, as:"articleCategories"}
        ],
        where:{idUser: req.params.id}
    })
    .then(articles=>res.send(articles))
    .catch(err => res.send(err))
}

exports.show = (req, res) => {
    Articles.findOne({
      include:[
        {model: Users, attributes: ['name', 'username', 'email'], as:"articleAuthor"}, 
        {model: Categories, as:"articleCategories"},
        {model: Comments, as:"articleComments",
          include:[
            {model: Users, attributes: ['name', 'username', 'email'], as:"commentsAuthor"}, 
          ]
        }
      ], 
      where: {id: req.params.id}
    })
    .then(articles=>res.send(articles))
    .catch(err => res.send(err))
}

exports.store = (req, res) => {
    Articles.create(req.body)
    .then(articles=>{
    	res.send({
    		articles
        })
    })
    .catch(err => res.send(err))
}

exports.update = (req, res) => {
    Articles.update(req.body, { where: { id: req.params.id } })
    .then(articles=>{
    	res.send({
            message: "Article updated",
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
    		message: "Delete successful",
            articles
    	})
    })
    .catch(err => res.send(err))
}