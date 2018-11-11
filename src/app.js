import express from 'express'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'

import createDataloaders from 'lambdas/api/dataloaders'
import schema from 'lambdas/api/graphql/schema'

function createApp() {
  const app = express()

  app.use(cors())

  const loaders = createDataloaders()

  app.use(graphqlHTTP({
    schema,
    graphiql: true,
    context: { loaders },
  }))

  return app
}

export default createApp
