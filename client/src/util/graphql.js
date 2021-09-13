import gql from 'graphql-tag'; // We had to download this using npm

// This file gets the data from our database. It is similar to the front-end calling APIs to the backend.
// We fetch all the queries related to posts and get their information.
// All the information returned from here is part of a post on the social media app.

// Read this for more information about graphql-tag https://github.com/apollographql/graphql-tag



export const FETCH_POSTS_QUERY = gql` 
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
