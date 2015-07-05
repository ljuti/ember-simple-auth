import Configuration from './configuration';
import getGlobalConfig from 'simple-auth/utils/get-global-config';
import Authenticator from 'simple-auth-devise/authenticators/devise';
import Authorizer from 'simple-auth-devise/authorizers/devise';

export default {
  name:       'simple-auth-devise',
  before:     'simple-auth',
  initialize: function(registry, application) {
    application.register('simple-auth-authorizer:devise', Authorizer);
    application.register('simple-auth-authenticator:devise', Authenticator);
  },
  instanceInitializer: function(instance) {
    var config = getGlobalConfig('simple-auth-devise');
    Configuration.load(instance.container, config);
  }
};
