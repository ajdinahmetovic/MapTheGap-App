const local = {};

const dev = {

}


const production = {};

const config =
  process.env.REACT_APP_BUILD_TARGET === 'PRODUCTION'
    ? production
    : process.env.REACT_APP_BUILD_TARGET === 'DEVELOPMENT'
    ? dev
    : local;
export default {
    defaultLng = 'en',
    ...config
}