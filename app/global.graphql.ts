import { gql } from '@apollo/client';

const getAllUsers = gql`
  query GetAllUsers {
    users {
      id
      email
    }
  }
`;

export { getAllUsers };
