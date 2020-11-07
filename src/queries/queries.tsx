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

export const CHANGE_PASSWORD = gql`
  mutation(
    $currentPassword: String!
    $newPassword: String!
    $confirmNewPassword: String!
  ) {
    changePassword(
      currentPassword: $currentPassword
      newPassword: $newPassword
      confirmNewPassword: $confirmNewPassword
    ) {
      password
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

export const GET_BAR_CHART_LIST = gql`
  query getBarChartList($date: Date!, $sortOrder: String!) {
    getBarChartList(date: $date, sortOrder: $sortOrder) {
      siteName
      jobData {
        React
        Angular
        VueJs
      }
    }
  }
`;
