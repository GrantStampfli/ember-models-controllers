App.Router.map(function() {
	this.resource('about');
	this.resource('favorites', function() {
		this.route('new');
	});
});