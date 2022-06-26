const dotEnv = require('dotenv')

/** ENVS */
const env = process.env.APP_ENV ? process.env.APP_ENV : 'dev';
const { parsed } = dotEnv.config({
  path: `${__dirname}/env/.env.${ env.toLowerCase() }`,
});
/** END ENVS */

module.exports = {
  ...parsed.NEXT_REACT_BASEPATH && { assetPrefix: parsed.NEXT_REACT_BASEPATH },
  ...parsed.BASE_PATH && { basePath: parsed.BASE_PATH },
  env: {
    APP_ENV: env,
    ...parsed,
  },
  reactStrictMode: true,
  trailingSlash: true,
}
