import Ember from 'ember';

export default Ember.Route.extend({

  model(params, transition){
    let post_id = transition.params['posts.show'].id;
    let post = this.store.peekRecord('post', post_id);
    return this.store.createRecord('comment', {post: post});
  },

  actions: {
    saveComment(newComment){
      console.log('clicked save comment');
      console.log(newComment.post);
      debugger;
      post = newComment.post;
      post.pushObject(newComment);
      newComment.save().then(() => {
        this.transitionTo('posts.show.comments');
      });
    }
  }
});
