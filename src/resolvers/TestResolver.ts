import { Resolver, Query } from 'type-graphql'

@Resolver()
export class TestResolver {
  @Query(() => String)
  async test() {
    return 'Hello World'
  }
}
