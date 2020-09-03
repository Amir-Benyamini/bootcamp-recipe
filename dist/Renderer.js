class Renderer{


	render(data){

		$('#result-container').empty()

			const source = $('#recipe-template').html();
			const template = Handlebars.compile(source)
			const newHTML = template({recipe: data})
				$('#result-container').append(newHTML)
	}
}

const rend = new Renderer()
