import Route from '@ember/routing/route';

export default Route.reopen({
  orchestrateActionForHook(hookName) {
    let allActions = this.get('orchestrator.toOrchestrate');
    let currentRouteName = this.get('routeName');
    let actionsForRoute = allActions.get(currentRouteName);

    if (actionsForRoute) {
      let actionForHook = actionsForRoute[hookName];
      if (actionForHook) {
        // Get a list of actions defined in the route
        let curretRouteActions = this.actions;
        let { action, times, params = {} } = actionForHook;
        let actionToOrchestrate = curretRouteActions[action];

        if (actionToOrchestrate) {
          if (times) {
            actionToOrchestrate = actionToOrchestrate.bind(this);
            actionToOrchestrate(params);

            // decrement the counter
            if (times !== 'forever') {
              let options = {};
              options[hookName] = {
                action,
                params,
                times: times - 1,
              };

              allActions.set(currentRouteName, options);
            }
          }
        }
      }
    }
  },

  beforeModel() {
    this._super(...arguments);
    this.orchestrateActionForHook('beforeModel');
  },

  model() {
    this._super(...arguments);
    this.orchestrateActionForHook('model');
  },
  
  afterModel() {
    this._super(...arguments);
    this.orchestrateActionForHook('afterModel');
  },
  
  serialize() {
    this._super(...arguments);
    this.orchestrateActionForHook('serialize');
  },
  
  redirect() {
    this._super(...arguments);
    this.orchestrateActionForHook('redirect');
  },
  
  activate() {
    this._super(...arguments);
    this.orchestrateActionForHook('activate');
  },
  
  setupController() {
    this._super(...arguments);
    this.orchestrateActionForHook('setupController');
  },
  
  renderTemplate() {
    this._super(...arguments);
    this.orchestrateActionForHook('renderTemplate');
  },

  resetController() {
    this._super(...arguments);
    this.orchestrateActionForHook('resetController');
  },

  deactivate() {
    this._super(...arguments);
    this.orchestrateActionForHook('deactivate');
  },

  actions: {
    willTransition() {
      this._super(...arguments);
      this.orchestrateActionForHook('willTransition');
    },

    didTransition() {
      this._super(...arguments);
      this.orchestrateActionForHook('didTransition');
    }
  }
});
