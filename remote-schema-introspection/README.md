# GraphQL Config Example: Remote Schema Introspection

This example demonstrates how to use the endpoints configured in `.graphqlconfig` to fetch an existing remote schema.

![](graphql-config-introspect.png)

With `introspect: true` the plugin asks at project startup whether to update the local schema using the configured endpoint.

![](introspect-startup.png)

The update works by sending an introspection query to the endpoint, and then writing the result to the configured `schemaPath`.

The latest introspection query can easily be re-run using the schemas panel:

![](introspect-re-run.png)

Introspection queries can also be executed by double-clicking endpoints in the schemas tree view:

![](introspect-endpoint.png) 

__Notes and comments__
- If you're both developing the server schema and consuming it in a client, e.g. via component queries, you'll get the best tooling by having your schema expressed using GraphQL Schema Definition Language directly in your project. With that setup the plugin immediately discovers your schema, and you don't have to perform an introspection after server schema changes.
- Tip: The re-run introspection action can be bound to a keyboard shortcut for convenience
