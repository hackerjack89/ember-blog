import Ember from 'ember';

export default Ember.Route.extend({

  commentsVisible: false,

  model(params){
    return this.store.findRecord('post', params.id)
  },

  actions: {
    showComments(){
      this.transitionTo('posts.show.comments');
      this.controller.set('commentsVisible', true);
    },

    hideComments(){
      this.transitionTo('posts.show');
      this.controller.set('commentsVisible', false);
    }
  }
});
