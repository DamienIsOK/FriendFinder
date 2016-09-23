var friends = [{
	name: 'Michael',
	photo: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
	scores: [5,1,4,4,5,1,2,5,4,1]
}, {
	name: 'Tito',
	photo: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
	scores: scores: [5,1,4,4,5,1,2,5,4,1]
}]

app.get('/api/friends', function(req, res) {
	res.json(friends);
});

app.post('/api/friends:results?', function(req, res) {
	var results = req.params.results;
	
})