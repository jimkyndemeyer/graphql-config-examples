import gql from 'graphql-tag';

// defines the server schema using SDL
// see https://www.apollographql.com/docs/ for a tutorial for building a GraphQL Server
const schema = gql`
    type ServerType {
        valueFromServer: String!
    }

    type Query {
        serverData: ServerType
    }
`;
