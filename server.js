const express = require('express')
const app = express()
const path = require ('path')
const urllib = require('urllib')
const Handlebars = require('handlebars');

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))




app.get('/sanity', function(req, res){
	res.send("OK")
})

app.get('/recipes/:ingredient', function(req, res){
			let ingredient = req.params.ingredient

			urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(error, data, response){
				const dataString = data.toString()
				const dataObject = JSON.parse(dataString)
				const recipes = dataObject.results
					let recipesFiltered = recipes.map(r => {return { ingredients: r.ingredients, title: r.title, thumbnail: r.thumbnail, href: r.href}})

					res.send(recipesFiltered)

	
			})

})

const port = 8080
app.listen(port, function(){
	console.log(`Server is listening at ${port} `)
})