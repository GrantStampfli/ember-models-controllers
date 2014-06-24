window.App = Ember.Application.create();

App.Person = Ember.Object.extend({
	init: function() {
		var name = this.get('name');
		console.log(name + ', reporting for duty!');
	},
	say: function(thing) {
		alert(thing + ' person ' + this.get('name'));
	}
});

var person = App.Person.create({
	name: 'Tian'
});
person.say('Hello');

person.set('name', "Grant");
console.log(person.name);