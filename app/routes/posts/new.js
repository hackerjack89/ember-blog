import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('post');
  },

  setupController(controller, model){
    this._super(controller, model);

    controller.set('title', 'Create a new Post');
    controller.set('buttonLabel', "Create Post");
  },

  renderTemplate(){
    this.render('posts/form');
  },

  actions: {
    savePost(newPost){
      newPost.save().then(() => this.transitionTo('posts'));
    },

    willTransition(){
      this.controller.get('model').rollbackAttributes();
    }
  }
});
