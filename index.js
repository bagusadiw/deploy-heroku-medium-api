require("express-group-routes")
const Sequelize = require('sequelize');
const bodyParser = require('body-parser')
//instantiate express module
const express = require('express')
const cors = require('cors')
//use express in app variable
const app = express()
const port = 5000
// jwt middleware
const { authenticated } =require('./middleware')
//import controllers
const Categories = require('./controllers/categories')
const Users = require('./controllers/users')
const Articles = require('./controllers/articles')
const Comments = require('./controllers/comments')
const Authentication = require('./controllers/auth')

app.use(bodyParser.json())
app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.group("/api/v1", (router) => {
	// CATEGORY
	router.get('/categories', Categories.index) // 1
	router.get('/category/:id', Categories.show)
	router.post('/category', Categories.store) // 1
	// router.get('/category/:id/article', Categories.articleByCategory)
	router.put('/category/:id', authenticated, Categories.update)
	router.delete('/category/:id', authenticated, Categories.delete)
	
	
	// ARTICLE
	router.get('/articles', Articles.index) // 2
	router.get('/category/:id/articles', Articles.articleByCategory) // 3 5 8
	router.get('/user/:id/articles', Articles.articleByUser) // 9
	router.get('/article/:id', Articles.show) // 5
	router.post('/article', authenticated, Articles.store) // 4 9
	router.patch('/article/:id', authenticated, Articles.update) // 4 9
	router.delete('/article/:id', authenticated, Articles.delete) // 4 9

	// USER
	// get All
	router.get('/users', authenticated, Users.index)
	// get 1 user
	router.get('/user/:id', Users.show)
	// store user
	router.post('/users', Users.store)
	router.delete('/user/:id', authenticated, Users.delete)
	router.patch('/user/:id', authenticated, Users.update)

	// COMMENTS
	router.get('/article/:id/comments', Comments.index) // 6
	router.get('/comment/:id', Comments.show)
	router.post('/comments', authenticated, Comments.store)
	router.delete('/comment/:id', authenticated, Comments.delete)
	router.patch('/comment/:id', authenticated, Comments.update)

	// LOGIN AND REGISTER
	router.post('/login', Authentication.login)
	router.post('/register', Authentication.register)
})


//create the homepage route
app.get('/', (req, res) => {
    //res means, response, and it send string "Hello Express!" to the API
    res.send('Batch 13 Ganteng Semua')
})    

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))
