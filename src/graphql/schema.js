import { makeExecutableSchema } from 'graphql-tools'
import types from 'lambdas/api/graphql/types'

// Query and Mutation Resolvers
import QueryResolvers from 'lambdas/api/graphql/resolvers/queries'
import MutationResolvers from 'lambdas/api/graphql/resolvers/mutations'


export default makeExecutableSchema({
  typeDefs: types,
  resolvers: {
    Query: QueryResolvers,
    Mutation: MutationResolvers,
  }
})
