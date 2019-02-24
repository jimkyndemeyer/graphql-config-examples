# GraphQL Config Example: Two Schemas and Shared Types using Projects

This example uses a single `.graphqlconfig` to setup two schemas that both rely on
types in a shared folder.

__Things to note__: 
- The `shared` folder is configured as the first project with includes to ensure schema discovery is isolated within the shared folder.
- The `alpha` and `beta` schemas both reference the shared folder via their includes.
- Using a single config in the root is required for this structure as GraphQL files find their associated `.graphqlconfig`
  by looking in their current and parent directories.