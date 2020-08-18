import { gql } from '@apollo/client'

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        picture: String
        jobTitle: String
        posts: [Post]
    }

    type Post {
        id: ID!
        question: String!
        description: String!
        language: String
        author: User!
        likes: Int
        comments: [String]
        views: Int
    }

    type Query {
        posts: Post!
    }

    type Mutation {
        createPost(question: String!, description: String!, language: String) : Post!
    }
`