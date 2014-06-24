App.Router.map(function() {
	this.resource('about');
	this.resource('favorite', function() {
		this.route('new');
	});
});

var displayArray = ['hello', 'this', 'is', 'an', 'array'];

App.AboutRoute = Ember.Route.extend({
	model: function() {
		return [{
			title: displayArray
		}];
	}
});

// App.AboutRoute = Ember.Route.extend({
// 	redirect: function() {
// 		this.transitionTo('about');
// 	}
// });