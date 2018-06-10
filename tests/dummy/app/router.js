import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bikes');
  this.route('cars');
  this.route('flights');
  this.route('buy');
  this.route('secret');
  this.route('test');
});

export default Router;
