// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'classifieds'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'classifieds'
    }},

  production: {
    client: 'pg',
    connections: {
        database: process.env.DATABASE_URL
    }},

};
