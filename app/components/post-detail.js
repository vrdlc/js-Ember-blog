import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if(confirm("Does this not qualify as the 'best' post you've seen on Craig's House?")) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
