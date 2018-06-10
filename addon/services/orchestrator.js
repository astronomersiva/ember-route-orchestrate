import Service from '@ember/service';
import EmberObject, { set } from '@ember/object';

export default Service.extend({
  toOrchestrate: EmberObject.create({}),

  callAction(action, options) {
    let {
      hook,
      route,
      times = 1,
      params = {}
    } = options;

    let toOrchestrate = this.get('toOrchestrate');
    let actionHashForRoute = {};
    actionHashForRoute[hook] = { action, times, params };
    set(toOrchestrate, route, actionHashForRoute);
  }
});
