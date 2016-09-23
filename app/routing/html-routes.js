// Routes
// =============================================================

// First display the survey.html page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'survey.html'));
});

app.use(function(req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});