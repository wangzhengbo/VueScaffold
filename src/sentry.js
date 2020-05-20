import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
import pkg from '../package.json'

// https://docs.sentry.io/enriching-error-data/context/?platform=browser
export default Vue => {
  Sentry.init({
    release: 'VueScaffold@' + pkg.version,
    dsn: 'https://a41dc6e11b21440d9c665492f0dfeed1@sentry.io/1889499',
    integrations: [new Integrations.Vue({Vue, attachProps: true})]
  })
}
