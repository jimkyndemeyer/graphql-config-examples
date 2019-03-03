# GraphQL Config Example: Remote Schema Introspection

This example demonstrates how to use the endpoints configured in `.graphqlconfig` to fetch an existing remote schema.

With `introspection: true` the plugin will automatically ask whether to update the local schema using the configured endpoint.

![](graphql-config-introspect.png)

The update works by sending an introspection query to the endpoint, and then writing the result to the configured `schemaPath`.

![](introspect-startup.png)

The latest introspection query easily be re-run using the schemas panel:

![](introspect-re-run.png)

Introspection queries can also be executed by double-clicking endpoints in the schemas tree view:

![](introspect-endpoint.png) 