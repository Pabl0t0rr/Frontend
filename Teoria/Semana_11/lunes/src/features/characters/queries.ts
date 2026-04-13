import { gql } from "@apollo/client";

export const getSimpleCharacters = gql`
  query getSimpleCharacters {
    characters {
      results {
        id
        name
      }
    }
  }
`;
