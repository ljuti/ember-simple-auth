import Authenticator from 'simple-auth-torii/authenticators/torii';

export default {
  name:   'simple-auth-torii',
  before: 'simple-auth',
  after:  'torii',
  initialize: function(registry, application) {
    var authenticator = Authenticator.create({ torii: torii });
    application.register('simple-auth-authenticator:torii', authenticator, { instantiate: false });
  },
  instanceInitializer: function(instance) {
    var torii         = instance.container.lookup('torii:main');
  }
};
