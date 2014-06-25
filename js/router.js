App.Router.map(function() {
	this.route('about');
	this.route('edit', {path: '/edit/:id'});
	this.resource('favorite', function() {
		this.route('new');
	});
});

var displayArray = [
	{ id: 1, title: 'hello' },
	{ id: 2, title: 'this' },
	{ id: 3, title: 'is' },
	{ id: 4, title: 'an array' }
];

App.AboutRoute = Ember.Route.extend({
	model: function() {
		return displayArray;
	}
});

App.EditRoute = Ember.Route.extend({
	model: function(obj) {
		return displayArray[obj.id-1];
	}
});
