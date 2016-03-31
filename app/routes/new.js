import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      var category = params.category;
      category.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return category.save();
      });
      this.transitionTo('index');
    },
  }
});
