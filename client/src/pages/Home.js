import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks'; /** This is a react hook for APOLLO CLIENT. We get 3 things from this.
* 1. loading - true when you are loading
2. Data that we are loading
3. Error object (but we have not used it here)
https://www.apollographql.com/docs/react/data/queries/
 To run a query within a React component, call useQuery and pass it a GraphQL query string (FETCH_POSTS_QUERY). 
 When your component renders, useQuery returns an object from Apollo Client 
 that contains loading, error, and data properties you can use to render your UI.
 */ 
import { Grid, Transition } from 'semantic-ui-react'; // We have used the Grid for our home page.

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql'; 

function Home() {
  const { user } = useContext(AuthContext);
  const { // We are getting the loading and data from the graphql
    loading,
    data: { getPosts: posts } // getPosts with alias posts. We are de-structuring the data object which comes in the form of an array.
  } = useQuery(FETCH_POSTS_QUERY);

  // The 3 column grid layout is from semantic UI.
  // So if we get loading from our query on apollo client then we will have Loading posts show up on the screen. Else We will iterate over the posts and show each post.
  // What happens if there is no loading however your posts are null? This is why we have the "posts &&" To ensure that posts is not a null value. Same thing applies for "users &&"
  return (
    <Grid columns={3}> 
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          <Transition.Group>
            {posts &&
              posts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;
