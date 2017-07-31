import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.id)
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', "Edit post");
    controller.set('buttonLabel', "Update post");
  },

  renderTemplate(){
    this.render('posts/form');
  },

  actions: {
    savePost(editedPost){
      editedPost.save().then(() => this.transitionTo('posts'));
    }
  },

  willTransition(transition) {
    let model = this.controller.get('model');

    if(model.get('hasDirtyAttributes')) {
      let confirmation = confirm('your changes havent saved yet, would you like to save it ?');

      if(confirmation){
        model.rollbackAttributes();
      }else{
        transition.abort();
      }
    }
  }

});
