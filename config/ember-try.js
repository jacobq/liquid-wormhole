'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = async function() {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-1.13',
        bower: {
          dependencies: {
            'ember': '~1.13.0'
          },
          resolutions: {
            'ember': '~1.13.0'
          }
        },
        npm: {
          devDependencies: {
            'ember-source': null
          }
        }
      },
      {
        name: 'ember-lts-2.4',
        bower: {
          dependencies: {
            'ember': 'components/ember#lts-2-4'
          },
          npm: {
            devDependencies: {
              'ember-source': null
            }
          }
        }
      },
      {
        name: 'ember-lts-2.8',
        bower: {
          dependencies: {
            'ember': 'components/ember#lts-2-8'
          },
          npm: {
            devDependencies: {
              'ember-source': null
            }
          }
        }
      },
      {
        name: 'ember-lts-2.12',
        npm: {
          devDependencies: {
            'ember-source': '~2.12.0'
          }
        }
      },
      {
        name: 'ember-lts-2.16',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true })
        },
        npm: {
          devDependencies: {
            '@ember/jquery': '^0.5.1',
            'ember-source': '~2.16.0'
          }
        }
      },
      {
        name: 'ember-lts-2.18',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true })
        },
        npm: {
          devDependencies: {
            '@ember/jquery': '^0.5.1',
            'ember-source': '~2.18.0'
          }
        }
      },
      {
        name: 'ember-lts-3.4',
        npm: {
          devDependencies: {
            'ember-source': '~3.4.0'
          }
        }
      },
      {
        name: 'ember-lts-3.16',
        npm: {
          devDependencies: {
            'ember-source': '~3.16.0'
          }
        }
      },
      {
        name: 'ember-lts-3.20',
        npm: {
          devDependencies: {
            'ember-source': '~3.20.5'
          }
        }
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release')
          }
        }
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta')
          }
        }
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary')
          }
        }
      },
      {
        name: 'ember-default-with-jquery',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'jquery-integration': true
          })
        },
        npm: {
          devDependencies: {
            '@ember/jquery': '^1.1.0'
          }
        }
      },
      {
        name: 'ember-classic',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'application-template-wrapper': true,
            'default-async-observers': false,
            'template-only-glimmer-components': false
          })
        },
        npm: {
          ember: {
            edition: 'classic'
          }
        }
      }
    ]
  };
};
