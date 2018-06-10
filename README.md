# ember-route-orchestrate

ember-route-orchestrate allows you to schedule actions to run after a hook in another route.

## Installation

* `npm install ember-route-orchestrate`

## Usage

**Please note that this was developed for an experimental idea that I have been working on. This addon has very limited genuine use cases that do not go against DDAU.**

* Extend the target route from OrchestratedRoute. 
```javascript
import OrchestratedRoute from 'ember-route-orchestrate/routes/orchestrated';

export default OrchestratedRoute.extend({
});
```

* This addon injects an `orchestrator` service with a method `callAction` into all routes. Schedule the action on the target route from the source route using `callAction`.
```javascript
  this.get('orchestrator').callAction('actionName', {
      hook: 'anyOfEmberRouteHooks',
      route: 'targetRouteName',
      // action `actionName` will be called on 3 route visits.
      // if times is not provided, default value of 1 will be applied.
      // you can also set the value of times as 'forever'.
      times: 3,
      // optional params for the action.
      params: { hello: 'world' }
    });
```

## License

MIT - [Sivasubramanyam A](https://sivasubramanyam.me)
