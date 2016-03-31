import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost () {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        date: this.get('date') ? this.get('date') : "",
        body: this.get('body') ? this.get('body') : "",
        link: this.get('link') ? this.get('link') : "",
        screenshot: this.get('screenshot') ? this.get('screenshot') : "",
        category: this.get('category')
      };
      console.log(params.category);
      this.sendAction('savePost', params);
    }
  }
});
