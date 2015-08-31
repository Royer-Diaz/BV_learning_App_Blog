import Ember from "ember";

var NewPostController = {
  actions: {
    submit: function() {
      var newAuthor = this.store.createRecord('author', {
        name: this.get('author')
      });
      newAuthor.save();

      var newPost = this.store.createRecord('post', {
        author: newAuthor,
        title: this.get('title'),
        body: this.get('body')
      });
      newPost.save();
      this.transitionToRoute('posts');
    }
  }
};

export default Ember.ObjectController.extend(NewPostController);
