import gql from 'graphql-tag';

// declares a component query that wants to consume a client-only field
const query = gql`
    query ComponentQuery {
        
        # returned by the client, e.g. via Apollo Link State or Apollo Core 2.5+ -- https://www.apollographql.com/docs/tutorial/local-state.html
        isLoggedIn @client
        
        # returned by the server
        serverData {
            valueFromServer
        }
    }
`;