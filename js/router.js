App.Router.map(function() {
	this.resource('about', function () {
		this.route('edit');
	});
	this.resource('favorite', function() {
		this.route('new');
	});
});

var displayArray = [
	{ title: 'hello' },
	{ title: 'this' },
	{ title: 'is' },
	{ title: 'an array' }
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