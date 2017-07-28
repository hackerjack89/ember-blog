import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  published: DS.attr('boolean'),
  user_id: DS.attr('number'),
});
