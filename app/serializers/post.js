import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    user: 'user_id'
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    payload = {posts: payload};
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  /*
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType){
    payload.posts.forEach((post) => {
      post.user = post.user_id
      delete post['user_id']
    });
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType){
    payload.posts.user = payload.posts.user_id;
    delete payload.posts['user_id']
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
  */

});
