$('#searchBtn').on('click', function(){
	let userInp = $('#userInp').val()

$.get(`/recipes/${userInp}`, function(data){
	// $('#result-container').empty()

	// const source = $('#recipe-template').html();
	// const template = Handlebars.compile(source)
	// const newHTML = template({recipe: data})
	// 		$('#result-container').append(newHTML)
	
})
})