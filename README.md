# Timed Walk Backend

This web backend is designed to work with https://github.com/HosfordDotMe/timed-walk-frontend to ease the entry of timed walk test results into a full Electronic Medical Record system.

## Installation

A mongoDB database is required to function. This has been tested with https://www.mongodb.com/. Follow https://docs.atlas.mongodb.com/getting-started/ to setup then add the connection string to dev.js on your development environments or to the MONGO_URI env in production environments.

### Fix for "MongoError: cannot do raw queries on admin in atlas"

MongoDB Atlas has recently made a change with the default connection string they give you to add to your Node project.

If you copy this connection string into your project and only change the username and password, you will get this error back:

UnhandledPromiseRejectionWarning: MongoError: cannot do raw queries on admin in atlas

Instead of:

"mongodb+srv://p00gz:pwd@db.mongodb.net/admin?retryWrites=true&w=majority"

Change the admin collection to literally anything else:

"mongodb+srv://p00gz:pwd@db.mongodb.net/anything?retryWrites=true&w=majority",

This collection will be automatically created for you
