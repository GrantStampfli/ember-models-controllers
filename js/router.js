App.Router.map(function() {
	this.resource('about');
	this.resource('favorite', function() {
		this.route('new');
	});
});