# Migration `20200818044453-fixing-post`

This migration has been generated at 8/18/2020, 12:44:53 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

DROP INDEX "Post_authorId"

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200818032958-initial-migration..20200818044453-fixing-post
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource sqlite {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -13,9 +13,9 @@
 model User {
   id Int @id @default(autoincrement())
   name String
   email String
-  posts Post?
+  posts Post[]
   picture String?
   jobTitle String?
 }
```


