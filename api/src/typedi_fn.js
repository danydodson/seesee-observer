import { Service } from 'typedi'
import { Container } from 'typedi'

const PostRepository = Service(() => ({
  getName() {
    return 'hello from post repository'
  },
}))

const PostManager = Service(() => ({
  getId() {
    return 'some post id'
  },
}))

class PostQueryBuilder {
  build() {
    return 'SUPER * QUERY'
  }
}

let PostController = Service(
  [PostManager, PostRepository, PostQueryBuilder],
  (manager, repository, queryBuilder) => {
    return {
      id: manager.getId(),
      name: repository.getName(),
      query: queryBuilder.build(),
    }
  }
)

const postController = Container.get(PostController)

console.log(postController)
