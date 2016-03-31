import Ember from 'ember';

export default Ember.Component.extend({
  categoryLinksDisplay: false,
  actions: {
    categoryLinksToggle: function() {
      this.toggleProperty('categoryLinksDisplay');
    }
  }
});
