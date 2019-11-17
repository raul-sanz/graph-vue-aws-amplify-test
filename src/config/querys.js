
const ListUsers = `
query{
  allUsers{
    name
    id
  }
}  
`

const listPosts=`
query{
  allPosts {
    id
    title
    description
    author {
      name
    }
  }
}  
`
const createPost = `
mutation($title: String!,$description: String!,$authorId: ID,$image: String!) {
  createPost(title: $title, description: $description, authorId:$authorId,imageUrl: $image) {
    id
    title
    description
    author {
      name
    }
  }
}`

export{
  ListUsers,
  listPosts,
  createPost
}