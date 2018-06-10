export function initialize(application) {
  application.inject('route', 'orchestrator', 'service:orchestrator');
}

export default {
  initialize
};
