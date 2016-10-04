var Films = require('../src/models/films');
var Film = require('../src/models/film');

var FilmApi = function(app) {

var films = new Films();

  // GET
  app.get('/api/films', function(req, res){
    res.json({data: films});
  });

  // POST
  app.post('/api/films', function(req, res){
    // The "cat" in req.body.cat has to match the form id ??
    console.log(req.body)
    films.push(req.body.film);
    res.json({data: films});
  });

  // GET BY ID
  app.get('/api/films/:id', function(req, res){
    var foundFilm = req.params.id;
    res.json({data: films[foundFilm]});
  });

  // DELETE
  app.delete('/api/films/:id', function(req, res){
    var foundFilmId = req.params.id;
    films.splice(foundFilmId, 1);
    res.json({data: films});
  });

  // UPDATE
  app.put('/api/films/:id', function(req, res){
    films[req.params.id] = req.body.film;
    res.json({data: films});
  });


}

module.exports = FilmApi;