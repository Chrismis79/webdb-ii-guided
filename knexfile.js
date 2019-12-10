// Update with your config settings.
//this file contains instructions knex needs to connect to database.
//Each key on the exported obj has the config for a database env (dev, testing, production, etc)

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, //only needed when using sqlite3
    connection: {
      filename: './data/produce.db3'  //where is the database file?
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
