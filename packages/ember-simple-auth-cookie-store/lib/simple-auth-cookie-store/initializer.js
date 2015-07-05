import Configuration from './configuration';
import getGlobalConfig from 'simple-auth/utils/get-global-config';
import Store from 'simple-auth-cookie-store/stores/cookie';

export default {
  name:       'simple-auth-cookie-store',
  before:     'simple-auth',
  initialize: function(registry, application) {
    application.register('simple-auth-session-store:cookie', Store);
  },
  instanceInitializer: function(instance) {
    var config = getGlobalConfig('simple-auth-cookie-store');
    Configuration.load(instance.container, config);
  }
};
