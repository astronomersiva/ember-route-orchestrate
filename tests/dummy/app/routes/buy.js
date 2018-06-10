import OrchestratedRoute from 'ember-route-orchestrate/routes/orchestrated';

export default OrchestratedRoute.extend({
  setupController(controller) {
    this._super(...arguments);

    controller.setProperties({
      canShowDiscount: false,
      item: ''
    });
  },
  actions: {
    showDiscountBanner({ item }) {
      this.controller.setProperties({
        canShowDiscount: true,
        item
      });
    }
  }
});
