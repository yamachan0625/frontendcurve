import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      refreshToken
    }
  }
`;

export const SIGNUP = gql`
  mutation($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      userId
      token
      refreshToken
    }
  }
`;

export const CURRENET_USER = gql`
  {
    user {
      id
    }
  }
`;

export const MOVIE_LIST = gql`
  {
    movies {
      id
      name
      genre
      director {
        name
      }
    }
  }
`;
