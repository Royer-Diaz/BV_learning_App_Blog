import Ember from 'ember';

// export default Ember.Route.extend({
//   model: function(params) {
//     return this.store.find('comment', params.comment_id);
//   }
// });

export default Ember.Route.extend({
  model: function() {
    var post = this.modelFor('post');
    var comment = this.store.createRecord('comment');
    post.get('comments').then(function(comments) {
      comments.pushObject(comment);
    });
    return comment;
  }
});
