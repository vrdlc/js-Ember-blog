import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  body: DS.attr(),
  link: DS.attr(),
  screenshot: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
});
