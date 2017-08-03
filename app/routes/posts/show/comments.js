import Ember from 'ember';

export default Ember.Route.extend({

  addingComment: false,

  model(params, transition){
    let id = transition.params["posts.show"].id
    return this.store.query('comment', {post_id: id})
  },

  actions: {
    addComment(){
      console.log("clicked add comment");
      this.transitionTo('posts.show.comments.new')
      this.controller.set('addingComment', true)
    }
  }
});
