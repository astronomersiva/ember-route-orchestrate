import Route from '@ember/routing/route';

export default Route.extend({
  setupController() {
    this._super(...arguments);

    this.get('orchestrator').callAction('showDiscountBanner', {
      hook: 'didTransition',
      route: 'buy',
      times: 1,
      // times: 'forever'
      params: { item: 'bike' }
    });
  }
});
