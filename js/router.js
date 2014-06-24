App.Router.map(function() {
	this.resource('about', function () {
		this.route('edit', {path: '/:id/edit'});
	});
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

// App.AboutRoute = Ember.Route.extend({
// 	redirect: function() {
// 		this.transitionTo('about');
// 	}
// });