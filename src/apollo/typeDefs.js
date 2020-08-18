import { gql } from '@apollo/client'

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        posts: [Post!]!
        picture: String
        jobTitle: String
    }

    type Post {
        id: ID!
        question: String!
        description: String!
        language: String
        author: User
        authorId: Int
        likes: Int
        comments: [String]
        views: Int
    }

    type Query {
        posts: [Post!]!
    }

    type Mutation {
        createPost(question: String!, description: String!, language: String) : Post!
        updatePost(id: ID!) : Post!
        deletePost(id: ID!): Post
    }
`