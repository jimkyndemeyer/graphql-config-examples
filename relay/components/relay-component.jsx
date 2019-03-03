// Note! Relay must be enabled in the Languages & Frameworks > GraphQL Settings for the directives to be enabled
// See https://facebook.github.io/relay/docs/en/fragment-container.html
const UserListContainer = createFragmentContainer(
    UserList,
    {
        viewer: graphql`
            fragment UserList_viewer on Viewer @argumentDefinitions(
                count: { type: "Int", defaultValue: 10 }
                cursor: { type: "String" }
            ) {
                id
            }
        `,
    }
);
