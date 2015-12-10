var routes = {
	'/': function(request,response){
		response.render('index');
	},
	'/song/edit': function(request,response){
		response.render('edit');
	},
	'/song/update': function(request,response, song){
		if (request.query.verse1 !== undefined) {
		    song.verse1 = request.query.verse1;
		    song.verse2 = request.query.verse2;
		    song.verse3 = request.query.verse3;
	  	}

	  	response.redirect('/');
	},
	'/song/:num': function(request, response, song){
		var num = request.params.num;
		response.render('song', {
    		pageInfo: song.verse1,
    		nextPage: num+'/2',
  		});
	},
	'/song/1/2': function(request, response, song){
		response.render('song', {
    		pageInfo: song.verse2,
    		nextPage: '2/3',
  		});
	},
	'/song/1/2/3': function(request,response, song){
		 response.render('song', {
    		pageInfo: song.verse3,
    		nextPage: '/song/1',
  		});
	}
}

module.exports = routes;