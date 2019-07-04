import gql from 'graphql-tag';

const clientSchemaExtensions = gql`
    
    "Indicates that the client should resolve the field value locally as part of a query, e.g. in a React component"
    directive @client on FIELD
    
    extend type Query {
        "Client-only field that indicates whether the user is logged in"
        isLoggedIn: Boolean
    }
`;