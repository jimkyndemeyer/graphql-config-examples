# GraphQL Config Example: Remote Schema Introspection

This example demonstrates how to use the endpoints configured in `.graphqlconfig` to fetch an existing remote schema.

![](graphql-config-introspect.png)

With `introspection: true` the plugin will automatically ask whether to update the local schema using the configured endpoint.

![](introspect-startup.png)

The update works by sending an introspection query to the endpoint, and then writing the result to the configured `schemaPath`.

The latest introspection query easily be re-run using the schemas panel:

![](introspect-re-run.png)

Introspection queries can also be executed by double-clicking endpoints in the schemas tree view:

![](introspect-endpoint.png) 
