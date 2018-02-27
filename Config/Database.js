module.exports = {
    connector: process.env.DATABASE_CONNECTOR || 'mongodb',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 27017,
    database: process.env.DATABASE_NAME || '',
    username: process.env.DATABASE_USER || '',
    password: process.env.DATABASE_PASSWORD || ''
};