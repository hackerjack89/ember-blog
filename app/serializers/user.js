import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  attrs: {
    firstName: 'first_name',
    lastName: 'last_name'
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    payload = {users: payload};
    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
