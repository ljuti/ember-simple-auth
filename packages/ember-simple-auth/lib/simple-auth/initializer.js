import Configuration from './configuration';
import getGlobalConfig from './utils/get-global-config';
import setup from './setup';

export default {
  name:       'simple-auth',
  initialize: function(registry, application) {
    application.register("simple-auth");
  },
  instanceInitializer: function(instance) {
    var config = getGlobalConfig('simple-auth');
    Configuration.load(instance.container, config);
    setup(instance.container, application);
  }
};
