import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		console.log('model gets here');
		return this.store.findAll('challenge');
	}
});
