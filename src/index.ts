import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import express from 'express'

import { ApolloServer } from 'apollo-server-express'
import { TestResolver } from './resolvers/TestResolver'

const main = async () => {
  const schema = await buildSchema({
    resolvers: [TestResolver],
  })

  const apolloServer = new ApolloServer({ schema })

  const app = express()

  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log('Server started on http://localhost:4000/graphql')
  })
}

main()
