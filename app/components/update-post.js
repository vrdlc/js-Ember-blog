import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        body: this.get('body'),
        link: this.get('link'),
        screenshot: this.get('screenshot'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
  });
