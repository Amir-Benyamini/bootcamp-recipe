const Rend = new Renderer()
$('#searchBtn').on('click', function(){
	let userInp = $('#userInp').val()

$.get(`/recipes/${userInp}`, function(data){

	Rend.render(data)
})
})

$('#result-container').on('click','img', function(){
	let firstIng = $(this).closest('#placeholder').find('li').html()
	alert(firstIng)
})