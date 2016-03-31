import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addPost() {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        body: this.get('body'),
        link: this.get('link'),
        screenshot: this.get('screenshot')
      };
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
