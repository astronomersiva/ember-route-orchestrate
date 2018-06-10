import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    haha() {
      console.log(this.controller); // eslint-disable-line
    }
  }
});
