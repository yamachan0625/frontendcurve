import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  hash: Scalars['String'];
  expiry: Scalars['Date'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  refreshTokens: RefreshToken;
};

export type Auth = {
  __typename?: 'Auth';
  userId: Scalars['ID'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type SkillName = {
  __typename?: 'SkillName';
  TypeScript: Scalars['Int'];
  JavaScript: Scalars['Int'];
  React: Scalars['Int'];
  Angular: Scalars['Int'];
  VueJs: Scalars['Int'];
  NodeJs: Scalars['Int'];
  NextJs: Scalars['Int'];
  NuxtJs: Scalars['Int'];
  ReactNative: Scalars['Int'];
  Flutter: Scalars['Int'];
  Electron: Scalars['Int'];
  Graphql: Scalars['Int'];
  Redux: Scalars['Int'];
  VueX: Scalars['Int'];
  Jest: Scalars['Int'];
  Cypress: Scalars['Int'];
  Webpack: Scalars['Int'];
};

export type Job = {
  __typename?: 'Job';
  siteName: Scalars['String'];
  jobData: SkillName;
  date: Scalars['Date'];
};

export type JobData = {
  __typename?: 'JobData';
  siteName: Scalars['String'];
  skillName: Array<Maybe<Scalars['String']>>;
  jobVacancies: Array<Maybe<Scalars['Int']>>;
  chartColor: Array<Maybe<Scalars['String']>>;
  chartBorderColor: Array<Maybe<Scalars['String']>>;
};

export type BarChartResponse = {
  __typename?: 'BarChartResponse';
  scrapingDate: Scalars['Date'];
  minDate: Scalars['Date'];
  jobData: Array<Maybe<JobData>>;
};

export type LineChartSkillData = {
  __typename?: 'LineChartSkillData';
  label: Scalars['String'];
  data: Array<Maybe<Scalars['Int']>>;
  borderColor: Scalars['String'];
};

export type LineChartJobData = {
  __typename?: 'LineChartJobData';
  siteName: Scalars['String'];
  skillData: Array<LineChartSkillData>;
};

export type LineChartResponse = {
  __typename?: 'LineChartResponse';
  rangeDate: Array<Scalars['Date']>;
  jobData: Array<LineChartJobData>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  jobs?: Maybe<Array<Maybe<Job>>>;
  getBarChartList: BarChartResponse;
  getLineChartList: LineChartResponse;
};

export type QueryGetBarChartListArgs = {
  date: Scalars['Date'];
  sortOrder: Scalars['String'];
};

export type QueryGetLineChartListArgs = {
  dateRange: Scalars['String'];
  skills: Array<Maybe<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: Auth;
  login: Auth;
  changePassword: User;
};

export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
  confirmNewPassword: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type ChangePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
  confirmNewPassword: Scalars['String'];
}>;

export type ChangePasswordMutation = { __typename?: 'Mutation' } & {
  changePassword: { __typename?: 'User' } & Pick<User, 'password'>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'Auth' } & Pick<
    Auth,
    'userId' | 'token' | 'refreshToken'
  >;
};

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignupMutation = { __typename?: 'Mutation' } & {
  signup: { __typename?: 'Auth' } & Pick<
    Auth,
    'userId' | 'token' | 'refreshToken'
  >;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = { __typename?: 'Query' } & {
  user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'email'>>;
};

export type GetBarChartListQueryVariables = Exact<{
  date: Scalars['Date'];
  sortOrder: Scalars['String'];
}>;

export type GetBarChartListQuery = { __typename?: 'Query' } & {
  getBarChartList: { __typename?: 'BarChartResponse' } & Pick<
    BarChartResponse,
    'scrapingDate' | 'minDate'
  > & {
      jobData: Array<
        Maybe<
          { __typename?: 'JobData' } & Pick<
            JobData,
            | 'siteName'
            | 'skillName'
            | 'jobVacancies'
            | 'chartColor'
            | 'chartBorderColor'
          >
        >
      >;
    };
};

export type GetLineChartListQueryVariables = Exact<{
  dateRange: Scalars['String'];
  skills: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
}>;

export type GetLineChartListQuery = { __typename?: 'Query' } & {
  getLineChartList: { __typename?: 'LineChartResponse' } & Pick<
    LineChartResponse,
    'rangeDate'
  > & {
      jobData: Array<
        { __typename?: 'LineChartJobData' } & Pick<
          LineChartJobData,
          'siteName'
        > & {
            skillData: Array<
              { __typename?: 'LineChartSkillData' } & Pick<
                LineChartSkillData,
                'label' | 'data' | 'borderColor'
              >
            >;
          }
      >;
    };
};

export const ChangePasswordDocument = gql`
  mutation changePassword(
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
export type ChangePasswordMutationFn = Apollo.MutationFunction<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      currentPassword: // value for 'currentPassword'
 *      newPassword: // value for 'newPassword'
 *      confirmNewPassword: // value for 'confirmNewPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >
) {
  return Apollo.useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(ChangePasswordDocument, baseOptions);
}
export type ChangePasswordMutationHookResult = ReturnType<
  typeof useChangePasswordMutation
>;
export type ChangePasswordMutationResult = Apollo.MutationResult<
  ChangePasswordMutation
>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;
export const LoginDocument = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      refreshToken
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const SignupDocument = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      userId
      token
      refreshToken
    }
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >
) {
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    baseOptions
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
export const CurrentUserDocument = gql`
  query currentUser {
    user {
      id
      email
    }
  }
`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >
) {
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    baseOptions
  );
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >
) {
  return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    baseOptions
  );
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<
  typeof useCurrentUserLazyQuery
>;
export type CurrentUserQueryResult = Apollo.QueryResult<
  CurrentUserQuery,
  CurrentUserQueryVariables
>;
export const GetBarChartListDocument = gql`
  query getBarChartList($date: Date!, $sortOrder: String!) {
    getBarChartList(date: $date, sortOrder: $sortOrder) {
      scrapingDate
      minDate
      jobData {
        siteName
        skillName
        jobVacancies
        chartColor
        chartBorderColor
      }
    }
  }
`;

/**
 * __useGetBarChartListQuery__
 *
 * To run a query within a React component, call `useGetBarChartListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBarChartListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBarChartListQuery({
 *   variables: {
 *      date: // value for 'date'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useGetBarChartListQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBarChartListQuery,
    GetBarChartListQueryVariables
  >
) {
  return Apollo.useQuery<GetBarChartListQuery, GetBarChartListQueryVariables>(
    GetBarChartListDocument,
    baseOptions
  );
}
export function useGetBarChartListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBarChartListQuery,
    GetBarChartListQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetBarChartListQuery,
    GetBarChartListQueryVariables
  >(GetBarChartListDocument, baseOptions);
}
export type GetBarChartListQueryHookResult = ReturnType<
  typeof useGetBarChartListQuery
>;
export type GetBarChartListLazyQueryHookResult = ReturnType<
  typeof useGetBarChartListLazyQuery
>;
export type GetBarChartListQueryResult = Apollo.QueryResult<
  GetBarChartListQuery,
  GetBarChartListQueryVariables
>;
export const GetLineChartListDocument = gql`
  query getLineChartList($dateRange: String!, $skills: [String]!) {
    getLineChartList(dateRange: $dateRange, skills: $skills) {
      rangeDate
      jobData {
        siteName
        skillData {
          label
          data
          borderColor
        }
      }
    }
  }
`;

/**
 * __useGetLineChartListQuery__
 *
 * To run a query within a React component, call `useGetLineChartListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLineChartListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLineChartListQuery({
 *   variables: {
 *      dateRange: // value for 'dateRange'
 *      skills: // value for 'skills'
 *   },
 * });
 */
export function useGetLineChartListQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLineChartListQuery,
    GetLineChartListQueryVariables
  >
) {
  return Apollo.useQuery<GetLineChartListQuery, GetLineChartListQueryVariables>(
    GetLineChartListDocument,
    baseOptions
  );
}
export function useGetLineChartListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLineChartListQuery,
    GetLineChartListQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetLineChartListQuery,
    GetLineChartListQueryVariables
  >(GetLineChartListDocument, baseOptions);
}
export type GetLineChartListQueryHookResult = ReturnType<
  typeof useGetLineChartListQuery
>;
export type GetLineChartListLazyQueryHookResult = ReturnType<
  typeof useGetLineChartListLazyQuery
>;
export type GetLineChartListQueryResult = Apollo.QueryResult<
  GetLineChartListQuery,
  GetLineChartListQueryVariables
>;
