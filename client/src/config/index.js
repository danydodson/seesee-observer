export default {
  api: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_BASE_URL_API
        : process.env.REACT_APP_BASE_URL_LOCAL,
  },
}
