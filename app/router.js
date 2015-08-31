import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.resource('library', function(){
     this.resource('display-lib');
  });
  this.route('tracks');
  this.route('login');
  this.route('about');
  this.route('contact');
  this.resource('posts', function() {
     this.resource('new-post', { path: '/new-post'});
  });
  this.resource('post', { path: '/:post_id' }, function() {
     this.resource('new-comment');
  });

  this.route('support');
});

export default Router;
