import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  published: DS.attr('boolean'),
  user: DS.belongsTo('user'),
  comments: DS.hasMany('comment'),

  isValid: Ember.computed.notEmpty('title')
});
