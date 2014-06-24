App = Ember.Application.create();

App.Router.map(function() {
  this.resource('photos');
});

App.PhotosRoute = Ember.Route.extend({
  model: function() {
    return [{
      title: "Tomster",
      url: "http://emberjs.com/images/about/ember-productivity-sm.png"
    }, {
      title: "Eiffel Tower",
      url: "http://emberjs.com/images/about/ember-structure-sm.png"
    }];
  }
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('photos');
  }
});