import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    post: 'post_id',
    createdAt: 'created_at'
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    payload = {comments: payload};
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});
