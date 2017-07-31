import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  attrs: {
    firstName: 'first_name',
    lastName: 'last_name'
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    payload = {users: payload};
    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
